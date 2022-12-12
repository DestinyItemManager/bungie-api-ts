import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/App/';
export function getApplicationApiUsage(http, params) {
  return get(http, `${API_BASE}ApiUsage/${params.applicationId}/`, {
    end: params.end,
    start: params.start,
  });
}
export function getBungieApplications(http) {
  return get(http, `${API_BASE}FirstParty/`);
}
