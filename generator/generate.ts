/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import fs from 'fs';
import _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { generateIndex, generateSuperIndex } from './generate-index.js';

import { DefInfo } from './util.js';
import { computeTypeMaps } from './type-index.js';
import { generateInterfaceDefinitions } from './generate-interfaces.js';
import { generateManifestUtils } from './generate-manifest.js';
import { generateServiceDefinition } from './generate-api.js';
import { generatePackageJson } from './generate-package-json.js';

// allow some async operations
(async () => {
  const doc = JSON.parse(fs.readFileSync('api-src/openapi.json').toString()) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

  // Grouped by "tag" which says which service (destiny, groups, forums, etc)
  const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
    return (desc.get || desc.post)!.tags![0];
  });
  pathPairsByTag['Core'] = pathPairsByTag[''];
  delete pathPairsByTag[''];

  const { componentsByFile, componentByDef } = computeTypeMaps(pathPairsByTag, doc);

  _.each(componentsByFile, (components: DefInfo[], file: string) => {
    generateInterfaceDefinitions(file, components, doc, componentByDef);
  });

  await generateManifestUtils(componentsByFile['destiny2/interfaces.ts'], doc);

  _.each(pathPairsByTag, (paths, tag) => {
    generateServiceDefinition(tag, paths, doc, componentByDef);
  });

  _.each(pathPairsByTag, (paths, tag) => {
    generateIndex(tag, doc, componentsByFile);
  });

  generateSuperIndex(Object.keys(pathPairsByTag), doc);

  // read top package.json, remove dependencies, add exports block per service
  generatePackageJson(Object.keys(pathPairsByTag));

  // some way to mark "preview" stuff
})();
