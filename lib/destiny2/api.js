function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

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
export function searchDestinyPlayer(http, _ref) {
  let { displayName, membershipType } = _ref,
    params = _objectWithoutProperties(_ref, ['displayName', 'membershipType']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`,
    params,
  });
}
export function getLinkedProfiles(http, _ref2) {
  let { membershipId, membershipType } = _ref2,
    params = _objectWithoutProperties(_ref2, ['membershipId', 'membershipType']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`,
    params,
  });
}
export function getProfile(http, _ref3) {
  let { destinyMembershipId, membershipType } = _ref3,
    params = _objectWithoutProperties(_ref3, ['destinyMembershipId', 'membershipType']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/`,
    params,
  });
}
export function getCharacter(http, _ref4) {
  let { characterId, destinyMembershipId, membershipType } = _ref4,
    params = _objectWithoutProperties(_ref4, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
    ]);

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
export function getItem(http, _ref5) {
  let { destinyMembershipId, itemInstanceId, membershipType } = _ref5,
    params = _objectWithoutProperties(_ref5, [
      'destinyMembershipId',
      'itemInstanceId',
      'membershipType',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Item/${itemInstanceId}/`,
    params,
  });
}
export function getVendors(http, _ref6) {
  let { characterId, destinyMembershipId, membershipType } = _ref6,
    params = _objectWithoutProperties(_ref6, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/`,
    params,
  });
}
export function getVendor(http, _ref7) {
  let { characterId, destinyMembershipId, membershipType, vendorHash } = _ref7,
    params = _objectWithoutProperties(_ref7, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
      'vendorHash',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/Character/${characterId}/Vendors/${vendorHash}/`,
    params,
  });
}
export function getPublicVendors(http, _ref8) {
  let params = _extends({}, _ref8);

  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2//Vendors/',
    params,
  });
}
export function getCollectibleNodeDetails(http, _ref9) {
  let { characterId, collectiblePresentationNodeHash, destinyMembershipId, membershipType } = _ref9,
    params = _objectWithoutProperties(_ref9, [
      'characterId',
      'collectiblePresentationNodeHash',
      'destinyMembershipId',
      'membershipType',
    ]);

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
export function getClanLeaderboards(http, _ref10) {
  let { groupId } = _ref10,
    params = _objectWithoutProperties(_ref10, ['groupId']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${groupId}/`,
    params,
  });
}
export function getClanAggregateStats(http, _ref11) {
  let { groupId } = _ref11,
    params = _objectWithoutProperties(_ref11, ['groupId']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${groupId}/`,
    params,
  });
}
export function getLeaderboards(http, _ref12) {
  let { destinyMembershipId, membershipType } = _ref12,
    params = _objectWithoutProperties(_ref12, ['destinyMembershipId', 'membershipType']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/Leaderboards/`,
    params,
  });
}
export function getLeaderboardsForCharacter(http, _ref13) {
  let { characterId, destinyMembershipId, membershipType } = _ref13,
    params = _objectWithoutProperties(_ref13, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${membershipType}/${destinyMembershipId}/${characterId}/`,
    params,
  });
}
export function searchDestinyEntities(http, _ref14) {
  let { searchTerm, type } = _ref14,
    params = _objectWithoutProperties(_ref14, ['searchTerm', 'type']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${type}/${searchTerm}/`,
    params,
  });
}
export function getHistoricalStats(http, _ref15) {
  let { characterId, destinyMembershipId, membershipType } = _ref15,
    params = _objectWithoutProperties(_ref15, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Character/${characterId}/Stats/`,
    params,
  });
}
export function getHistoricalStatsForAccount(http, _ref16) {
  let { destinyMembershipId, membershipType } = _ref16,
    params = _objectWithoutProperties(_ref16, ['destinyMembershipId', 'membershipType']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${membershipType}/Account/${destinyMembershipId}/Stats/`,
    params,
  });
}
export function getActivityHistory(http, _ref17) {
  let { characterId, destinyMembershipId, membershipType } = _ref17,
    params = _objectWithoutProperties(_ref17, [
      'characterId',
      'destinyMembershipId',
      'membershipType',
    ]);

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
