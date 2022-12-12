import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/User/';
export function getBungieNetUserById(http, params) {
  return get(http, `${API_BASE}GetBungieNetUserById/${params.id}/`);
}
export function getSanitizedPlatformDisplayNames(http, params) {
  return get(http, `${API_BASE}GetSanitizedPlatformDisplayNames/${params.membershipId}/`);
}
export function getCredentialTypesForTargetAccount(http, params) {
  return get(http, `${API_BASE}GetCredentialTypesForTargetAccount/${params.membershipId}/`);
}
export function getAvailableThemes(http) {
  return get(http, `${API_BASE}GetAvailableThemes/`);
}
export function getMembershipDataById(http, params) {
  return get(
    http,
    `${API_BASE}GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  );
}
export function getMembershipDataForCurrentUser(http) {
  return get(http, `${API_BASE}GetMembershipsForCurrentUser/`);
}
export function getMembershipFromHardLinkedCredential(http, params) {
  return get(
    http,
    `${API_BASE}GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`
  );
}
export function searchByGlobalNamePrefix(http, params) {
  return get(http, `${API_BASE}Search/Prefix/${params.displayNamePrefix}/${params.page}/`);
}
export function searchByGlobalNamePost(http, params, body) {
  return post(http, `${API_BASE}Search/GlobalName/${params.page}/`, body);
}
