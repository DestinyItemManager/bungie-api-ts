export function getBungieNetUserById(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`,
  });
}
export function searchUsers(http, params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/SearchUsers/',
    params: {
      q: params.q,
    },
  });
}
export function getCredentialTypesForTargetAccount(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`,
  });
}
export function getAvailableThemes(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/',
  });
}
export function getMembershipDataById(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`,
  });
}
export function getMembershipDataForCurrentUser(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/',
  });
}
export function getMembershipFromHardLinkedCredential(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`,
  });
}
