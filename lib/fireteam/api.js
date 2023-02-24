import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Fireteam/';
export function getActivePrivateClanFireteamCount(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/ActiveCount/`);
}
export function getAvailableClanFireteams(http, params) {
  return get(
    http,
    `${API_BASE}Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    {
      excludeImmediate: params.excludeImmediate,
      langFilter: params.langFilter,
    }
  );
}
export function searchPublicAvailableClanFireteams(http, params) {
  return get(
    http,
    `${API_BASE}Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
    {
      excludeImmediate: params.excludeImmediate,
      langFilter: params.langFilter,
    }
  );
}
export function getMyClanFireteams(http, params) {
  return get(
    http,
    `${API_BASE}Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
    {
      groupFilter: params.groupFilter,
      langFilter: params.langFilter,
    }
  );
}
export function getClanFireteam(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/Summary/${params.fireteamId}/`);
}
