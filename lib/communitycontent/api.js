import { get } from '../http.js';
export function getCommunityContent(http, params) {
  return get(
    http,
    `https://www.bungie.net/Platform/CommunityContent/Get/${params.sort}/${params.mediaFilter}/${params.page}/`
  );
}
