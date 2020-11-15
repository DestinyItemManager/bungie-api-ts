export function getAvailableLocales(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GetAvailableLocales/',
  });
}
export function getCommonSettings(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Settings/',
  });
}
export function getUserSystemOverrides(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/UserSystemOverrides/',
  });
}
export function getGlobalAlerts(http, params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GlobalAlerts/',
    params: {
      includestreaming: params.includestreaming,
    },
  });
}
