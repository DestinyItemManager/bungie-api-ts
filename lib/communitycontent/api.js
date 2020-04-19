export function getCommunityContent(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`,
  });
}
