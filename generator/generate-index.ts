import { OpenAPIObject } from 'openapi3-ts';
import { generateHeader, writeOutFile } from './generate-common';

export function generateIndex(tag: string, doc: OpenAPIObject) {

  const filename = `generated-src/${tag}/index.ts`;

  const imports = `export * from '../common';${tag !== 'Destiny2' ? "\nexport * from '../platform';" : ''}
export * from '../http';
export * from './interfaces';
export * from './api';`;

  const definition = [generateHeader(doc), imports].join('\n\n') + '\n';

  writeOutFile(filename, definition);
}

export function generateSuperIndex(tags: string[], doc: OpenAPIObject) {

  const filename = `generated-src/index.ts`;

  const imports = tags.map((tag) => `import * as ${tag}Import from './${tag.toLowerCase()}';`).join('\n');
  const exportStatements = tags.map((tag) => `export const ${tag} = ${tag}Import;`).join('\n');

  const definition = [generateHeader(doc), imports, exportStatements].join('\n\n') + '\n';

  writeOutFile(filename, definition);
}
