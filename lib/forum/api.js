import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Forum/';
export function getTopicsPaged(http, params) {
  return get(
    http,
    `${API_BASE}GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    {
      locales: params.locales,
      tagstring: params.tagstring,
    }
  );
}
export function getCoreTopicsPaged(http, params) {
  return get(
    http,
    `${API_BASE}GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    {
      locales: params.locales,
    }
  );
}
export function getPostsThreadedPaged(http, params) {
  return get(
    http,
    `${API_BASE}GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
    {
      showbanned: params.showbanned,
    }
  );
}
export function getPostsThreadedPagedFromChild(http, params) {
  return get(
    http,
    `${API_BASE}GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    {
      showbanned: params.showbanned,
    }
  );
}
export function getPostAndParent(http, params) {
  return get(http, `${API_BASE}GetPostAndParent/${params.childPostId}/`, {
    showbanned: params.showbanned,
  });
}
export function getPostAndParentAwaitingApproval(http, params) {
  return get(http, `${API_BASE}GetPostAndParentAwaitingApproval/${params.childPostId}/`, {
    showbanned: params.showbanned,
  });
}
export function getTopicForContent(http, params) {
  return get(http, `${API_BASE}GetTopicForContent/${params.contentId}/`);
}
export function getForumTagSuggestions(http, params) {
  return get(http, `${API_BASE}GetForumTagSuggestions/`, {
    partialtag: params.partialtag,
  });
}
export function getPoll(http, params) {
  return get(http, `${API_BASE}Poll/${params.topicId}/`);
}
export function getRecruitmentThreadSummaries(http, body) {
  return post(http, `${API_BASE}Recruit/Summaries/`, body);
}
