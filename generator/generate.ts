/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import * as fs from 'fs';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ComponentsObject, ParameterObject, SchemaObject, ReferenceObject } from 'openapi3-ts';
import { getRef, lastPart, lcFirst, resolveSchemaType, DefInfo } from './util';
import { generateServiceDefinition } from './generate-api';

// TODO: for properties that have x-mapped-definition, typedef them?
// TODO: readonly properties
// TODO: test that the last part of the name is unique
// TODO: common chunk
// TODO: break into more files

// TODO: how to split them up? For example, Destiny.Definitions should probably be in its own file, etc.
// maybe group requests and responses, etc?
// mobile manifest entities (x-whatever) should probably be on their own?
// TODO: need a type registry then
// TODO: reexport types from each service?

// TODO: OK split responses from schemas. Naming?

// TODO: type manager with type, file location mapping, and maybe dependenies?

const doc = JSON.parse(fs.readFileSync('api-src/openapi.json').toString()) as OpenAPIObject;

const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
  return (desc.get || desc.post)!.tags![0];
});

const allDefsEverywhere = new Set();
const defsByTag = {};
_.each(pathPairsByTag, (paths, tag) => {
  const defs = findReachableComponents(tag, paths, doc);
  addAll(allDefsEverywhere, defs);
  defsByTag[tag] = defs;
});

const allTags = Object.keys(pathPairsByTag);

const componentsByFile = {};
const componentByDef = {};
for (const def of allDefsEverywhere) {
  const tags: string[] = [];
  _.each(defsByTag, (defs: Set<string>, tag) => {
    if (defs.has(def)) {
      tags.push(tag);
    }
  });
  const info: DefInfo = {
    def,
    tags,
    filename: chooseFile(def, tags),
    interfaceName: interfaceName(def)
  };

  componentsByFile[info.filename] = componentsByFile[info.filename] || [];
  componentsByFile[info.filename].push(info);
  componentByDef[info.def] = info;
  console.log(info);
}

function chooseFile(def: string, tags: string[]) {
  const schemaName: string = _.last(def.split('/'))!;
  const matchingTag = allTags.find((tag) => schemaName.startsWith(tag + '.'));
  if (matchingTag) {
    return matchingTag.toLowerCase() + '/interface.d.ts';
  } else if (schemaName.startsWith('GroupsV2.')) {
    return 'groupv2/interface.d.ts';
  } else if (schemaName.startsWith('Destiny.')) {
    return 'destiny2/interface.d.ts';
  } else {
    if (tags.length === 1) {
      return tags[0].toLowerCase() + '.d.ts';
    } else if (!tags.includes('Destiny2')) {
      return 'platform.d.ts';
    } else {
      return 'common.d.ts';
    }
  }
}

_.each(componentsByFile, (components: DefInfo[], file: string) => {
  generateInterfaceDefinitions(file, components, doc, componentByDef);
});

_.each(pathPairsByTag, (paths, tag) => {
  generateServiceDefinition(tag, paths, doc, componentByDef);
});

function findReachableComponents(tag: string, paths: [string, PathItemObject][], doc: OpenAPIObject) {
  const pathDefinitions = paths.reduce((memo: Set<string>, [path, pathDef]) => addAll(memo, findReachableComponentsFromPath(pathDef, doc)), new Set());

  // TODO: OK now find all components reachable from *that*

  const allDefinitions = new Set(pathDefinitions);

  pathDefinitions.forEach((definition) => addReachableComponentsFromComponent(allDefinitions, definition, doc))

  //console.log(tag, allDefinitions);
  return allDefinitions;
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
  // TODO: ignore components like boolean and int32
  //if (definition.endsWith('/boolean') || definition.endsWith('/int32')) {
  //  return;
  //}
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

function interfaceName(componentPath: string) {
  const name = lastPart(componentPath);
  if (componentPath.includes('/responses/')) {
    return name + 'ServerResponse';
  } else {
    return name;
  }
}

function generateInterfaceDefinitions(file: string, components: DefInfo[], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }) {

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