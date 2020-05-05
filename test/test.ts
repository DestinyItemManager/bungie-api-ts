import { HttpClientConfig } from '../lib/http';
import fetch from 'node-fetch';
import { getDestinyManifest } from '../lib/destiny2';
import { getDestinyManifestSlice } from '../lib/destiny2/manifest';

async function httpClient(config: HttpClientConfig) {
  return fetch(config.url, config)
    .then((res) => res.json())
    .catch((e) => {
      console.log('DESTINY API ERROR');
      console.log('probably about to fail a promise here. sorry.');
      console.log(console.log(e));
    });
}

async () => {
  const manifestMeta = (await getDestinyManifest(httpClient)).Response;

  const partialManifest = await getDestinyManifestSlice(httpClient, {
    destinyManifest: manifestMeta,
    tableNames: ['DestinyInventoryItemDefinition', 'DestinyLocationDefinition'],
    language: 'en',
  });
  const items = partialManifest.DestinyInventoryItemDefinition;
  const locations = partialManifest.DestinyLocationDefinition;

  // grab a gun we know
  const betterDevils: any =
    items[1048266744] ??
    items[153979397] ??
    Object.values(items).find(
      (i) => i.displayProperties?.name?.toLowerCase() === 'better devils'
    ) ??
    {};

  // ensure it has attributes we expect and not attributes from another table
  const betterDevilsTests =
    betterDevils.itemTypeAndTierDisplayName !== undefined &&
    betterDevils.inventory &&
    betterDevils.damageTypeHashes &&
    betterDevils.itemCategoryHashes &&
    !betterDevils.vendorHash &&
    !betterDevils.locationReleases;

  const exampleLocation: any = locations[337241121] ?? Object.values(locations)[0] ?? {};
  const locationTests =
    exampleLocation.vendorHash !== undefined &&
    exampleLocation.hash !== undefined &&
    exampleLocation.locationReleases &&
    !exampleLocation.itemTypeAndTierDisplayName &&
    !exampleLocation.damageTypeHashes;

  if (!betterDevilsTests || !locationTests) {
    !betterDevilsTests && console.log('betterDevilsTests failed. unexpected data:', betterDevils);
    !locationTests && console.log('locationTests failed. unexpected data:', exampleLocation);
    process.exit(1);
  }
};
