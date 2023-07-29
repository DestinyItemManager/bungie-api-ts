import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Forum/';
export function getTopicsPaged(http, params) {
  const strParams = {};
  if (params.locales !== undefined) {
    strParams.locales = params.locales;
  }
  if (params.tagstring !== undefined) {
    strParams.tagstring = params.tagstring;
  }
  return get(
    http,
    `${API_BASE}GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    strParams
  );
}
export function getCoreTopicsPaged(http, params) {
  const strParams = {};
  if (params.locales !== undefined) {
    strParams.locales = params.locales;
  }
  return get(
    http,
    `${API_BASE}GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    strParams
  );
}
export function getPostsThreadedPaged(http, params) {
  const strParams = {};
  if (params.showbanned !== undefined) {
    strParams.showbanned = params.showbanned;
  }
  return get(
    http,
    `${API_BASE}GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
    strParams
  );
}
export function getPostsThreadedPagedFromChild(http, params) {
  const strParams = {};
  if (params.showbanned !== undefined) {
    strParams.showbanned = params.showbanned;
  }
  return get(
    http,
    `${API_BASE}GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    strParams
  );
}
export function getPostAndParent(http, params) {
  const strParams = {};
  if (params.showbanned !== undefined) {
    strParams.showbanned = params.showbanned;
  }
  return get(http, `${API_BASE}GetPostAndParent/${params.childPostId}/`, strParams);
}
export function getPostAndParentAwaitingApproval(http, params) {
  const strParams = {};
  if (params.showbanned !== undefined) {
    strParams.showbanned = params.showbanned;
  }
  return get(http, `${API_BASE}GetPostAndParentAwaitingApproval/${params.childPostId}/`, strParams);
}
export function getTopicForContent(http, params) {
  return get(http, `${API_BASE}GetTopicForContent/${params.contentId}/`);
}
export function getForumTagSuggestions(http, params) {
  const strParams = {};
  if (params.partialtag !== undefined) {
    strParams.partialtag = params.partialtag;
  }
  return get(http, `${API_BASE}GetForumTagSuggestions/`, strParams);
}
export function getPoll(http, params) {
  return get(http, `${API_BASE}Poll/${params.topicId}/`);
}
export function getRecruitmentThreadSummaries(http, body) {
  return post(http, `${API_BASE}Recruit/Summaries/`, body);
}
