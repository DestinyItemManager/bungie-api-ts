import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Fireteam/';
export function getActivePrivateClanFireteamCount(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/ActiveCount/`);
}
export function getAvailableClanFireteams(http, params) {
  const strParams = {};
  if (params.excludeImmediate !== undefined) {
    strParams.excludeImmediate = params.excludeImmediate.toString();
  }
  if (params.langFilter !== undefined) {
    strParams.langFilter = params.langFilter;
  }
  return get(
    http,
    `${API_BASE}Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    strParams
  );
}
export function searchPublicAvailableClanFireteams(http, params) {
  const strParams = {};
  if (params.excludeImmediate !== undefined) {
    strParams.excludeImmediate = params.excludeImmediate.toString();
  }
  if (params.langFilter !== undefined) {
    strParams.langFilter = params.langFilter;
  }
  return get(
    http,
    `${API_BASE}Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
    strParams
  );
}
export function getMyClanFireteams(http, params) {
  const strParams = {};
  if (params.groupFilter !== undefined) {
    strParams.groupFilter = params.groupFilter.toString();
  }
  if (params.langFilter !== undefined) {
    strParams.langFilter = params.langFilter;
  }
  return get(
    http,
    `${API_BASE}Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
    strParams
  );
}
export function getClanFireteam(http, params) {
  return get(http, `${API_BASE}Clan/${params.groupId}/Summary/${params.fireteamId}/`);
}
