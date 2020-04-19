export function getTrendingCategories(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Trending/Categories/',
  });
}
export function getTrendingCategory(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Categories/${params.categoryId}/${params.pageNumber}/`,
  });
}
export function getTrendingEntryDetail(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${params.trendingEntryType}/${params.identifier}/`,
  });
}
