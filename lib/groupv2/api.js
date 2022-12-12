import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/GroupV2/';
export function getAvailableAvatars(http) {
  return get(http, `${API_BASE}GetAvailableAvatars/`);
}
export function getAvailableThemes(http) {
  return get(http, `${API_BASE}GetAvailableThemes/`);
}
export function getUserClanInviteSetting(http, params) {
  return get(http, `${API_BASE}GetUserClanInviteSetting/${params.mType}/`);
}
export function getRecommendedGroups(http, params) {
  return post(http, `${API_BASE}Recommended/${params.groupType}/${params.createDateRange}/`);
}
export function groupSearch(http, body) {
  return post(http, `${API_BASE}Search/`, body);
}
export function getGroup(http, params) {
  return get(http, `${API_BASE}${params.groupId}/`);
}
export function getGroupByName(http, params) {
  return get(http, `${API_BASE}Name/${params.groupName}/${params.groupType}/`);
}
export function getGroupByNameV2(http, body) {
  return post(http, `${API_BASE}NameV2/`, body);
}
export function getGroupOptionalConversations(http, params) {
  return get(http, `${API_BASE}${params.groupId}/OptionalConversations/`);
}
export function editGroup(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/Edit/`, body);
}
export function editClanBanner(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/EditClanBanner/`, body);
}
export function editFounderOptions(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/EditFounderOptions/`, body);
}
export function addOptionalConversation(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/OptionalConversations/Add/`, body);
}
export function editOptionalConversation(http, params, body) {
  return post(
    http,
    `${API_BASE}${params.groupId}/OptionalConversations/Edit/${params.conversationId}/`,
    body
  );
}
export function getMembersOfGroup(http, params) {
  return get(http, `${API_BASE}${params.groupId}/Members/`, {
    memberType: params.memberType,
    nameSearch: params.nameSearch,
  });
}
export function getAdminsAndFounderOfGroup(http, params) {
  return get(http, `${API_BASE}${params.groupId}/AdminsAndFounder/`);
}
export function editGroupMembership(http, params) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/${params.membershipType}/${params.membershipId}/SetMembershipType/${params.memberType}/`
  );
}
export function kickMember(http, params) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Kick/`
  );
}
export function banMember(http, params, body) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Ban/`,
    body
  );
}
export function unbanMember(http, params) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/${params.membershipType}/${params.membershipId}/Unban/`
  );
}
export function getBannedMembersOfGroup(http, params) {
  return get(http, `${API_BASE}${params.groupId}/Banned/`);
}
export function abdicateFoundership(http, params) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Admin/AbdicateFoundership/${params.membershipType}/${params.founderIdNew}/`
  );
}
export function getPendingMemberships(http, params) {
  return get(http, `${API_BASE}${params.groupId}/Members/Pending/`);
}
export function getInvitedIndividuals(http, params) {
  return get(http, `${API_BASE}${params.groupId}/Members/InvitedIndividuals/`);
}
export function approveAllPending(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/Members/ApproveAll/`, body);
}
export function denyAllPending(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/Members/DenyAll/`, body);
}
export function approvePendingForList(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/Members/ApproveList/`, body);
}
export function approvePending(http, params, body) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/Approve/${params.membershipType}/${params.membershipId}/`,
    body
  );
}
export function denyPendingForList(http, params, body) {
  return post(http, `${API_BASE}${params.groupId}/Members/DenyList/`, body);
}
export function getGroupsForMember(http, params) {
  return get(
    http,
    `${API_BASE}User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  );
}
export function recoverGroupForFounder(http, params) {
  return get(
    http,
    `${API_BASE}Recover/${params.membershipType}/${params.membershipId}/${params.groupType}/`
  );
}
export function getPotentialGroupsForMember(http, params) {
  return get(
    http,
    `${API_BASE}User/Potential/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  );
}
export function individualGroupInvite(http, params, body) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/IndividualInvite/${params.membershipType}/${params.membershipId}/`,
    body
  );
}
export function individualGroupInviteCancel(http, params) {
  return post(
    http,
    `${API_BASE}${params.groupId}/Members/IndividualInviteCancel/${params.membershipType}/${params.membershipId}/`
  );
}
