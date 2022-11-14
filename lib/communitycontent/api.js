import { get } from '../http';
const API_BASE =
  'https://www.bungie.net/Platform/CommunityContent/Get/{sort}/{mediaFilter}/{page}/';
export function getCommunityContent(http, params) {
  return get(http, `${API_BASE}`);
}
