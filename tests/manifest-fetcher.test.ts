import { getDestinyManifest } from '../generated-src/destiny2/api';
import { getDestinyManifestSlice } from '../generated-src/destiny2/manifest';
import { HttpClientConfig } from '../generated-src/http';

import fetch from 'node-fetch';

async function httpClient(config: HttpClientConfig) {
  return fetch(config.url, config)
    .then((res) => res.json())
    .catch((e) => {
      console.log('DESTINY API ERROR');
      console.log('probably about to fail a promise here. sorry.');
      console.log(console.log(e));
    });
}

test('manifest downloads and getDestinyManifestSlice contains 2 tables', async () => {
  const manifestMetadata = (await getDestinyManifest(httpClient)).Response;

  const partialManifest = await getDestinyManifestSlice(httpClient, {
    destinyManifest: manifestMetadata,
    tableNames: ['DestinyInventoryItemDefinition', 'DestinyLocationDefinition'],
    language: 'en',
  });

  expect(Object.keys(partialManifest)).toMatchInlineSnapshot(`
    Array [
      "DestinyInventoryItemDefinition",
      "DestinyLocationDefinition",
    ]
  `);

  // const items = partialManifest.DestinyInventoryItemDefinition;
  // const locations = partialManifest.DestinyLocationDefinition;
  // maybe this is overkill
  // expect(
  //   Object.values(items).filter((i) => (i as any).vendorHash || (i as any).locationReleases)
  // ).toHaveLength(0);

  // expect(
  //   Object.values(locations).filter(
  //     (l) => (l as any).itemTypeAndTierDisplayName || (l as any).damageTypeHashes
  //   )
  // ).toHaveLength(0);
});
