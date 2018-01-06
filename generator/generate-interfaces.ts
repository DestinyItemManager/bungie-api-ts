import * as _ from 'underscore';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { DefInfo, getRef } from './util';
import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import { generateHeader, generateImports, docComment, indent } from './generate-common';

export function generateInterfaceDefinitions(file: string, components: DefInfo[], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }) {
  let interfaceDefinition = generateHeader(doc);

  // TODO: make this a map of file -> types, so we can do specific imports
  const importFiles: { [filename: string]: Set<string> } = {};

  const componentDefinitions = components.map((component) => generateComponentDefinition(component, doc, componentByDef, importFiles));

  const filename = `dist/${file}`;

  const imports = generateImports(filename, importFiles);

  const definition = [interfaceDefinition, imports, ...componentDefinitions].join('\n\n');

  mkdirp(path.dirname(filename), function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(filename, definition, null, (error) => {
        console.log(error ? error : `Done with ${file}!`);
      });
    }
  });
}

function generateComponentDefinition(defInfo: DefInfo, doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }, importFiles: { [filename: string]: Set<string> }) {
  const component = getRef(doc, defInfo.def);

  if (component.enum) {
    return generateEnum(defInfo, component);
  } else {
    return `export interface ${defInfo.interfaceName} {
}`;
  }
}

function generateEnum(defInfo: DefInfo, component: SchemaObject) {
  const values = component['x-enum-values'].map((value) => {
    const doc = value.description ? docComment(value.description) + '\n' : '';
    return `${doc}${value.identifier} = ${value.numericValue}`;
  }).join(',\n');

  return `export const enum ${defInfo.interfaceName} {
${indent(values, 1)}
}`;
}