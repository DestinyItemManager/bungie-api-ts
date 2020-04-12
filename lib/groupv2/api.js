export function getAvailableAvatars(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GroupV2/GetAvailableAvatars/',
  });
}
export function getAvailableThemes(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/GroupV2/GetAvailableThemes/',
  });
}
export function getUserClanInviteSetting(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/${params.mType}/`,
  });
}
export function getRecommendedGroups(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/Recommended/${params.groupType}/${params.createDateRange}/`,
  });
}
export function groupSearch(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/Search/',
    body,
  });
}
export function getGroup(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/`,
  });
}
export function getGroupByName(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Name/${params.groupName}/${params.groupType}/`,
  });
}
export function getGroupByNameV2(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/NameV2/',
    body,
  });
}
export function getGroupOptionalConversations(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/`,
  });
}
export function editGroup(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Edit/`,
    body,
  });
}
export function editClanBanner(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditClanBanner/`,
    body,
  });
}
export function editFounderOptions(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/EditFounderOptions/`,
    body,
  });
}
export function addOptionalConversation(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Add/`,
    body,
  });
}
export function editOptionalConversation(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`,
    body,
  });
}
export function getMembersOfGroup(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/`,
    params: {
      memberType: params.memberType,
      nameSearch: params.nameSearch,
    },
  });
}
export function getAdminsAndFounderOfGroup(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/AdminsAndFounder/`,
  });
}
export function editGroupMembership(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/SetMembershipType/${params.memberType}/`,
  });
}
export function kickMember(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Kick/`,
  });
}
export function banMember(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Ban/`,
    body,
  });
}
export function unbanMember(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`,
  });
}
export function getBannedMembersOfGroup(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Banned/`,
  });
}
export function abdicateFoundership(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`,
  });
}
export function getPendingMemberships(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Pending/`,
  });
}
export function getInvitedIndividuals(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/InvitedIndividuals/`,
  });
}
export function approveAllPending(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveAll/`,
    body,
  });
}
export function denyAllPending(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyAll/`,
    body,
  });
}
export function approvePendingForList(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/ApproveList/`,
    body,
  });
}
export function approvePending(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/Approve/${params.membershipType}/${params.membershipId}/`,
    body,
  });
}
export function denyPendingForList(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/DenyList/`,
    body,
  });
}
export function getGroupsForMember(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`,
  });
}
export function recoverGroupForFounder(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`,
  });
}
export function getPotentialGroupsForMember(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/Potential/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`,
  });
}
export function individualGroupInvite(http, params, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInvite/${params.membershipType}/${params.membershipId}/`,
    body,
  });
}
export function individualGroupInviteCancel(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`,
  });
}
