export function getApplicationApiUsage(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/App/ApiUsage/${params.applicationId}/`,
    params: {
      end: params.end,
      start: params.start,
    },
  });
}
export function getBungieApplications(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/App/FirstParty/',
  });
}
