import { fetch } from 'node-fetch';
import { getDestinyManifest } from '../lib/destiny2/index.js';
import { getDestinyManifestSlice } from '../lib/destiny2/manifest.js';
async function httpClient(config) {
  return fetch(config.url, config)
    .then((res) => res.json())
    .catch((e) => {
      console.log('DESTINY API ERROR');
      console.log('probably about to fail a promise here. sorry.');
      console.log(console.log(e));
    });
}
(async () => {
  var _a, _b, _c, _d, _e;
  const manifestMeta = (await getDestinyManifest(httpClient)).Response;
  // const manifestTable = await getDestinyManifestComponent(httpClient, {
  //   destinyManifest: manifestMeta,
  //   tableName: 'DestinyInventoryItemDefinition',
  //   language: 'en',
  // });
  const partialManifest = await getDestinyManifestSlice(httpClient, {
    destinyManifest: manifestMeta,
    tableNames: ['DestinyInventoryItemDefinition', 'DestinyLocationDefinition'],
    language: 'en',
  });
  const items = partialManifest.DestinyInventoryItemDefinition;
  const locations = partialManifest.DestinyLocationDefinition;
  // grab a gun we know
  const betterDevils =
    (_c =
      (_b = (_a = items[1048266744]) !== null && _a !== void 0 ? _a : items[153979397]) !== null &&
      _b !== void 0
        ? _b
        : Object.values(items).find((i) => {
            var _a, _b;
            return (
              ((_b = (_a = i.displayProperties) === null || _a === void 0 ? void 0 : _a.name) ===
                null || _b === void 0
                ? void 0
                : _b.toLowerCase()) === 'better devils'
            );
          })) !== null && _c !== void 0
      ? _c
      : {};
  // ensure it has attributes we expect and not attributes from another table
  const betterDevilsTests =
    betterDevils.itemTypeAndTierDisplayName !== undefined &&
    betterDevils.inventory &&
    betterDevils.damageTypeHashes &&
    betterDevils.itemCategoryHashes &&
    !betterDevils.vendorHash &&
    !betterDevils.locationReleases;
  const exampleLocation =
    (_e =
      (_d = locations[337241121]) !== null && _d !== void 0 ? _d : Object.values(locations)[0]) !==
      null && _e !== void 0
      ? _e
      : {};
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
  } else console.log('tests passed'); // manifest downloader worked and expected attributes were present
})();
