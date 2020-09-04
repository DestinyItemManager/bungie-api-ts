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

export function getActivePrivateClanFireteamCount(http, { groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/ActiveCount/`,
  });
}
export function getAvailableClanFireteams(http, _ref) {
  let { activityType, dateRange, groupId, page, platform, publicOnly, slotFilter } = _ref,
    params = _objectWithoutProperties(_ref, [
      'activityType',
      'dateRange',
      'groupId',
      'page',
      'platform',
      'publicOnly',
      'slotFilter',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${publicOnly}/${page}/`,
    params,
  });
}
export function searchPublicAvailableClanFireteams(http, _ref2) {
  let { activityType, dateRange, page, platform, slotFilter } = _ref2,
    params = _objectWithoutProperties(_ref2, [
      'activityType',
      'dateRange',
      'page',
      'platform',
      'slotFilter',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${page}/`,
    params,
  });
}
export function getMyClanFireteams(http, _ref3) {
  let { groupId, includeClosed, page, platform } = _ref3,
    params = _objectWithoutProperties(_ref3, ['groupId', 'includeClosed', 'page', 'platform']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/My/${platform}/${includeClosed}/${page}/`,
    params,
  });
}
export function getClanFireteam(http, { fireteamId, groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/Summary/${fireteamId}/`,
  });
}
