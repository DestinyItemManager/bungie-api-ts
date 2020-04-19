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
