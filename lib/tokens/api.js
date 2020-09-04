export function claimPartnerOffer(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Tokens/Partner/ClaimOffer/',
    body,
  });
}
export function applyMissingPartnerOffersWithoutClaim(
  http,
  { partnerApplicationId, targetBnetMembershipId }
) {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Tokens/Partner/ApplyMissingOffers/${partnerApplicationId}/${targetBnetMembershipId}/`,
  });
}
export function getPartnerOfferSkuHistory(http, { partnerApplicationId, targetBnetMembershipId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Partner/History/${partnerApplicationId}/${targetBnetMembershipId}/`,
  });
}
