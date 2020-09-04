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
export function getUserClanInviteSetting(http, { mType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/GetUserClanInviteSetting/${mType}/`,
  });
}
export function getRecommendedGroups(http, { createDateRange, groupType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/Recommended/${groupType}/${createDateRange}/`,
  });
}
export function groupSearch(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/Search/',
    body,
  });
}
export function getGroup(http, { groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/`,
  });
}
export function getGroupByName(http, { groupName, groupType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Name/${groupName}/${groupType}/`,
  });
}
export function getGroupByNameV2(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/GroupV2/NameV2/',
    body,
  });
}
export function getGroupOptionalConversations(http, { groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/OptionalConversations/`,
  });
}
export function editGroup(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Edit/`,
    body,
  });
}
export function editClanBanner(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/EditClanBanner/`,
    body,
  });
}
export function editFounderOptions(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/EditFounderOptions/`,
    body,
  });
}
export function addOptionalConversation(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/OptionalConversations/Add/`,
    body,
  });
}
export function editOptionalConversation(http, { conversationId, groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/OptionalConversations/Edit/${conversationId}/`,
    body,
  });
}
export function getMembersOfGroup(http, { currentpage, groupId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/`,
    params,
  });
}
export function getAdminsAndFounderOfGroup(http, { currentpage, groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/AdminsAndFounder/`,
  });
}
export function editGroupMembership(http, { groupId, membershipId, membershipType, memberType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/SetMembershipType/${memberType}/`,
  });
}
export function kickMember(http, { groupId, membershipId, membershipType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Kick/`,
  });
}
export function banMember(http, { groupId, membershipId, membershipType }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Ban/`,
    body,
  });
}
export function unbanMember(http, { groupId, membershipId, membershipType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Unban/`,
  });
}
export function getBannedMembersOfGroup(http, { currentpage, groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Banned/`,
  });
}
export function abdicateFoundership(http, { founderIdNew, groupId, membershipType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Admin/AbdicateFoundership/${membershipType}/${founderIdNew}/`,
  });
}
export function getPendingMemberships(http, { currentpage, groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/Pending/`,
  });
}
export function getInvitedIndividuals(http, { currentpage, groupId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/InvitedIndividuals/`,
  });
}
export function approveAllPending(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/ApproveAll/`,
    body,
  });
}
export function denyAllPending(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/DenyAll/`,
    body,
  });
}
export function approvePendingForList(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/ApproveList/`,
    body,
  });
}
export function approvePending(http, { groupId, membershipId, membershipType }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/Approve/${membershipType}/${membershipId}/`,
    body,
  });
}
export function denyPendingForList(http, { groupId }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/DenyList/`,
    body,
  });
}
export function getGroupsForMember(http, { filter, groupType, membershipId, membershipType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/${membershipType}/${membershipId}/${filter}/${groupType}/`,
  });
}
export function recoverGroupForFounder(http, { groupType, membershipId, membershipType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/Recover/${membershipType}/${membershipId}/${groupType}/`,
  });
}
export function getPotentialGroupsForMember(
  http,
  { filter, groupType, membershipId, membershipType }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/Potential/${membershipType}/${membershipId}/${filter}/${groupType}/`,
  });
}
export function individualGroupInvite(http, { groupId, membershipId, membershipType }, body) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/IndividualInvite/${membershipType}/${membershipId}/`,
    body,
  });
}
export function individualGroupInviteCancel(http, { groupId, membershipId, membershipType }) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/GroupV2/${groupId}/Members/IndividualInviteCancel/${membershipType}/${membershipId}/`,
  });
}
