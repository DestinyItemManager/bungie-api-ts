export function getCommunityContent(http, { mediaFilter, page, sort }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/CommunityContent/Get/${sort}/${mediaFilter}/${page}/`,
  });
}
