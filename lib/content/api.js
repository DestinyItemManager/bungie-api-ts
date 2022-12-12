import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Content/';
export function getContentType(http, params) {
  return get(http, `${API_BASE}GetContentType/${params.type}/`);
}
export function getContentById(http, params) {
  return get(http, `${API_BASE}GetContentById/${params.id}/${params.locale}/`, {
    head: params.head,
  });
}
export function getContentByTagAndType(http, params) {
  return get(
    http,
    `${API_BASE}GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    {
      head: params.head,
    }
  );
}
export function searchContentWithText(http, params) {
  return get(http, `${API_BASE}Search/${params.locale}/`, {
    ctype: params.ctype,
    currentpage: params.currentpage,
    head: params.head,
    searchtext: params.searchtext,
    source: params.source,
    tag: params.tag,
  });
}
export function searchContentByTagAndType(http, params) {
  return get(
    http,
    `${API_BASE}SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    {
      currentpage: params.currentpage,
      head: params.head,
      itemsperpage: params.itemsperpage,
    }
  );
}
export function searchHelpArticles(http, params) {
  return get(http, `${API_BASE}SearchHelpArticles/${params.searchtext}/${params.size}/`);
}
export function rssNewsArticles(http, params) {
  return get(http, `${API_BASE}Rss/NewsArticles/${params.pageToken}/`, {
    categoryfilter: params.categoryfilter,
    includebody: params.includebody,
  });
}
