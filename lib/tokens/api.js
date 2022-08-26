export function forceDropsRepair(http) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ForceDropsRepair/',
  });
}
export function claimPartnerOffer(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ClaimOffer/',
    body,
  });
}
export function applyMissingPartnerOffersWithoutClaim(http, params) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Tokens/Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`,
  });
}
export function getPartnerOfferSkuHistory(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`,
  });
}
export function getPartnerRewardHistory(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Partner/History/${params.targetBnetMembershipId}/Application/${params.partnerApplicationId}/`,
  });
}
export function getBungieRewardsForUser(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForUser/${params.membershipId}/`,
  });
}
export function getBungieRewardsForPlatformUser(http, params) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForPlatformUser/${params.membershipId}/${params.membershipType}/`,
  });
}
export function getBungieRewardsList(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Tokens/Rewards/BungieRewards/',
  });
}
