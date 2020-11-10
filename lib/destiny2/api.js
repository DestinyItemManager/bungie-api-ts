export function getDestinyManifest(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Manifest/',
  });
}
export function getDestinyEntityDefinition(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Manifest/${params.entityType}/${params.hashIdentifier}/`,
  });
}
export function searchDestinyPlayer(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${params.membershipType}/${params.displayName}/`,
    params: {
      returnOriginalProfile: params.returnOriginalProfile,
    },
  });
}
export function getLinkedProfiles(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    params: {
      getAllMemberships: params.getAllMemberships,
    },
  });
}
export function getProfile(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
  });
}
export function getCharacter(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
  });
}
export function getClanWeeklyRewardState(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Clan/${params.groupId}/WeeklyRewardState/`,
  });
}
export function getItem(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
  });
}
export function getVendors(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
      filter: params.filter,
    },
  });
}
export function getVendor(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
  });
}
export function getPublicVendors(http, params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Vendors/',
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
  });
}
export function getCollectibleNodeDetails(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined,
    },
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
export function getPostGameCarnageReport(http, params) {
  return http({
    method: 'GET',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/`,
  });
}
export function reportOffensivePostGameCarnageReportPlayer(http, params, body) {
  return http({
    method: 'POST',
    url: `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
    body,
  });
}
export function getHistoricalStatsDefinition(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Stats/Definition/',
  });
}
export function getClanLeaderboards(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${params.groupId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    },
  });
}
export function getClanAggregateStats(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${params.groupId}/`,
    params: {
      modes: params.modes,
    },
  });
}
export function getLeaderboards(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    },
  });
}
export function getLeaderboardsForCharacter(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    },
  });
}
export function searchDestinyEntities(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${params.type}/${params.searchTerm}/`,
    params: {
      page: params.page,
    },
  });
}
export function getHistoricalStats(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    params: {
      dayend: params.dayend,
      daystart: params.daystart,
      groups: params.groups ? params.groups.join(',') : undefined,
      modes: params.modes ? params.modes.join(',') : undefined,
      periodType: params.periodType,
    },
  });
}
export function getHistoricalStatsForAccount(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    params: {
      groups: params.groups ? params.groups.join(',') : undefined,
    },
  });
}
export function getActivityHistory(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    params: {
      count: params.count,
      mode: params.mode,
      page: params.page,
    },
  });
}
export function getUniqueWeaponHistory(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`,
  });
}
export function getDestinyAggregateActivityStats(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/AggregateActivityStats/`,
  });
}
export function getPublicMilestoneContent(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Milestones/${params.milestoneHash}/Content/`,
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
export function awaGetActionToken(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Awa/GetActionToken/${params.correlationId}/`,
  });
}
