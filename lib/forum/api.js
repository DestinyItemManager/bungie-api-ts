export function getTopicsPaged(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales,
      tagstring: params.tagstring,
    },
  });
}
export function getCoreTopicsPaged(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`,
    params: {
      locales: params.locales,
    },
  });
}
export function getPostsThreadedPaged(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned,
    },
  });
}
export function getPostsThreadedPagedFromChild(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`,
    params: {
      showbanned: params.showbanned,
    },
  });
}
export function getPostAndParent(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned,
    },
  });
}
export function getPostAndParentAwaitingApproval(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned,
    },
  });
}
export function getTopicForContent(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicForContent/${params.contentId}/`,
  });
}
export function getForumTagSuggestions(http, params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/',
    params: {
      partialtag: params.partialtag,
    },
  });
}
export function getPoll(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/Poll/${params.topicId}/`,
  });
}
export function getRecruitmentThreadSummaries(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body,
  });
}
