import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Content/';
export function getContentType(http, params) {
  return get(http, `${API_BASE}GetContentType/${params.type}/`);
}
export function getContentById(http, params) {
  const strParams = {};
  if (params.head !== undefined) {
    strParams.head = params.head.toString();
  }
  return get(http, `${API_BASE}GetContentById/${params.id}/${params.locale}/`, strParams);
}
export function getContentByTagAndType(http, params) {
  const strParams = {};
  if (params.head !== undefined) {
    strParams.head = params.head.toString();
  }
  return get(
    http,
    `${API_BASE}GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    strParams
  );
}
export function searchContentWithText(http, params) {
  const strParams = {};
  if (params.ctype !== undefined) {
    strParams.ctype = params.ctype;
  }
  if (params.currentpage !== undefined) {
    strParams.currentpage = params.currentpage.toString();
  }
  if (params.head !== undefined) {
    strParams.head = params.head.toString();
  }
  if (params.searchtext !== undefined) {
    strParams.searchtext = params.searchtext;
  }
  if (params.source !== undefined) {
    strParams.source = params.source;
  }
  if (params.tag !== undefined) {
    strParams.tag = params.tag;
  }
  return get(http, `${API_BASE}Search/${params.locale}/`, strParams);
}
export function searchContentByTagAndType(http, params) {
  const strParams = {};
  if (params.currentpage !== undefined) {
    strParams.currentpage = params.currentpage.toString();
  }
  if (params.head !== undefined) {
    strParams.head = params.head.toString();
  }
  if (params.itemsperpage !== undefined) {
    strParams.itemsperpage = params.itemsperpage.toString();
  }
  return get(
    http,
    `${API_BASE}SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`,
    strParams
  );
}
export function searchHelpArticles(http, params) {
  return get(http, `${API_BASE}SearchHelpArticles/${params.searchtext}/${params.size}/`);
}
export function rssNewsArticles(http, params) {
  const strParams = {};
  if (params.categoryfilter !== undefined) {
    strParams.categoryfilter = params.categoryfilter;
  }
  if (params.includebody !== undefined) {
    strParams.includebody = params.includebody.toString();
  }
  return get(http, `${API_BASE}Rss/NewsArticles/${params.pageToken}/`, strParams);
}
