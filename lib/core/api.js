import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/';
export function getAvailableLocales(http) {
  return get(http, `${API_BASE}GetAvailableLocales/`);
}
export function getCommonSettings(http) {
  return get(http, `${API_BASE}Settings/`);
}
export function getUserSystemOverrides(http) {
  return get(http, `${API_BASE}UserSystemOverrides/`);
}
export function getGlobalAlerts(http, params) {
  return get(http, `${API_BASE}GlobalAlerts/`, {
    includestreaming: params.includestreaming,
  });
}
