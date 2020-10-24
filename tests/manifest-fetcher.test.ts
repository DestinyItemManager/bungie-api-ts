import {
  getDestinyManifest,
  getDestinyEntityDefinition,
  searchDestinyPlayer,
  getLinkedProfiles,
  getProfile,
  getCharacter,
  getClanWeeklyRewardState,
  getItem,
  getVendors,
  getVendor,
  getPublicVendors,
  getCollectibleNodeDetails,
  transferItem,
  pullFromPostmaster,
  equipItem,
  equipItems,
  setItemLockState,
  setQuestTrackedState,
  insertSocketPlug,
  getPostGameCarnageReport,
  reportOffensivePostGameCarnageReportPlayer,
  getHistoricalStatsDefinition,
  getClanLeaderboards,
  getClanAggregateStats,
  getLeaderboards,
  getLeaderboardsForCharacter,
  searchDestinyEntities,
  getHistoricalStats,
  getHistoricalStatsForAccount,
  getActivityHistory,
  getUniqueWeaponHistory,
  getDestinyAggregateActivityStats,
  getPublicMilestoneContent,
  getPublicMilestones,
  awaInitializeRequest,
  awaProvideAuthorizationResult,
  awaGetActionToken,
} from '../generated-src/destiny2/api';
import { getDestinyManifestSlice } from '../generated-src/destiny2/manifest';
import { HttpClient, HttpClientConfig } from '../generated-src/http';
import {
  DestinyComponentType,
  DestinyInventoryItemDefinition,
  DestinyLocationDefinition,
} from '../generated-src/destiny2/interfaces';
import fetch from 'node-fetch';

// test('should throw an error if there is no room in the destination', async () => {
//   expect.assertions(1);
//   await expect(async () => {
//     (await pullFromPostmaster(pretendHttpClient(errors.DestinyNoRoomInDestination), {
//       characterId: '1234658790',
//       membershipType: 3,
//       itemId: '0987654321',
//       itemReferenceHash: 45674576,
//       stackSize: 7,
//     })) as any;
//   }).rejects.toMatchInlineSnapshot(
//     `[BungieError: There are no item slots available to transfer this item.]`
//   );
// });

// test('should throw an error if API is down for maintenance', async () => {
//   expect.assertions(1);
//   await expect(async () => {
//     (await pullFromPostmaster(pretendHttpClient(errors.SystemDisabled), {
//       characterId: '1234658790',
//       membershipType: 3,
//       itemId: '0987654321',
//       itemReferenceHash: 45674576,
//       stackSize: 7,
//     })) as any;
//   }).rejects.toMatchInlineSnapshot(
//     `[BungieError: This system is temporarily disabled for maintenance.]`
//   );
// });

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
