import { SchemaObject, ReferenceObject, OpenAPIObject } from 'openapi3-ts';
import * as _ from 'underscore';

export interface DefInfo {
  def: string;
  tags: string[];
  filename: string;
  interfaceName: string;
}

export function resolveSchemaType(schema: SchemaObject | ReferenceObject, doc: OpenAPIObject) {
  if ((schema as ReferenceObject).$ref) {
    return lastPart(lastPart((schema as ReferenceObject).$ref));
  } else {
    return typeMapping(schema as SchemaObject, doc);
  }
}

export function typeMapping(schema: SchemaObject, doc: OpenAPIObject) {
  switch(schema.type) {
    case "integer":
      return "number";
    case "array":
      return `${resolveSchemaType(schema.items!, doc)}[]`;
  }

  return schema.type;
}

export function lcFirst(name: string): string {
  return name[0].toLowerCase() + name.substring(1);
}

export function lastPart(name: string): string {
  return _.last(name.split(/[\.\/]/))!;
}

export function getRef(doc: OpenAPIObject, ref: string): SchemaObject {
  const path = ref.replace('#/', '').split('/');
  let result = doc;
  let pathSegment = path.shift()
  while (pathSegment) {
    result = result[pathSegment];
    pathSegment = path.shift()
  }
  if (result.content) {
    return result.content['application/json'].schema;
  } else {
    return result;
  }
}