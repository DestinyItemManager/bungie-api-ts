export function getContentType(http, { type }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentType/${type}/`,
  });
}
export function getContentById(http, { id, locale, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentById/${id}/${locale}/`,
    params,
  });
}
export function getContentByTagAndType(http, { locale, tag, type, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentByTagAndType/${tag}/${type}/${locale}/`,
    params,
  });
}
export function searchContentWithText(http, { locale, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/Search/${locale}/`,
    params,
  });
}
export function searchContentByTagAndType(http, { locale, tag, type, ...params }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${tag}/${type}/${locale}/`,
    params,
  });
}
export function searchHelpArticles(http, { searchtext, size }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchHelpArticles/${searchtext}/${size}/`,
  });
}
