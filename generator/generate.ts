/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import * as fs from 'fs';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import { DefInfo } from './util';
import { generateServiceDefinition } from './generate-api';
import { generateInterfaceDefinitions } from './generate-interfaces';
import { computeTypeMaps } from './type-index';
import { generateIndex, generateSuperIndex } from './generate-index';

const doc = JSON.parse(fs.readFileSync('api-src/openapi.json').toString()) as OpenAPIObject;

const pathPairs = _.pairs(doc.paths) as [string, PathItemObject][];

const pathPairsByTag = _.groupBy(pathPairs, ([path, desc]) => {
  return (desc.get || desc.post)!.tags![0];
});

const { componentsByFile, componentByDef } = computeTypeMaps(pathPairsByTag, doc);

_.each(componentsByFile, (components: DefInfo[], file: string) => {
  generateInterfaceDefinitions(file, components, doc, componentByDef);
});

_.each(pathPairsByTag, (paths, tag) => {
  generateServiceDefinition(tag, paths, doc, componentByDef);
});

_.each(pathPairsByTag, (paths, tag) => {
  generateIndex(tag, doc);
});

generateSuperIndex(Object.keys(pathPairsByTag), doc);

// some way to mark "preview" stuff
