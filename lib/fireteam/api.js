export function getActivePrivateClanFireteamCount(http, { groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/ActiveCount/`,
  });
}
export function getAvailableClanFireteams(
  http,
  { activityType, dateRange, groupId, page, platform, publicOnly, slotFilter, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${groupId}/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${publicOnly}/${page}/`,
    params,
  });
}
export function searchPublicAvailableClanFireteams(
  http,
  { activityType, dateRange, page, platform, slotFilter, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${platform}/${activityType}/${dateRange}/${slotFilter}/${page}/`,
    params,
  });
}
export function getMyClanFireteams(http, { groupId, includeClosed, page, platform, ...params }) {
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
