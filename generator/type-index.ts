import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ParameterObject, SchemaObject, ReferenceObject } from 'openapi3-ts';
import { getRef, lastPart, getReferencedTypes, DefInfo, interfaceName } from './util';

export function computeTypeMaps(pathPairsByTag: { [tag: string]: [string, PathItemObject][] }, doc: OpenAPIObject) {
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
      filename: chooseFile(def, tags, allTags),
      interfaceName: interfaceName(def)
    };

    componentsByFile[info.filename] = componentsByFile[info.filename] || [];
    componentsByFile[info.filename].push(info);
    componentByDef[info.def] = info;
    console.log(info);
  }

  return { componentsByFile, componentByDef };
}

// TODO: put responses in a separate file???
function chooseFile(def: string, tags: string[], allTags: string[]) {
  const schemaName: string = _.last(def.split('/'))!;
  const matchingTag = allTags.find((tag) => schemaName.startsWith(tag + '.'));
  const filename = def.includes('/responses/') ? '/responses.d.ts' : '/interfaces.d.ts';
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
      // TODO: split out responses here too?
      return 'platform.d.ts';
    } else {
      return 'common.d.ts';
    }
  }
}


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
  const paramTypes = new Set(params.map((param) => getReferencedTypes(param.schema!)).filter((p) => p)) as Set<string>;

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

function addDefinitionsFromComponent(allDefinitions: Set<string>, definition: string | undefined, doc: OpenAPIObject) {
  // TODO: ignore components like boolean and int32
  //if (definition.endsWith('/boolean') || definition.endsWith('/int32')) {
  //  return;
  //}
  if (definition && !allDefinitions.has(definition)) {
    allDefinitions.add(definition);
    addReachableComponentsFromComponent(allDefinitions, definition, doc);
  }
}

