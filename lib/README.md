# Bungie API TypeScript support

This project implements TypeScript definitions and API helpers for the [Bungie.net API](https://github.com/Bungie-net/api). It's meant for use in [Destiny Item Manager](https://destinyitemmanager.com), but should be general enough to use in any project. The code is completely generated from Bungie's documentation - I considered using something like Swagger Codegen, but instead opted for a custom generator so we could make the result as nice as possible.

# Ports

Feel free to fork this and use it to generate for your favorite language!

- [Dart](https://github.com/marquesinijatinha/bungie-api-dart/)

# Install

```
yarn add bungie-api-ts
```

# Interfaces and Enums

All the interface type definitions and enums are for type info only - everything will compile out. Only the API helpers produce real JavaScript output. You can import types from each service defined on Bungie.net:

```typescript
import { DestinyInventoryComponent, DestinyInventoryItemDefinition } from 'bungie-api-ts/destiny2';
```

There are definitions for every type defined in the Bungie.net services. See [their documentation](https://bungie-net.github.io/multi/) for a list - the interface names are the last part of the full name (for example, `Destiny.Definitions.DestinyVendorActionDefinition` becomes `DestinyVendorActionDefinition`). There are a few exceptions, like `SingleComponentResponseOfDestinyInventoryComponent`, which have been mapped into nicer forms like `SingleComponentResponse<DestinyInventoryComponent>`, and the server responses, which are now `ServerResponse<T>` instead of something like `DestinyCharacterResponse`.

# API Helpers

In addition to the types, there are also simple helper functions for each API endpoint. They define the inputs and outputs to that endpoint, and will call a user-provided function with HTTP request info that you can then use to make an HTTP request. This pattern was used so the API helpers could provide full type information. These helpers are not a full API client - they assist in building one. An example:

```typescript
import { getProfile, HttpClientConfig } from 'bungie-api-ts/destiny2';

async function $http(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  return fetch(config.url, ...);
}

const profileInfo: ServerResponse<DestinyProfileResponse> = await getProfile($http, {
  components: [DestinyComponentType.Profiles, DestinyComponentType.Characters],
  destinyMembershipId: 12345,
  membershipType: BungieMembershipType.TigerPsn
});
```

# Imports

It is possible to import all services from `bungie-api-ts` directly, but it's better to import the specific service and pick out what you want:

```typescript
// good
import { getProfile, HttpClientConfig } from 'bungie-api-ts/destiny2';
getProfile(...);

// works, but not as good
import { Destiny2 } from 'bungie-api-ts';
Destiny2.getProfile(...);
```

# Manifest Helpers

The `destiny2` import also contains helpers for typing and downloading the Destiny manifest:

```typescript
import { getDestinyManifestSlice } from 'bungie-api-ts/destiny2';

async function $http(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  return fetch(config.url, ...);
}

const destinyManifest = await getDestinyManifest($http);
const manifestTables = getDestinyManifestSlice($http, {
  destinyManifest,
  tableNames: ['DestinyInventoryItemDefinition', 'DestinySocketDefinition'],
  language: 'en',
});

// manifestTables is an object with properties DestinyInventoryItemDefinition and DestinySocketDefinition
```

# Build

```
# setup
yarn && yarn submodule
# run
yarn start
```

# Updating API sources

Run the [update API sources](https://github.com/DestinyItemManager/bungie-api-ts/actions/workflows/update.yml) GitHub Action and it should create a new PR for the updated sources.

# Publishing

Update the version in `package.json`, and when the PR merges to `master`, a GitHub workflow will automatically publish to NPM. Don't forget to run `yarn start` and commit all changed files!
