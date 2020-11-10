import _ from 'underscore';
import {
  OpenAPIObject,
  PathItemObject,
  ParameterObject,
  SchemaObject,
  ReferenceObject,
} from 'openapi3-ts';
import {
  getRef,
  lastPart,
  getReferencedTypes,
  DefInfo,
  interfaceName,
  isRequestBodyObject,
} from './util.js';

export function computeTypeMaps(
  pathPairsByTag: { [tag: string]: [string, PathItemObject][] },
  doc: OpenAPIObject
) {
  const allDefsEverywhere = new Set<string>();
  const defsByTag: { [tag: string]: Set<string> } = {};
  _.each(pathPairsByTag, (paths, tag) => {
    const defs = findReachableComponents(tag, paths, doc);
    addAll(allDefsEverywhere, defs);
    defsByTag[tag] = defs;
  });

  const allTags = Object.keys(pathPairsByTag);

  const componentsByFile: { [filename: string]: DefInfo[] } = {};
  const componentByDef: { [def: string]: DefInfo } = {};
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
      filename: chooseFile(def, tags, allTags),
      interfaceName: interfaceName(def, doc),
    };

    componentsByFile[info.filename] = componentsByFile[info.filename] || [];
    componentsByFile[info.filename].push(info);
    componentByDef[info.def] = info;
  }

  return { componentsByFile, componentByDef };
}

// TODO: put enums in a separate file???
// TODO: put things ending in Request in a separate file?
// TODO: put manifest stuff in a separate file?
function chooseFile(def: string, tags: string[], allTags: string[]) {
  const schemaName: string = _.last(def.split('/'))!;
  const matchingTag = allTags.find((tag) => schemaName.startsWith(tag + '.'));

  const filename = '/interfaces.ts';
  if (matchingTag) {
    return matchingTag.toLowerCase() + filename;
  } else if (schemaName.startsWith('GroupsV2.')) {
    return 'groupv2' + filename;
  } else if (schemaName.startsWith('Destiny.')) {
    return 'destiny2' + filename;
  } else {
    if (tags.length === 1) {
      return tags[0].toLowerCase() + filename;
    } else if (!tags.includes('Destiny2')) {
      return 'platform.ts';
    } else {
      return 'common.ts';
    }
  }
}

function findReachableComponents(
  tag: string,
  paths: [string, PathItemObject][],
  doc: OpenAPIObject
) {
  const pathDefinitions = paths.reduce(
    (memo: Set<string>, [_, pathDef]) =>
      addAll(memo, findReachableComponentsFromPath(pathDef, doc)),
    new Set<string>()
  );

  const allDefinitions = new Set(pathDefinitions);
  pathDefinitions.forEach((definition) =>
    addReachableComponentsFromComponent(allDefinitions, definition, doc)
  );
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
  const paramTypes = new Set(
    params.map((param) => getReferencedTypes(param.schema!)).filter((p) => p)
  ) as Set<string>;

  const requestBody = methodDef.requestBody;
  if (requestBody && isRequestBodyObject(requestBody)) {
    const schema = requestBody.content['application/json'].schema!;
    const paramType = getReferencedTypes(schema);
    if (paramType) {
      paramTypes.add(paramType);
    }
  }

  const returnType = getReferencedTypes(methodDef.responses['200']);
  if (returnType) {
    paramTypes.add(returnType);
  }

  return paramTypes;
}

function addReachableComponentsFromComponent(
  allDefinitions: Set<string>,
  definition: string,
  doc: OpenAPIObject
) {
  const component = getRef(doc, definition);
  if (!component) {
    return;
  }

  if (component && component.type === 'array') {
    addDefinitions(allDefinitions, component.items!, doc);
  } else if (component.type === 'object') {
    if (component.properties) {
      Object.values(component.properties).forEach((schema: SchemaObject | ReferenceObject) => {
        addDefinitions(allDefinitions, schema, doc);
      });
    }
    (component.allOf || []).forEach((schema: SchemaObject | ReferenceObject) => {
      addDefinitions(allDefinitions, schema, doc);
    });
    if (component.additionalProperties && typeof component.additionalProperties !== 'boolean') {
      addDefinitions(allDefinitions, component.additionalProperties, doc);
    }
  }
}

function addDefinitions(allDefinitions: Set<string>, schema: SchemaObject, doc: OpenAPIObject) {
  const newDefinition = getReferencedTypes(schema);
  addDefinitionsFromComponent(allDefinitions, newDefinition, doc);
  if (schema['x-mapped-definition']) {
    addDefinitionsFromComponent(allDefinitions, schema['x-mapped-definition'].$ref, doc);
  }
}

function addDefinitionsFromComponent(
  allDefinitions: Set<string>,
  definition: string | undefined,
  doc: OpenAPIObject
) {
  if (definition && !allDefinitions.has(definition)) {
    allDefinitions.add(definition);
    addReachableComponentsFromComponent(allDefinitions, definition, doc);
  }
}
