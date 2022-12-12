import {
  DefInfo,
  getRef,
  isReferenceObject,
  isRequestBodyObject,
  lastPart,
  lcFirst,
  resolveSchemaType,
} from './util.js';
import { OpenAPIObject, ParameterObject, PathItemObject } from 'openapi3-ts';
import {
  addImport,
  docComment,
  generateHeader,
  generateImports,
  indent,
  writeOutFile,
} from './generate-common.js';

const httpClientType = `import { HttpClient, get, post } from '../http.js';`;

/**
 * Generate an api.ts file for a particular "service", which is defined by a specific tag on the path entry
 * in the OpenAPI spec. e.g. all the User service paths have the tag "User".
 */
export function generateServiceDefinition(
  tag: string,
  paths: [path: string, pathDef: PathItemObject][],
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo }
): void {
  const importFiles: { [filename: string]: Set<string> } = {};

  let server = doc.servers![0].url;
  const prefix = getLongestCommonPrefix(paths.map((p) => p[0]));

  const pathDefinitions = paths.map(([path, pathDef]) =>
    generatePathDefinition(path, pathDef, doc, componentByDef, importFiles, prefix)
  );

  const filename = `generated-src/${tag.toLowerCase()}/api.ts`;

  const imports = generateImports(filename, importFiles);

  const apiBase = `const API_BASE = "${server}${prefix}";`;

  const definition =
    [
      generateHeader(doc),
      httpClientType,
      imports,
      prefix.length > 0 ? apiBase : undefined,
      ...pathDefinitions,
    ]
      .filter(Boolean)
      .join('\n\n') + '\n';

  writeOutFile(filename, definition);
}

/**
 * Generate a properly typed function for the API implementation, that will pass the correct parameters
 * to the HTTP client.
 *
 * Example:
 *
 * export function getVendors(http: HttpClient, params: GetVendorsParams): Promise<ServerResponse<DestinyVendorsResponse>> {
 *   return http({
 *     method: 'GET',
 *     url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
 *     params: {
 *       components: params.components?.join(','),
 *       filter: params.filter
 *     }
 *   });
 * }
 */
function generatePathDefinition(
  /** The path specification for the API */
  path: string,
  /** OpenAPI information about the path object */
  pathDef: PathItemObject,
  /** The whole OpenAPI document */
  doc: OpenAPIObject,
  componentByDef: Readonly<{ [def: string]: DefInfo }>,
  importFiles: { [filename: string]: Set<string> }, // mutated
  pathPrefix: string
) {
  let server = doc.servers![0].url;
  // per https://github.com/Bungie-net/api/issues/853
  // strict condition, so no surprises if doc.servers changes
  let usePathPrefix = pathPrefix.length > 0;
  if (
    server === 'https://www.bungie.net/Platform' &&
    path.includes('/Stats/PostGameCarnageReport/')
  ) {
    server = 'https://stats.bungie.net/Platform';
    usePathPrefix = false;
  }

  if (usePathPrefix) {
    path = path.substring(pathPrefix.length);
  }

  const interfaceName = lastPart(pathDef.summary!);
  const functionName = lcFirst(interfaceName);

  const method = pathDef.get ? 'GET' : 'POST';
  const methodDef = pathDef.get || pathDef.post!;
  const params = (methodDef.parameters || []) as ParameterObject[];

  const queryParameterNames = params
    .filter((param) => param.in === 'query')
    .map((param) => param.name);

  const parameterArgs = ['http: HttpClient'];
  let interfaceDefinition = '';
  if (params.length) {
    interfaceDefinition =
      generateInterfaceSchema(interfaceName + 'Params', params, doc, componentByDef, importFiles) +
      '\n\n';
    parameterArgs.push(`params: ${interfaceName}Params`);
  }

  if (methodDef.requestBody) {
    if (isRequestBodyObject(methodDef.requestBody)) {
      const schema = methodDef.requestBody.content['application/json'].schema!;

      const paramType = resolveSchemaType(schema, doc);
      addImport(doc, schema, componentByDef, importFiles);
      const docString = methodDef.requestBody.description
        ? docComment(methodDef.requestBody.description) + '\n'
        : '';
      parameterArgs.push(
        `${docString}body${methodDef.requestBody.required ? '' : '?'}: ${paramType}`
      );
    } else if (isReferenceObject(methodDef.requestBody)) {
      throw new Error("didn't expect this");
    }
  }

  const templatizedPath = `\`${usePathPrefix ? '${API_BASE}' : server}${path.replace(
    /{/g,
    '${params.'
  )}\``;

  let paramsObject = '';
  if (queryParameterNames.length) {
    const paramInitializers = queryParameterNames.map((p) => {
      const param = params.find((pa) => pa.name === p)!;
      const paramType = resolveSchemaType(param.schema!, doc);

      if (paramType.endsWith('[]')) {
        if (!param.required) {
          return `${p}: params.${p} ? params.${p}.join(',') : undefined`;
        }
        return `${p}: params.${p}.join(',')`;
      }

      return `${p}: params.${p}`;
    });

    paramsObject = `, {
${indent(paramInitializers.join(',\n'), 2)}
  }`;
  }

  let requestBodyParam = '';
  if (methodDef.requestBody && isRequestBodyObject(methodDef.requestBody)) {
    requestBodyParam = ', body';
  }

  const returnValue = resolveSchemaType(methodDef.responses['200'], doc);
  addImport(doc, methodDef.responses['200'], componentByDef, importFiles);

  const rateDoc =
    methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser &&
    `Wait at least ${methodDef['x-documentation-attributes']?.ThrottleSecondsBetweenActionPerUser}s between actions.`;

  const fnBody =
    method == 'GET'
      ? `get(http, ${templatizedPath}${paramsObject})`
      : `post(http, ${templatizedPath}${requestBodyParam})`;

  return `${interfaceDefinition}${docComment(
    methodDef.description! + (rateDoc ? '\n' + rateDoc : '')
  )}
export function ${functionName}(${parameterArgs.join(', ')}): Promise<${returnValue}> {
  return ${fnBody};
}`;
}

function generateInterfaceSchema(
  interfaceName: string,
  params: ParameterObject[],
  doc: OpenAPIObject,
  componentByDef: { [def: string]: DefInfo },
  importFiles: { [filename: string]: Set<string> }
) {
  const parameterArgs = params.map((param) => {
    // TODO: in general, need something that returns a type object
    const paramType = resolveSchemaType(param.schema!, doc);
    addImport(doc, param.schema!, componentByDef, importFiles);
    const docString = param.description ? docComment(param.description) + '\n' : '';
    return `${docString}${param.name}${
      param.required || (param.name === 'components' && paramType === 'DestinyComponentType[]')
        ? ''
        : '?'
    }: ${paramType};`;
  });

  return `export interface ${interfaceName} {
${indent(parameterArgs.join('\n'), 1)}
}`;
}

/**
 * Find the longest prefix for a list of strings.
 *
 * @example
 *
 * // Returns "/Destiny2/"
 * getLongestCommonPrefix("Destiny2/Clan/{groupId}/WeeklyRewardState/", "/Destiny2/Clan/ClanBannerDictionary/", "/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/")
 */
function getLongestCommonPrefix(paths: string[]) {
  if (paths.length < 2) {
    return '';
  }

  let prefixLetters = '';

  let index = 0;
  for (const letter of paths[0]) {
    if (letter === '{') {
      break;
    }
    for (const path of paths) {
      if (path[index] !== letter) {
        return prefixLetters;
      }
    }
    prefixLetters = prefixLetters.concat(letter);
    index++;
  }

  return prefixLetters;
}
