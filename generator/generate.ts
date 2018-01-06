/**
 * This is a custom, hand-rolled generator for TS typings for the Bungie.net API. It's meant for use
 * in DIM, but is free for anyone to use.
 */

import * as fs from 'fs';
import * as _ from 'underscore';
import { OpenAPIObject, PathItemObject, ComponentsObject, ParameterObject, SchemaObject, ReferenceObject } from 'openapi3-ts';
import { getRef, lastPart, lcFirst, resolveSchemaType, DefInfo } from './util';
import { generateServiceDefinition } from './generate-api';
import { generateInterfaceDefinitions } from './generate-interfaces';
import { computeTypeMaps } from './type-index';

// TODO: for properties that have x-mapped-definition, typedef them?
// TODO: readonly properties
// TODO: test that the last part of the name is unique
// TODO: common chunk
// TODO: break into more files

// TODO: how to split them up? For example, Destiny.Definitions should probably be in its own file, etc.
// maybe group requests and responses, etc?
// mobile manifest entities (x-whatever) should probably be on their own?
// TODO: need a type registry then
// TODO: reexport types from each service?

// TODO: OK split responses from schemas. Naming?

// TODO: type manager with type, file location mapping, and maybe dependenies?

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

// group paths by service
// get trees of components for each service
// find overlapping components for a common file
// generate input/output types for each path
// map components to interfaces / enums
// make sure to include documentation
// generate functions from hash to definition? use type aliases?
// match docs as much as possible
// export constants/functions for paths? request objects?
// some way to mark "preview" stuff
// need a function to look up refs?