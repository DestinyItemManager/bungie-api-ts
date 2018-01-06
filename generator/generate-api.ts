import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ParameterObject, SchemaObject, ReferenceObject } from 'openapi3-ts';
import { lastPart, lcFirst, resolveSchemaType, DefInfo, getReferencedTypes } from './util';
import { generateHeader, generateImports, docComment, indent } from './generate-common'
import { relative } from 'path';

const httpClientType = `import { HttpClient } from '../http';`;

export function generateServiceDefinition(tag: string, paths: [string, PathItemObject][], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }): void {
  let interfaceDefinition = generateHeader(doc);

  // TODO: make this a map of file -> types, so we can do specific imports
  const importFiles: { [filename: string]: Set<string> } = {};

  const pathDefinitions = paths.map(([path, pathDef]) => generatePathDefinition(path, pathDef, doc, componentByDef, importFiles));

  const filename = `dist/${tag.toLowerCase()}/api.ts`;

  const imports = generateImports(filename, importFiles);

  const definition = [interfaceDefinition, httpClientType, imports, ...pathDefinitions].join('\n\n');

  mkdirp(path.dirname(filename), function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(filename, definition, null, (error) => {
        console.log(error ? error : `Done with ${tag}!`);
      });
    }
  });
}

function generatePathDefinition(path: string, pathDef: PathItemObject, doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }, importFiles: { [filename: string]: Set<string> }) {
  const server = doc.servers![0].url;
  const interfaceName = lastPart(pathDef.summary!)
  const functionName = lcFirst(interfaceName);

  const method = pathDef.get ? 'GET' : 'POST';
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];

  const queryParameterNames = params.filter((param) => param.in == 'query').map((param) => param.name);


  const parameterArgs = ['http: HttpClient'];
  let interfaceDefinition = '';
  if (params.length) {
    interfaceDefinition = generateInterfaceSchema(interfaceName + 'Params', params, doc, componentByDef, importFiles) + '\n\n';
    parameterArgs.push(`params: ${interfaceName}Params`);
  }

  const templatizedPath = path.includes("{") ? `\`${server}${path.replace(/{/g, "${params.")}\`` : `'${server}${path}'`;

  let paramsObject = "";
  if (queryParameterNames.length) {
    paramsObject = `,
    params: {
${indent(queryParameterNames.map((p) => `${p}: params.${p}`).join(',\n'), 3)}
    }`
  }

  const returnValue = resolveSchemaType(methodDef.responses['200'], doc);
  addImport(methodDef.responses['200'], componentByDef, importFiles);

  return `${interfaceDefinition}${docComment(methodDef.description!)}
export async function ${functionName}(${parameterArgs.join(', ')}): Promise<${returnValue}> {
  return http({
    method: '${method}',
    url: ${templatizedPath}${paramsObject}
  });
}`;
}

function generateInterfaceSchema(interfaceName: string, params: ParameterObject[], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }, importFiles: { [filename: string]: Set<string> }) {
  const parameterArgs = params.map((param) => {
    const paramType = resolveSchemaType(param.schema!, doc);
    addImport(param.schema!, componentByDef, importFiles);
    const docString = param.description ? docComment(param.description) + '\n' : '';
    return `${docString}${param.name}${param.required ? '' : '?'}: ${paramType}`;
  });
return `export interface ${interfaceName} {
${indent(parameterArgs.join('\n'), 1)}
}`;
}

function addImport(schema: SchemaObject | ReferenceObject, componentByDef: {[def: string]: DefInfo }, importFiles: { [filename: string]: Set<string> }) {
  const typeRef = getReferencedTypes(schema);
  if (typeRef && componentByDef[typeRef]) {
    const filename = componentByDef[typeRef].filename;
    importFiles[filename] = importFiles[filename] || new Set();
    importFiles[filename].add(componentByDef[typeRef].interfaceName);
  }
}