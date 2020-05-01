/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import * as _ from 'underscore';
import * as fs from 'fs';

import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { generateIndex, generateSuperIndex } from './generate-index';

import { DefInfo } from './util';
import { computeTypeMaps } from './type-index';
import { generateInterfaceDefinitions } from './generate-interfaces';
import { generateServiceDefinition } from './generate-api';

// allow some async operations
(async () => {
  const doc = JSON.parse(fs.readFileSync('api-src/openapi.json').toString()) as OpenAPIObject;

  // Pairs of [request path, path service description]
  const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

  // Grouped by "tag" which says which service (destiny, groups, forums, etc)
  const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
    return (desc.get || desc.post)!.tags![0];
  });
  delete pathPairsByTag[''];

  const { componentsByFile, componentByDef } = computeTypeMaps(pathPairsByTag, doc);

  await Promise.all(
    _.map(componentsByFile, (components: DefInfo[], file: string) => {
      return generateInterfaceDefinitions(file, components, doc, componentByDef);
    })
  );

  _.each(pathPairsByTag, (paths, tag) => {
    generateServiceDefinition(tag, paths, doc, componentByDef);
  });

  _.each(pathPairsByTag, (paths, tag) => {
    generateIndex(tag, doc, componentsByFile);
  });

  generateSuperIndex(Object.keys(pathPairsByTag), doc);

  // some way to mark "preview" stuff
})();
