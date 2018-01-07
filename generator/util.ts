import { SchemaObject, ReferenceObject, OpenAPIObject, RequestBodyObject } from 'openapi3-ts';
import * as _ from 'underscore';

export interface DefInfo {
  def: string;
  tags: string[];
  filename: string;
  interfaceName: string;
}

export function resolveSchemaType(schema: SchemaObject | ReferenceObject, doc: OpenAPIObject): string {
  if (isReferenceObject(schema)) {
    return interfaceName(schema.$ref);
  } else {
    return typeMapping(schema, doc);
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
        const keySchema: SchemaObject | ReferenceObject = schema['x-dictionary-key'];
        const key = isReferenceObject(keySchema) ? 'number' : resolveSchemaType(keySchema, doc);
        const val = resolveSchemaType(schema.additionalProperties, doc);
        return `{ [key: ${key}]: ${val} }`;
      }
  }

  return schema.type!;
}

export function getReferencedTypes(schema: SchemaObject | ReferenceObject): string | undefined {
  console.log(schema);
  if (isReferenceObject(schema)) {
    return schema.$ref;
  } else if (schema.items) {
    return getReferencedTypes(schema.items!);
  } else if (schema.allOf) {
    return getReferencedTypes(schema.allOf[0]);
  } else if (schema.additionalProperties) {
    return getReferencedTypes(schema.additionalProperties);
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
  // TODO: maybe here is the place to do: SingleComponentResponseOfDestinyProfileComponent
  // But how to prevent it from going into the type index, too?
  const name = lastPart(componentPath);

  const singleResponse = name.match(/SingleComponentResponseOf(.*)/);
  if (singleResponse) {
    return `SingleComponentResponse<${singleResponse[1]}>`;
  }

  const dictionaryResponse = name.match(/DictionaryComponentResponseOfu?int(?:64|32)And(.*)/);
  if (dictionaryResponse) {
    return `DictionaryComponentResponse<${dictionaryResponse[1]}>`;
  }

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
