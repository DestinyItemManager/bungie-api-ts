import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Social/';
export function getFriendList(http) {
  return get(http, `${API_BASE}Friends/`);
}
export function getFriendRequestList(http) {
  return get(http, `${API_BASE}Friends/Requests/`);
}
export function issueFriendRequest(http, params) {
  return post(http, `${API_BASE}Friends/Add/${params.membershipId}/`);
}
export function acceptFriendRequest(http, params) {
  return post(http, `${API_BASE}Friends/Requests/Accept/${params.membershipId}/`);
}
export function declineFriendRequest(http, params) {
  return post(http, `${API_BASE}Friends/Requests/Decline/${params.membershipId}/`);
}
export function removeFriend(http, params) {
  return post(http, `${API_BASE}Friends/Remove/${params.membershipId}/`);
}
export function removeFriendRequest(http, params) {
  return post(http, `${API_BASE}Friends/Requests/Remove/${params.membershipId}/`);
}
export function getPlatformFriendList(http, params) {
  return get(http, `${API_BASE}PlatformFriends/${params.friendPlatform}/${params.page}/`);
}
