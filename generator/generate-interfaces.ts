import * as _ from 'underscore';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { DefInfo, getRef, resolveSchemaType, getReferencedTypes } from './util';
import { OpenAPIObject, SchemaObject } from 'openapi3-ts';
import { generateHeader, generateImports, docComment, indent, addImport } from './generate-common';

export function generateInterfaceDefinitions(file: string, components: DefInfo[], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }) {
  const importFiles: { [filename: string]: Set<string> } = {};

  const componentDefinitions = components.map((component) => generateComponentDefinition(component, doc, componentByDef, importFiles));

  const filename = `dist/${file}`;

  const imports = generateImports(filename, importFiles);

  const definition = [generateHeader(doc), imports, ...componentDefinitions].join('\n\n') + '\n';

  mkdirp(path.dirname(filename), (err) => {
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
    return generateInterfaceSchema(defInfo.interfaceName, component, doc, componentByDef, importFiles);
  }
}

function generateEnum(defInfo: DefInfo, component: SchemaObject) {
  const values = component['x-enum-values'].map((value) => {
    const doc = value.description ? docComment(value.description) + '\n' : '';
    return `${doc}${value.identifier} = ${value.numericValue}`;
  }).join(',\n');

  // TODO: const enums are super efficient (they get inlined) but we may want to change this if we want to do things like
  // print out the name of an enum case.
  return `export const enum ${defInfo.interfaceName} {
${indent(values, 1)}
}`;
}

function generateInterfaceSchema(interfaceName: string, component: SchemaObject, doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }, importFiles: { [filename: string]: Set<string> }) {
  const parameterArgs = _.map(component.properties!, (schema: SchemaObject, param) => {
    const paramType = resolveSchemaType(schema!, doc);
    addImport(schema!, componentByDef, importFiles);
    const docs = schema.description ? [schema.description] : [];
    if (schema['x-mapped-definition']) {
      docs.push(`Mapped to ${componentByDef[schema['x-mapped-definition'].$ref].interfaceName} in the manifest.`);
    }
    const docString = docs.length ? docComment(docs.join('\n')) + '\n' : '';
    // TODO: we're always marking things as possibly being undefined. It'd be nice to narrow that!
    const nullable = schema.nullable || schema.type === 'object' || schema.type === 'array';
    return `${docString}readonly ${param}${nullable ? '?' : '?'}: ${paramType};`;
  });
  const docString = component.description ? docComment(component.description) + '\n' : '';
  return `${docString}export interface ${interfaceName} {
${indent(parameterArgs.join('\n'), 1)}
}`;
}
