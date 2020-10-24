export function getTrendingCategories(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Trending/Categories/',
  });
}
export function getTrendingCategory(http, { categoryId, pageNumber }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Categories/${categoryId}/${pageNumber}/`,
  });
}
export function getTrendingEntryDetail(http, { identifier, trendingEntryType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Trending/Details/${trendingEntryType}/${identifier}/`,
  });
}
