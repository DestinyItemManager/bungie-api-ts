export function getContentType(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentType/${params.type}/`,
  });
}
export function getContentById(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentById/${params.id}/${params.locale}/`,
    params: {
      head: params.head,
    },
  });
}
export function getContentByTagAndType(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    params: {
      head: params.head,
    },
  });
}
export function searchContentWithText(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/Search/${params.locale}/`,
    params: {
      ctype: params.ctype,
      currentpage: params.currentpage,
      head: params.head,
      searchtext: params.searchtext,
      source: params.source,
      tag: params.tag,
    },
  });
}
export function searchContentByTagAndType(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    params: {
      currentpage: params.currentpage,
      head: params.head,
      itemsperpage: params.itemsperpage,
    },
  });
}
export function searchHelpArticles(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchHelpArticles/${params.searchtext}/${params.size}/`,
  });
}
