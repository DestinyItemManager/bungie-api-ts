import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/App/';
export function getApplicationApiUsage(http, params) {
  const strParams = {};
  if (params.end !== undefined) {
    strParams.end = params.end;
  }
  if (params.start !== undefined) {
    strParams.start = params.start;
  }
  return get(http, `${API_BASE}ApiUsage/${params.applicationId}/`, strParams);
}
export function getBungieApplications(http) {
  return get(http, `${API_BASE}FirstParty/`);
}
