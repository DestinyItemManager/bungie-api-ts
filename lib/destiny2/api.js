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
  const strParams = {};
  if (params.getAllMemberships !== undefined) {
    strParams.getAllMemberships = params.getAllMemberships.toString();
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    strParams
  );
}
export function getProfile(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/`,
    strParams
  );
}
export function getCharacter(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
    strParams
  );
}
export function getClanWeeklyRewardState(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/WeeklyRewardState/`);
}
export function getClanBannerSource(http) {
  return get(http, `${API_BASE}Clan/ClanBannerDictionary/`);
}
export function getItem(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    strParams
  );
}
export function getVendors(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  if (params.filter !== undefined) {
    strParams.filter = params.filter.toString();
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    strParams
  );
}
export function getVendor(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
    strParams
  );
}
export function getPublicVendors(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(http, `${API_BASE}Vendors/`, strParams);
}
export function getCollectibleNodeDetails(http, params) {
  const strParams = {};
  if (params.components?.length) {
    strParams.components = params.components.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
    strParams
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
  const strParams = {};
  if (params.maxtop !== undefined) {
    strParams.maxtop = params.maxtop.toString();
  }
  if (params.modes !== undefined) {
    strParams.modes = params.modes;
  }
  if (params.statid !== undefined) {
    strParams.statid = params.statid;
  }
  return get(http, `${API_BASE}Stats/Leaderboards/Clans/${params.groupId}/`, strParams);
}
export function getClanAggregateStats(http, params) {
  const strParams = {};
  if (params.modes !== undefined) {
    strParams.modes = params.modes;
  }
  return get(http, `${API_BASE}Stats/AggregateClanStats/${params.groupId}/`, strParams);
}
export function getLeaderboards(http, params) {
  const strParams = {};
  if (params.maxtop !== undefined) {
    strParams.maxtop = params.maxtop.toString();
  }
  if (params.modes !== undefined) {
    strParams.modes = params.modes;
  }
  if (params.statid !== undefined) {
    strParams.statid = params.statid;
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    strParams
  );
}
export function getLeaderboardsForCharacter(http, params) {
  const strParams = {};
  if (params.maxtop !== undefined) {
    strParams.maxtop = params.maxtop.toString();
  }
  if (params.modes !== undefined) {
    strParams.modes = params.modes;
  }
  if (params.statid !== undefined) {
    strParams.statid = params.statid;
  }
  return get(
    http,
    `${API_BASE}Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    strParams
  );
}
export function searchDestinyEntities(http, params) {
  const strParams = {};
  if (params.page !== undefined) {
    strParams.page = params.page.toString();
  }
  return get(http, `${API_BASE}Armory/Search/${params.type}/${params.searchTerm}/`, strParams);
}
export function getHistoricalStats(http, params) {
  const strParams = {};
  if (params.dayend !== undefined) {
    strParams.dayend = params.dayend;
  }
  if (params.daystart !== undefined) {
    strParams.daystart = params.daystart;
  }
  if (params.groups?.length) {
    strParams.groups = params.groups.join(',');
  }
  if (params.modes?.length) {
    strParams.modes = params.modes.join(',');
  }
  if (params.periodType !== undefined) {
    strParams.periodType = params.periodType.toString();
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    strParams
  );
}
export function getHistoricalStatsForAccount(http, params) {
  const strParams = {};
  if (params.groups?.length) {
    strParams.groups = params.groups.join(',');
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    strParams
  );
}
export function getActivityHistory(http, params) {
  const strParams = {};
  if (params.count !== undefined) {
    strParams.count = params.count.toString();
  }
  if (params.mode !== undefined) {
    strParams.mode = params.mode.toString();
  }
  if (params.page !== undefined) {
    strParams.page = params.page.toString();
  }
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    strParams
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
