export function getTopicsPaged(
  http,
  { categoryFilter, group, page, pageSize, quickDate, sort, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${page}/${pageSize}/${group}/${sort}/${quickDate}/${categoryFilter}/`,
    params,
  });
}
export function getCoreTopicsPaged(http, { categoryFilter, page, quickDate, sort, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${page}/${sort}/${quickDate}/${categoryFilter}/`,
    params,
  });
}
export function getPostsThreadedPaged(
  http,
  { getParentPost, page, pageSize, parentPostId, replySize, rootThreadMode, sortMode, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${parentPostId}/${page}/${pageSize}/${replySize}/${getParentPost}/${rootThreadMode}/${sortMode}/`,
    params,
  });
}
export function getPostsThreadedPagedFromChild(
  http,
  { childPostId, page, pageSize, replySize, rootThreadMode, sortMode, ...params }
) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${childPostId}/${page}/${pageSize}/${replySize}/${rootThreadMode}/${sortMode}/`,
    params,
  });
}
export function getPostAndParent(http, { childPostId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${childPostId}/`,
    params,
  });
}
export function getPostAndParentAwaitingApproval(http, { childPostId, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${childPostId}/`,
    params,
  });
}
export function getTopicForContent(http, { contentId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicForContent/${contentId}/`,
  });
}
export function getForumTagSuggestions(http, { ...params }) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/',
    params,
  });
}
export function getPoll(http, { topicId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/Poll/${topicId}/`,
  });
}
export function getRecruitmentThreadSummaries(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body,
  });
}
