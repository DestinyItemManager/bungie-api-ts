import { get } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Trending/';
export function getTrendingCategories(http) {
  return get(http, `${API_BASE}Categories/`);
}
export function getTrendingCategory(http, params) {
  return get(http, `${API_BASE}Categories/${params.categoryId}/${params.pageNumber}/`);
}
export function getTrendingEntryDetail(http, params) {
  return get(http, `${API_BASE}Details/${params.trendingEntryType}/${params.identifier}/`);
}
