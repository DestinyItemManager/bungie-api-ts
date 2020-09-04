export function getBungieNetUserById(http, { id }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${id}/`,
  });
}
export function searchUsers(http, { ...params }) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/SearchUsers/',
    params,
  });
}
export function getAvailableThemes(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/',
  });
}
export function getMembershipDataById(http, { membershipId, membershipType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${membershipId}/${membershipType}/`,
  });
}
export function getMembershipDataForCurrentUser(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/',
  });
}
export function getMembershipFromHardLinkedCredential(http, { credential, crType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${crType}/${credential}/`,
  });
}
