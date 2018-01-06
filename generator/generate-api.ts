import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ParameterObject } from 'openapi3-ts';
import { lastPart, lcFirst, resolveSchemaType, DefInfo } from './util';
import { generateHeader } from './generate-common'

const httpClientType = `import { HttpClient } from '../http';`;

export function generateServiceDefinition(tag: string, paths: [string, PathItemObject][], doc: OpenAPIObject, componentByDef: {[def: string]: DefInfo }): void {
  let interfaceDefinition = generateHeader(doc);

  const pathDefinitions = paths.map(([path, pathDef]) => generatePathDefinition(path, pathDef, doc));

  const definition = [interfaceDefinition, httpClientType, ...pathDefinitions].join('\n\n');
  const filename = `dist/${tag.toLowerCase()}/api.ts`;

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

function generatePathDefinition(path: string, pathDef: PathItemObject, doc: OpenAPIObject) {
  const server = doc.servers![0].url;
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

  const templatizedPath = path.includes("{") ? `\`${server}${path.replace(/{/g, "${")}\`` : `'${server}${path}'`;

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
    url: ${templatizedPath}${paramsObject}
  }) as Promise<${returnValue}>;
}`;
}