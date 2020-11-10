import _ from 'underscore';
import { DefInfo, getRef, resolveSchemaType } from './util.js';
import { OpenAPIObject, ReferenceObject, SchemaObject } from 'openapi3-ts';
import {
  generateHeader,
  generateImports,
  docComment,
  indent,
  addImport,
  writeOutFile,
} from './generate-common.js';

/**
 * Some properties aren't marked as nullable in the openapi docs, but they are frequently null in practice and cause trouble.
 * Adding a property to this list forces it to be emitted as nullable.
 */
const frequentlyNullProperties = ['itemCategoryHashes'];

export function generateInterfaceDefinitions(
  file: string,
  components: DefInfo[],
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo }
) {
  const importFiles: { [filename: string]: Set<string> } = {};

  const componentDefinitions = components.map((component) =>
    generateComponentDefinition(component, doc, componentByDef, importFiles)
  );

  const filename = `generated-src/${file}`;

  let specialDefinitions;
  if (file === 'destiny2/interfaces.ts') {
    specialDefinitions = generateSpecialDefinitions();
  }
  if (file === 'common.ts') {
    specialDefinitions = generateServerResponseDefinitions();
  }

  const imports = generateImports(filename, importFiles);

  const definition =
    _.compact([generateHeader(doc), imports, specialDefinitions, ...componentDefinitions]).join(
      '\n\n'
    ) + '\n';

  writeOutFile(filename, definition);
}

function generateComponentDefinition(
  defInfo: DefInfo,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: { [filename: string]: Set<string> }
) {
  const component = getRef(doc, defInfo.def);
  if (!component) {
    return undefined;
  }

  if (component.enum) {
    return generateEnum(defInfo, component);
  } else if (isSpecialType(defInfo.interfaceName)) {
    return undefined;
  } else {
    return generateInterfaceSchema(
      defInfo.interfaceName,
      component,
      doc,
      componentByDef,
      importFiles
    );
  }
}

function generateEnum(defInfo: DefInfo, component: SchemaObject) {
  const values = component['x-enum-values']
    .map((value: SchemaObject) => {
      const doc = value.description ? docComment(value.description) + '\n' : '';
      return `${doc}${value.identifier} = ${value.numericValue}`;
    })
    .join(',\n');

  const docs = component.description ? [component.description] : [];
  if (component['x-enum-is-bitmask']) {
    docs.push(
      `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
    );
  }

  const docString = docs.length ? docComment(docs.join('\n')) + '\n' : '';

  // TODO: const enums are super efficient (they get inlined) but we may want to change this if we want to do things like
  // print out the name of an enum case.
  return `${docString}export const enum ${defInfo.interfaceName} {
${indent(values, 1)}
}`;
}

function generateInterfaceSchema(
  interfaceName: string,
  component: SchemaObject,
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: { [filename: string]: Set<string> }
) {
  const parameterArgs = _.map(component.properties!, (schema: SchemaObject, param) => {
    const paramType = resolveSchemaType(schema, doc);
    addImport(doc, schema, componentByDef, importFiles);
    const docs = schema.description ? [schema.description] : [];
    if (schema['x-mapped-definition']) {
      docs.push(
        `Mapped to ${
          componentByDef[schema['x-mapped-definition'].$ref].interfaceName
        } in the manifest.`
      );
    }
    if (schema['x-enum-is-bitmask']) {
      docs.push(
        `This enum represents a set of flags - use bitwise operators to check which of these match your value.`
      );
    }
    const docString = docs.length ? docComment(docs.join('\n')) + '\n' : '';
    return `${docString}readonly ${param}${
      schema.nullable ||
      frequentlyNullProperties.includes(param) ||
      schema.description?.toLowerCase().includes('null')
        ? '?'
        : ''
    }: ${paramType};`;
  });
  const docString = component.description ? docComment(component.description) + '\n' : '';
  return `${docString}export interface ${interfaceName} {
${indent(parameterArgs.join('\n'), 1)}
}`;
}

function isSpecialType(name: string) {
  return name.includes('>');
}

function generateSpecialDefinitions() {
  return `export interface SingleComponentResponse<T> {
  readonly data?: T;
  readonly privacy: ComponentPrivacySetting;
}

export interface DictionaryComponentResponse<T> {
  readonly data?: { [key: string]: T };
  readonly privacy: ComponentPrivacySetting;
}`;
}

function generateServerResponseDefinitions() {
  return `export interface ServerResponse<T> {
  readonly Response: T;
  readonly ErrorCode: PlatformErrorCodes;
  readonly ThrottleSeconds: number;
  readonly ErrorStatus: string;
  readonly Message: string;
  readonly MessageData: { [key: string]: string };
}`;
}
