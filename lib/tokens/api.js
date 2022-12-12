import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/Tokens/';
export function forceDropsRepair(http) {
  return post(http, `${API_BASE}Partner/ForceDropsRepair/`);
}
export function claimPartnerOffer(http, body) {
  return post(http, `${API_BASE}Partner/ClaimOffer/`, body);
}
export function applyMissingPartnerOffersWithoutClaim(http, params) {
  return post(
    http,
    `${API_BASE}Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  );
}
export function getPartnerOfferSkuHistory(http, params) {
  return get(
    http,
    `${API_BASE}Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`
  );
}
export function getPartnerRewardHistory(http, params) {
  return get(
    http,
    `${API_BASE}Partner/History/${params.targetBnetMembershipId}/Application/${params.partnerApplicationId}/`
  );
}
export function getBungieRewardsForUser(http, params) {
  return get(http, `${API_BASE}Rewards/GetRewardsForUser/${params.membershipId}/`);
}
export function getBungieRewardsForPlatformUser(http, params) {
  return get(
    http,
    `${API_BASE}Rewards/GetRewardsForPlatformUser/${params.membershipId}/${params.membershipType}/`
  );
}
export function getBungieRewardsList(http) {
  return get(http, `${API_BASE}Rewards/BungieRewards/`);
}
