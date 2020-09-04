export function getDestinyManifest(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Manifest/',
  });
}
export function getDestinyEntityDefinition(http, { entityType, hashIdentifier }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Manifest/${entityType}/${hashIdentifier}/`,
  });
}
export function searchDestinyPlayer(http, { displayName, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`,
    params,
  });
}
export function getLinkedProfiles(http, { membershipId, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`,
    params,
  });
}
export function getProfile(http, { destinyMembershipId, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
    params,
  });
}
export function getCharacter(
  http,
  { characterId, destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/`,
    params,
  });
}
export function getClanWeeklyRewardState(http, { groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Clan/${groupId}/WeeklyRewardState/`,
  });
}
export function getItem(http, { destinyMembershipId, itemInstanceId, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
    params,
  });
}
export function getVendors(http, { characterId, destinyMembershipId, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
    params,
  });
}
export function getVendor(
  http,
  { characterId, destinyMembershipId, membershipType, vendorHash, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
    params,
  });
}
export function getPublicVendors(http, { ...params }) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2//Vendors/',
    params,
  });
}
export function getCollectibleNodeDetails(
  http,
  { characterId, collectiblePresentationNodeHash, destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Collectibles/${collectiblePresentationNodeHash}/`,
    params,
  });
}
export function transferItem(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/TransferItem/',
    body,
  });
}
export function pullFromPostmaster(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/',
    body,
  });
}
export function equipItem(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItem/',
    body,
  });
}
export function equipItems(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItems/',
    body,
  });
}
export function setItemLockState(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/SetLockState/',
    body,
  });
}
export function setQuestTrackedState(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/SetTrackedState/',
    body,
  });
}
export function insertSocketPlug(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlug/',
    body,
  });
}
export function getPostGameCarnageReport(http, { activityId }) {
  return http({
    method: 'GET',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${activityId}/`,
  });
}
export function reportOffensivePostGameCarnageReportPlayer(http, { activityId }, body) {
  return http({
    method: 'POST',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${activityId}/Report/`,
    body,
  });
}
export function getHistoricalStatsDefinition(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Stats/Definition/',
  });
}
export function getClanLeaderboards(http, { groupId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${groupId}/`,
    params,
  });
}
export function getClanAggregateStats(http, { groupId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${groupId}/`,
    params,
  });
}
export function getLeaderboards(http, { destinyMembershipId, membershipType, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
    params,
  });
}
export function getLeaderboardsForCharacter(
  http,
  { characterId, destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${characterId}/`,
    params,
  });
}
export function searchDestinyEntities(http, { searchTerm, type, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${type}/${searchTerm}/`,
    params,
  });
}
export function getHistoricalStats(
  http,
  { characterId, destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/`,
    params,
  });
}
export function getHistoricalStatsForAccount(
  http,
  { destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/`,
    params,
  });
}
export function getActivityHistory(
  http,
  { characterId, destinyMembershipId, membershipType, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/Activities/`,
    params,
  });
}
export function getUniqueWeaponHistory(http, { characterId, destinyMembershipId, membershipType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/UniqueWeapons/`,
  });
}
export function getDestinyAggregateActivityStats(
  http,
  { characterId, destinyMembershipId, membershipType }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/AggregateActivityStats/`,
  });
}
export function getPublicMilestoneContent(http, { milestoneHash }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Milestones/${milestoneHash}/Content/`,
  });
}
export function getPublicMilestones(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Milestones/',
  });
}
export function awaInitializeRequest(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/Initialize/',
    body,
  });
}
export function awaProvideAuthorizationResult(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/AwaProvideAuthorizationResult/',
    body,
  });
}
export function awaGetActionToken(http, { correlationId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Awa/GetActionToken/${correlationId}/`,
  });
}
