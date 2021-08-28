export function getFriendList(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Social/Friends/',
  });
}
export function getFriendRequestList(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Social/Friends/Requests/',
  });
}
export function issueFriendRequest(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Add/${params.membershipId}/`,
  });
}
export function acceptFriendRequest(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Accept/${params.membershipId}/`,
  });
}
export function declineFriendRequest(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Decline/${params.membershipId}/`,
  });
}
export function removeFriend(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Remove/${params.membershipId}/`,
  });
}
export function removeFriendRequest(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Remove/${params.membershipId}/`,
  });
}
export function getPlatformFriendList(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Social/PlatformFriends/${params.friendPlatform}/${params.page}/`,
  });
}
