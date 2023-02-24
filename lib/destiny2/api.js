import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Destiny2/';
export function getDestinyManifest(http) {
  return get(http, `${API_BASE}Manifest/`);
}
export function getDestinyEntityDefinition(http, params) {
  return get(http, `${API_BASE}Manifest/${params.entityType}/${params.hashIdentifier}/`);
}
export function searchDestinyPlayerByBungieName(http, params, body) {
  return post(http, `${API_BASE}SearchDestinyPlayerByBungieName/${params.membershipType}/`, body);
}
export function getLinkedProfiles(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    {
      getAllMemberships: params.getAllMemberships,
    }
  );
}
export function getProfile(http, params) {
  return get(http, `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/`, {
    components: params.components ? params.components.join(',') : undefined,
  });
}
export function getCharacter(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}
export function getClanWeeklyRewardState(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/WeeklyRewardState/`);
}
export function getClanBannerSource(http) {
  return get(http, `${API_BASE}Clan/ClanBannerDictionary/`);
}
export function getItem(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}
export function getVendors(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    {
      components: params.components ? params.components.join(',') : undefined,
      filter: params.filter,
    }
  );
}
export function getVendor(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}
export function getPublicVendors(http, params) {
  return get(http, `${API_BASE}Vendors/`, {
    components: params.components ? params.components.join(',') : undefined,
  });
}
export function getCollectibleNodeDetails(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}
export function transferItem(http, body) {
  return post(http, `${API_BASE}Actions/Items/TransferItem/`, body);
}
export function pullFromPostmaster(http, body) {
  return post(http, `${API_BASE}Actions/Items/PullFromPostmaster/`, body);
}
export function equipItem(http, body) {
  return post(http, `${API_BASE}Actions/Items/EquipItem/`, body);
}
export function equipItems(http, body) {
  return post(http, `${API_BASE}Actions/Items/EquipItems/`, body);
}
export function equipLoadout(http, body) {
  return post(http, `${API_BASE}Actions/Loadouts/EquipLoadout/`, body);
}
export function snapshotLoadout(http, body) {
  return post(http, `${API_BASE}Actions/Loadouts/SnapshotLoadout/`, body);
}
export function updateLoadoutIdentifiers(http, body) {
  return post(http, `${API_BASE}Actions/Loadouts/UpdateLoadoutIdentifiers/`, body);
}
export function clearLoadout(http, body) {
  return post(http, `${API_BASE}Actions/Loadouts/ClearLoadout/`, body);
}
export function setItemLockState(http, body) {
  return post(http, `${API_BASE}Actions/Items/SetLockState/`, body);
}
export function setQuestTrackedState(http, body) {
  return post(http, `${API_BASE}Actions/Items/SetTrackedState/`, body);
}
export function insertSocketPlug(http, body) {
  return post(http, `${API_BASE}Actions/Items/InsertSocketPlug/`, body);
}
export function insertSocketPlugFree(http, body) {
  return post(http, `${API_BASE}Actions/Items/InsertSocketPlugFree/`, body);
}
export function getPostGameCarnageReport(http, params) {
  return get(
    http,
    `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/`
  );
}
export function reportOffensivePostGameCarnageReportPlayer(http, params, body) {
  return post(
    http,
    `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
    body
  );
}
export function getHistoricalStatsDefinition(http) {
  return get(http, `${API_BASE}Stats/Definition/`);
}
export function getClanLeaderboards(http, params) {
  return get(http, `${API_BASE}Stats/Leaderboards/Clans/${params.groupId}/`, {
    maxtop: params.maxtop,
    modes: params.modes,
    statid: params.statid,
  });
}
export function getClanAggregateStats(http, params) {
  return get(http, `${API_BASE}Stats/AggregateClanStats/${params.groupId}/`, {
    modes: params.modes,
  });
}
export function getLeaderboards(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    }
  );
}
export function getLeaderboardsForCharacter(http, params) {
  return get(
    http,
    `${API_BASE}Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    }
  );
}
export function searchDestinyEntities(http, params) {
  return get(http, `${API_BASE}Armory/Search/${params.type}/${params.searchTerm}/`, {
    page: params.page,
  });
}
export function getHistoricalStats(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    {
      dayend: params.dayend,
      daystart: params.daystart,
      groups: params.groups ? params.groups.join(',') : undefined,
      modes: params.modes ? params.modes.join(',') : undefined,
      periodType: params.periodType,
    }
  );
}
export function getHistoricalStatsForAccount(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    {
      groups: params.groups ? params.groups.join(',') : undefined,
    }
  );
}
export function getActivityHistory(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    {
      count: params.count,
      mode: params.mode,
      page: params.page,
    }
  );
}
export function getUniqueWeaponHistory(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
  );
}
export function getDestinyAggregateActivityStats(http, params) {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/AggregateActivityStats/`
  );
}
export function getPublicMilestoneContent(http, params) {
  return get(http, `${API_BASE}Milestones/${params.milestoneHash}/Content/`);
}
export function getPublicMilestones(http) {
  return get(http, `${API_BASE}Milestones/`);
}
export function awaInitializeRequest(http, body) {
  return post(http, `${API_BASE}Awa/Initialize/`, body);
}
export function awaProvideAuthorizationResult(http, body) {
  return post(http, `${API_BASE}Awa/AwaProvideAuthorizationResult/`, body);
}
export function awaGetActionToken(http, params) {
  return get(http, `${API_BASE}Awa/GetActionToken/${params.correlationId}/`);
}
