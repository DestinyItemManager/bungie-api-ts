export function getActivePrivateClanFireteamCount(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`,
  });
}
export function getAvailableClanFireteams(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    params: {
      langFilter: params.langFilter,
    },
  });
}
export function searchPublicAvailableClanFireteams(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
    params: {
      langFilter: params.langFilter,
    },
  });
}
export function getMyClanFireteams(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
    params: {
      groupFilter: params.groupFilter,
      langFilter: params.langFilter,
    },
  });
}
export function getClanFireteam(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Summary/${params.fireteamId}/`,
  });
}
