# Bungie API TypeScript support

This project implements TypeScript definitions and API helpers for the [Bungie.net API](https://github.com/Bungie-net/api). It's meant for use in [Destiny Item Manager](https://destinyitemmanager.com), but should be general enough to use in any project. The code is completely generated from Bungie's documentation - I considered using something like Swagger Codegen, but instead opted for a custom generator so we could make the result as nice as possible.

# Interfaces and Enums

All the interface type definitions and enums are for type info only - everything will compile out. Only the API helpers produce real JavaScript output. You can import types from each service defined on Bungie.net:

```typescript
import { DestinyInventoryComponent, DestinyInventoryItemDefinition } from 'bungie-api-ts/destiny';
```

There are definitions for every type defined in the Bungie.net services. See [their documentation](https://bungie-net.github.io/multi/) for a list - the interface names are the last part of the full name (for example, `Destiny.Definitions.DestinyVendorActionDefinition` becomes `DestinyVendorActionDefinition`).

# API Helpers

In addition to the types, there are also simple helper functions for each API endpoint. They define the inputs and outputs to that endpoint, and will call a user-provided function with HTTP request info that you can then use to make an HTTP request. This pattern was used so the API helpers could provide full type information. These helpers are not a full API client - they assist in building one. An example:

```typescript
import { getProfile, HttpClientConfig } from 'bungie-api-ts/destiny';

async function $http(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  return fetch(config.url, ...);
}

// ProfileInfo is a DestinyProfileResponseServerResponse
const proileInfo = await getProfile($http, {
  components: [DestinyComponentType.Profiles, DestinyComponentType.Characters],
  destinyMembershipId: 12345,
  membershipType: BungieMembershipType.TigerPsn
});

```

# Build

```
npm install && npm start
```