import { SchemaObject } from 'openapi3-ts';

export const missingPropsByInterfaceName: {
  [propertyName: string]: SchemaObject;
} = {
  DestinyArtifactTierItem: {
    isVisible: {
      type: 'boolean',
    },
  },
};
