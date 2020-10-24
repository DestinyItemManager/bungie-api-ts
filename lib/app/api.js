export function getApplicationApiUsage(http, { applicationId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/App/ApiUsage/${applicationId}/`,
    params,
  });
}
export function getBungieApplications(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/App/FirstParty/',
  });
}
