import { get, post } from '../http.js';
const API_BASE = 'https://www.bungie.net/Platform/FireteamFinder/';
export function activateLobby(http, params) {
  return post(
    http,
    `${API_BASE}Lobby/Activate/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function activateLobbyForNewListingId(http, params) {
  return post(
    http,
    `${API_BASE}Lobby/ActivateForNewListingId/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function applyToListing(http, params) {
  return post(
    http,
    `${API_BASE}Listing/${params.listingId}/Apply/${params.applicationType}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function bulkGetListingStatus(http, params, body) {
  return post(
    http,
    `${API_BASE}Listing/BulkStatus/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function getApplication(http, params) {
  return get(
    http,
    `${API_BASE}Application/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function getListing(http, params) {
  return get(http, `${API_BASE}Listing/${params.listingId}/`);
}
export function getListingApplications(http, params) {
  const strParams = {};
  if (params.flags !== undefined) {
    strParams.flags = params.flags;
  }
  if (params.nextPageToken !== undefined) {
    strParams.nextPageToken = params.nextPageToken;
  }
  if (params.pageSize !== undefined) {
    strParams.pageSize = params.pageSize.toString();
  }
  return get(
    http,
    `${API_BASE}Listing/${params.listingId}/Applications/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    strParams
  );
}
export function getLobby(http, params) {
  return get(
    http,
    `${API_BASE}Lobby/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function getPlayerLobbies(http, params) {
  const strParams = {};
  if (params.nextPageToken !== undefined) {
    strParams.nextPageToken = params.nextPageToken;
  }
  if (params.pageSize !== undefined) {
    strParams.pageSize = params.pageSize.toString();
  }
  return get(
    http,
    `${API_BASE}PlayerLobbies/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    strParams
  );
}
export function getPlayerApplications(http, params) {
  const strParams = {};
  if (params.nextPageToken !== undefined) {
    strParams.nextPageToken = params.nextPageToken;
  }
  if (params.pageSize !== undefined) {
    strParams.pageSize = params.pageSize.toString();
  }
  return get(
    http,
    `${API_BASE}PlayerApplications/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    strParams
  );
}
export function getPlayerOffers(http, params) {
  const strParams = {};
  if (params.nextPageToken !== undefined) {
    strParams.nextPageToken = params.nextPageToken;
  }
  if (params.pageSize !== undefined) {
    strParams.pageSize = params.pageSize.toString();
  }
  return get(
    http,
    `${API_BASE}PlayerOffers/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    strParams
  );
}
export function getCharacterActivityAccess(http, params) {
  return get(
    http,
    `${API_BASE}CharacterActivityAccess/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function getOffer(http, params) {
  return get(
    http,
    `${API_BASE}Offer/${params.offerId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function getLobbyOffers(http, params) {
  const strParams = {};
  if (params.nextPageToken !== undefined) {
    strParams.nextPageToken = params.nextPageToken;
  }
  if (params.pageSize !== undefined) {
    strParams.pageSize = params.pageSize.toString();
  }
  return get(
    http,
    `${API_BASE}Lobby/${params.lobbyId}/Offers/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    strParams
  );
}
export function hostLobby(http, params, body) {
  return post(
    http,
    `${API_BASE}Lobby/Host/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function joinLobby(http, params, body) {
  return post(
    http,
    `${API_BASE}Lobby/Join/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function kickPlayer(http, params, body) {
  return post(
    http,
    `${API_BASE}Lobby/${params.lobbyId}/KickPlayer/${params.targetMembershipId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function leaveApplication(http, params) {
  return post(
    http,
    `${API_BASE}Application/Leave/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function leaveLobby(http, params) {
  return post(
    http,
    `${API_BASE}Lobby/Leave/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`
  );
}
export function respondToApplication(http, params, body) {
  return post(
    http,
    `${API_BASE}Application/Respond/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function respondToAuthentication(http, params, body) {
  return post(
    http,
    `${API_BASE}Authentication/Respond/${params.applicationId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function respondToOffer(http, params, body) {
  return post(
    http,
    `${API_BASE}Offer/Respond/${params.offerId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function searchListingsByClan(http, params, body) {
  return post(
    http,
    `${API_BASE}Search/Clan/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function searchListingsByFilters(http, params, body) {
  return post(
    http,
    `${API_BASE}Search/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
export function updateLobbySettings(http, params, body) {
  return post(
    http,
    `${API_BASE}Lobby/UpdateSettings/${params.lobbyId}/${params.destinyMembershipType}/${params.destinyMembershipId}/${params.destinyCharacterId}/`,
    body
  );
}
