import { SchemaObject, ReferenceObject, OpenAPIObject, RequestBodyObject } from 'openapi3-ts';
import * as _ from 'underscore';

export interface DefInfo {
  def: string;
  tags: string[];
  filename: string;
  interfaceName: string;
}

export function resolveSchemaType(schema: SchemaObject | ReferenceObject, doc: OpenAPIObject): string {
  if ((schema as ReferenceObject).$ref) {
    return interfaceName((schema as ReferenceObject).$ref);
  } else {
    return typeMapping(schema as SchemaObject, doc);
  }
}

export function typeMapping(schema: SchemaObject, doc: OpenAPIObject): string {
  switch (schema.type) {
    case "integer":
      return "number";
    case "array":
      return resolveSchemaType(schema.items!, doc) + '[]';
    case "object":
      if (schema.allOf) {
        return resolveSchemaType(schema.allOf[0], doc);
      } else if (schema.additionalProperties && schema['x-dictionary-key']) {
        const key = typeMapping(schema['x-dictionary-key'], doc);
        const val = typeMapping(schema.additionalProperties, doc);
        return `{ [key: ${key}]: ${val} }`;
      }
  }

  return schema.type!;
}

export function getReferencedTypes(schema: SchemaObject | ReferenceObject): string | undefined {
  if (isReferenceObject(schema)) {
    return schema.$ref;
  } else if (schema.items) {
    return getReferencedTypes(schema.items!);
  }
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
  let pathSegment = path.shift();
  while (pathSegment) {
    result = result[pathSegment];
    pathSegment = path.shift();
  }
  if (result.content) {
    return result.content['application/json'].schema;
  } else {
    return result;
  }
}

export function interfaceName(componentPath: string) {
  const name = lastPart(componentPath);
  if (componentPath.includes('/responses/')) {
    return name + 'ServerResponse';
  } else {
    return name;
  }
}

export function isRequestBodyObject(requestBody: RequestBodyObject | ReferenceObject): requestBody is RequestBodyObject {
  return (requestBody as RequestBodyObject).content !== undefined;
}

export function isReferenceObject(schema: SchemaObject | ReferenceObject): schema is ReferenceObject {
  return (schema as ReferenceObject).$ref !== undefined;
}
