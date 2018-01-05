/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import * as fs from 'fs';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ComponentsObject, ParameterObject, SchemaObject, ReferenceObject } from 'openapi3-ts';

// TODO: for properties that have x-mapped-definition, typedef them?
// TODO: readonly properties
// TODO: test that the last part of the name is unique
// TODO: common chunk
// TODO: break into more files

// TODO: put this in a shared file
const httpClientType = `interface HttpClientConfig {
  method: 'GET' | 'POST',
  path: string,
  params?: any
}
type HttpClient = (config: HttpClientConfig) => Promise<any>`;

const doc = JSON.parse(fs.readFileSync('api-src/openapi.json').toString()) as OpenAPIObject;

const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
  return (desc.get || desc.post)!.tags![0];
});

_.each(pathPairsByTag, (paths, tag) => {
  findReachableComponents(tag, paths, doc);
  // TODO: put them all into one set, check uniqueness
  // TODO: generate the list of components that share 1 or more tag
});

_.each(pathPairsByTag, (paths, tag) => {
  generateServiceDefinition(tag, paths, doc);
});

function findReachableComponents(tag: string, paths: [string, PathItemObject][], doc: OpenAPIObject): void {
  const pathDefinitions = paths.reduce((memo: Set<string>, [path, pathDef]) => addAll(memo, findReachableComponentsFromPath(pathDef, doc)), new Set());

  // TODO: OK now find all components reachable from *that*

  const allDefinitions = new Set(pathDefinitions);

  pathDefinitions.forEach((definition) => addReachableComponentsFromComponent(allDefinitions, definition, doc))

  console.log(tag, allDefinitions);
}

function addAll<T>(first: Set<T>, second: Set<T>): Set<T> {
  for (const value of second) {
    first.add(value);
  }
  return first;
}

function findReachableComponentsFromPath(pathDef: PathItemObject, doc: OpenAPIObject): Set<string> {
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];
  const paramTypes = new Set(params.map((param) => getReferencedTypes(param.schema!)).filter((p) => p));

  const returnType = getReferencedTypes(methodDef.responses['200']);
  if (returnType) {
    paramTypes.add(returnType);
  }

  return paramTypes;
}

function addReachableComponentsFromComponent(allDefinitions: Set<string>, definition: string, doc: OpenAPIObject) {
  const component = getRef(doc, definition);

  //console.log("Got ref", definition);

  if (component.type === 'array') {
    addDefinitions(allDefinitions, component.items!, doc);
  } else if (component.type === 'object') {
    Object.values(component.properties).forEach((schema: SchemaObject | ReferenceObject) => {
      addDefinitions(allDefinitions, schema, doc);
    });
  }
}

function addDefinitions(allDefinitions: Set<string>, schema: SchemaObject | ReferenceObject, doc: OpenAPIObject) {
  const newDefinition = getReferencedTypes(schema);
  addDefinitionsFromComponent(allDefinitions, newDefinition, doc);
  if (schema['x-mapped-definition']) {
    addDefinitionsFromComponent(allDefinitions, schema['x-mapped-definition'].$ref, doc);
  }
}

function addDefinitionsFromComponent(allDefinitions: Set<string>, definition: string, doc: OpenAPIObject) {
  if (definition && !allDefinitions.has(definition)) {
    allDefinitions.add(definition);
    addReachableComponentsFromComponent(allDefinitions, definition, doc);
  }
}

function getReferencedTypes(schema: SchemaObject | ReferenceObject) {
  if ((schema as SchemaObject).items) {
    return getReferencedTypes((schema as SchemaObject).items!);
  } else if ((schema as ReferenceObject).$ref) {
    return (schema as ReferenceObject).$ref
  }
}

function generateServiceDefinition(tag: string, paths: [string, PathItemObject][], doc: OpenAPIObject): void {
  let interfaceDefinition = generateHeader(doc);

  const pathDefinitions = paths.map(([path, pathDef]) => generatePathDefinition(path, pathDef, doc));

  const definition = [interfaceDefinition, httpClientType, ...pathDefinitions].join('\n\n');

  fs.writeFile(`dist/${tag.toLowerCase()}.ts`, definition, null, (error) => {
    console.log(error ? error : `Done with ${tag}!`);
  });
}

function generatePathDefinition(path: string, pathDef: PathItemObject, doc: OpenAPIObject) {
  const functionName = lcFirst(lastPart(pathDef.summary!));

  const method = pathDef.get ? 'GET' : 'POST';
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];

  const queryParameterNames = params.filter((param) => param.in == 'query').map((param) => param.name);

  const parameterArgs = ['http: HttpClient', ...params.map((param) => {
    const paramType = resolveSchemaType(param.schema!, doc);
    return `${param.name}: ${paramType}`;
  })]

  let parameterDocs = "\n *\n" + params.map((param) => {
    const paramType = resolveSchemaType(param.schema!, doc);
    return ` * @param ${param.name}: ${param.description}`;
  }).join("\n");

  const templatizedPath = path.includes("{") ? `\`${path.replace(/{/g, "${")}\`` : `'${path}'`;

  let paramsObject = "";
  if (queryParameterNames.length) {
    paramsObject = `,
  params: { ${queryParameterNames.join(', ')} }
`
  }

  const returnValue = resolveSchemaType(methodDef.responses['200'], doc);

  return `/**
 * ${methodDef.description}${params.length ? parameterDocs : ''}
 */
export async function ${functionName}(${parameterArgs.join(', ')}): Promise<${returnValue}> {
  return http({
    method: '${method}',
    path: ${templatizedPath}${paramsObject}
  }) as Promise<${returnValue}>;
}`;
}

function resolveSchemaType(schema: SchemaObject | ReferenceObject, doc: OpenAPIObject) {
  if ((schema as ReferenceObject).$ref) {
    return lastPart(lastPart((schema as ReferenceObject).$ref));
  } else {
    return typeMapping(schema as SchemaObject, doc);
  }
}

function typeMapping(schema: SchemaObject, doc: OpenAPIObject) {
  switch(schema.type) {
    case "integer":
      return "number";
    case "array":
      return `${resolveSchemaType(schema.items!, doc)}[]`;
  }

  return schema.type;
}

function lcFirst(name: string): string {
  return name[0].toLowerCase() + name.substring(1);
}

function lastPart(name: string): string {
  return _.last(name.split(/[\.\/]/))!;
}

function getRef(doc: OpenAPIObject, ref: string): SchemaObject {
  const path = ref.replace('#/', '').split('/');
  let result = doc;
  let pathSegment = path.shift()
  while (pathSegment) {
    result = result[pathSegment];
    pathSegment = path.shift()
  }
  if (result.content) {
    return result.content['application/json'].schema;
  } else {
    return result;
  }
}

function generateHeader(doc: OpenAPIObject): string {
  const { info } = doc;
  return `/**
 * ${info.title}
 * ${info.description}
 *
 * OpenAPI spec version: ${info.version}
 * Contact: ${info.contact!.email}
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */`;
}

// group paths by service
// get trees of components for each service
// find overlapping components for a common file
// generate input/output types for each path
// map components to interfaces / enums
// make sure to include documentation
// generate functions from hash to definition? use type aliases?
// match docs as much as possible
// export constants/functions for paths? request objects?
// some way to mark "preview" stuff
// need a function to look up refs?