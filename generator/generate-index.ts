import { OpenAPIObject } from 'openapi3-ts';
import { generateHeader, writeOutFile } from './generate-common.js';
import { DefInfo } from './util.js';

export function generateIndex(
  tag: string,
  doc: OpenAPIObject,
  componentsByFile: {
    [filename: string]: DefInfo[];
  }
) {
  const filename = `generated-src/${tag.toLowerCase()}/index.ts`;

  let imports = `export * from '../common.js';${
    tag !== 'Destiny2' ? "\nexport * from '../platform.js';" : ''
  }
export type {HttpClientConfig, HttpClient} from '../http';
export * from './api.js';`;

  if (componentsByFile[`${tag.toLowerCase()}/interfaces.ts`]) {
    imports = `${imports}\nexport * from './interfaces.js';`;
  }

  // Destiny2 service has special manifest helpers
  if (tag === 'Destiny2') {
    imports = `${imports}\nexport * from './manifest.js';`;
  }

  const definition = [generateHeader(doc), imports].join('\n\n') + '\n';

  writeOutFile(filename, definition);
}

export function generateSuperIndex(tags: string[], doc: OpenAPIObject) {
  const filename = `generated-src/index.ts`;

  const imports = tags
    .map((tag) => `import * as ${tag}Import from './${tag.toLowerCase()}/index.js';`)
    .join('\n');
  const exportStatements = tags.map((tag) => `export const ${tag} = ${tag}Import;`).join('\n');

  const definition = [generateHeader(doc), imports, exportStatements].join('\n\n') + '\n';

  writeOutFile(filename, definition);
}
