/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.20.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { BungieMembershipType } from '../common.js';
export declare const enum DestinyFireteamFinderApplicationType {
  Unknown = 0,
  Creator = 1,
  Search = 2,
  Invite = 3,
  Friend = 4,
  Encounter = 5,
  Public = 6,
}
export interface DestinyFireteamFinderBulkGetListingStatusRequest {}
export interface DestinyFireteamFinderHostLobbyRequest {
  readonly maxPlayerCount: number;
  readonly onlinePlayersOnly: boolean;
  readonly privacyScope: DestinyFireteamFinderLobbyPrivacyScope;
  readonly scheduledDateTime: string;
  readonly clanId: string;
  readonly listingValues: DestinyFireteamFinderListingValue[];
  /** Mapped to DestinyFireteamFinderActivityGraphDefinition in the manifest. */
  readonly activityGraphHash: number;
  /** Mapped to DestinyActivityDefinition in the manifest. */
  readonly activityHash: number;
}
export interface DestinyFireteamFinderJoinLobbyRequest {
  readonly lobbyId: string;
  readonly offerId: string;
}
export interface DestinyFireteamFinderKickPlayerRequest {
  readonly targetMembershipType: BungieMembershipType;
  readonly targetCharacterId: string;
}
export interface DestinyFireteamFinderRespondToApplicationRequest {
  readonly accepted: boolean;
}
export interface DestinyFireteamFinderRespondToAuthenticationRequest {
  readonly confirmed: boolean;
}
export interface DestinyFireteamFinderRespondToOfferRequest {
  readonly accepted: boolean;
}
export interface DestinyFireteamFinderSearchListingsByClanRequest {
  readonly pageSize: number;
  readonly pageToken: string;
  readonly lobbyState: DestinyFireteamFinderLobbyState;
}
export interface DestinyFireteamFinderSearchListingsByFiltersRequest {
  readonly filters: DestinyFireteamFinderListingFilter[];
  readonly pageSize: number;
  readonly pageToken: string;
  readonly lobbyState: DestinyFireteamFinderLobbyState;
}
export interface DestinyFireteamFinderUpdateLobbySettingsRequest {
  readonly updatedSettings: DestinyFireteamFinderLobbySettings;
}
export interface DestinyFireteamFinderApplyToListingResponse {
  readonly isApplied: boolean;
  readonly application: DestinyFireteamFinderApplication;
  readonly listing: DestinyFireteamFinderListing;
}
export interface DestinyFireteamFinderApplication {
  readonly applicationId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderApplicationState;
  readonly submitterId: DestinyFireteamFinderPlayerId;
  readonly referralToken: string;
  readonly applicantSet: DestinyFireteamFinderApplicantSet;
  readonly applicationType: DestinyFireteamFinderApplicationType;
  readonly listingId: string;
  readonly createdDateTime: string;
}
export declare const enum DestinyFireteamFinderApplicationState {
  Unknown = 0,
  WaitingForApplicants = 1,
  WaitingForLobbyOwner = 2,
  Accepted = 3,
  Rejected = 4,
  Deleted = 5,
  Expired = 6,
}
export interface DestinyFireteamFinderPlayerId {
  readonly membershipId: string;
  readonly membershipType: BungieMembershipType;
  readonly characterId: string;
}
export interface DestinyFireteamFinderApplicantSet {
  readonly applicants: DestinyFireteamFinderApplicant[];
}
export interface DestinyFireteamFinderApplicant {}
export interface DestinyFireteamFinderListing {
  readonly listingId: string;
  readonly revision: number;
  readonly ownerId: DestinyFireteamFinderPlayerId;
  readonly settings: DestinyFireteamFinderLobbySettings;
  readonly availableSlots: number;
  readonly lobbyId: string;
  readonly lobbyState: DestinyFireteamFinderLobbyState;
  readonly createdDateTime: string;
}
export interface DestinyFireteamFinderLobbySettings {
  readonly maxPlayerCount: number;
  readonly onlinePlayersOnly: boolean;
  readonly privacyScope: DestinyFireteamFinderLobbyPrivacyScope;
  readonly scheduledDateTime: string;
  readonly clanId: string;
  readonly listingValues: DestinyFireteamFinderListingValue[];
  /** Mapped to DestinyFireteamFinderActivityGraphDefinition in the manifest. */
  readonly activityGraphHash: number;
  /** Mapped to DestinyActivityDefinition in the manifest. */
  readonly activityHash: number;
}
export declare const enum DestinyFireteamFinderLobbyPrivacyScope {
  Unknown = 0,
  Open = 1,
  Applications = 2,
  Clan = 3,
  Friends = 4,
}
export interface DestinyFireteamFinderListingValue {
  readonly valueType: number;
  readonly values: number[];
}
export declare const enum DestinyFireteamFinderLobbyState {
  Unknown = 0,
  Inactive = 1,
  Active = 2,
  Expired = 3,
  Closed = 4,
  Canceled = 5,
  Deleted = 6,
}
export interface DestinyFireteamFinderBulkGetListingStatusResponse {
  readonly listingStatus: DestinyFireteamFinderListingStatus[];
}
export interface DestinyFireteamFinderListingStatus {
  readonly listingId: string;
  readonly listingRevision: number;
  readonly availableSlots: number;
}
export interface DestinyFireteamFinderGetApplicationResponse {
  readonly applicationId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderApplicationState;
  readonly submitterId: DestinyFireteamFinderPlayerId;
  readonly referralToken: string;
  readonly applicantSet: DestinyFireteamFinderApplicantSet;
  readonly applicationType: DestinyFireteamFinderApplicationType;
  readonly listingId: string;
  readonly createdDateTime: string;
}
export interface DestinyFireteamFinderGetListingApplicationsResponse {
  readonly applications: DestinyFireteamFinderApplication[];
  readonly pageSize: number;
  readonly nextPageToken: string;
}
export interface DestinyFireteamFinderLobbyResponse {
  readonly lobbyId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderLobbyState;
  readonly owner: DestinyFireteamFinderPlayerId;
  readonly settings: DestinyFireteamFinderLobbySettings;
  readonly players: DestinyFireteamFinderLobbyPlayer[];
  readonly listingId: string;
  readonly createdDateTime: string;
}
export interface DestinyFireteamFinderLobbyPlayer {
  readonly playerId: DestinyFireteamFinderPlayerId;
  readonly referralToken: string;
  readonly state: DestinyFireteamFinderPlayerReadinessState;
  readonly offerId: string;
}
export declare const enum DestinyFireteamFinderPlayerReadinessState {
  Unknown = 0,
  Reserved = 1,
  Disconnected = 2,
  InLobbyUnready = 3,
  InLobbyReady = 4,
  Summoned = 5,
}
export interface DestinyFireteamFinderGetPlayerLobbiesResponse {
  /** All available lobbies that this player has created or is a member of. */
  readonly lobbies: DestinyFireteamFinderLobbyResponse[];
  /** The number of results requested. */
  readonly pageSize: number;
  /**
   * A string token required to get the next page of results. This will be null or
   * empty if there are no more results.
   */
  readonly nextPageToken?: string;
}
export interface DestinyFireteamFinderGetPlayerApplicationsResponse {
  /** All applications that this player has sent. */
  readonly applications: DestinyFireteamFinderApplication[];
  /** String token to request next page of results. */
  readonly nextPageToken: string;
}
export interface DestinyFireteamFinderGetPlayerOffersResponse {
  /** All offers that this player has recieved. */
  readonly offers: DestinyFireteamFinderOffer[];
}
export interface DestinyFireteamFinderOffer {
  readonly offerId: string;
  readonly lobbyId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderOfferState;
  readonly targetId: DestinyFireteamFinderPlayerId;
  readonly applicationId: string;
  readonly createdDateTime: string;
}
export declare const enum DestinyFireteamFinderOfferState {
  Unknown = 0,
  Pending = 1,
  Accepted = 2,
  Rejected = 3,
  Deleted = 4,
  Expired = 5,
}
export interface DestinyFireteamFinderGetCharacterActivityAccessResponse {
  /**
   * A map of fireteam finder activity graph hashes to visibility and availability
   * states.
   *
   * Mapped to DestinyFireteamFinderActivityGraphDefinition in the manifest.
   */
  readonly fireteamFinderActivityGraphStates: {
    [key: number]: DestinyFireteamFinderActivityGraphState;
  };
}
export interface DestinyFireteamFinderActivityGraphState {
  /**
   * Indicates if this fireteam finder activity graph node is visible for this
   * character.
   */
  readonly isVisible: boolean;
  /**
   * Indicates if this fireteam finder activity graph node is available to select for
   * this character.
   */
  readonly isAvailable: boolean;
}
export interface DestinyFireteamFinderGetLobbyOffersResponse {
  readonly offers: DestinyFireteamFinderOffer[];
  readonly pageToken: string;
}
export interface DestinyFireteamFinderHostLobbyResponse {
  readonly lobbyId: string;
  readonly listingId: string;
  readonly applicationId: string;
  readonly offerId: string;
}
export interface DestinyFireteamFinderRespondToApplicationResponse {
  readonly applicationId: string;
  readonly applicationRevision: number;
}
export interface DestinyFireteamFinderRespondToAuthenticationResponse {
  readonly applicationId: string;
  readonly applicationRevision: number;
  readonly offer: DestinyFireteamFinderOffer;
  readonly listing: DestinyFireteamFinderListing;
}
export interface DestinyFireteamFinderRespondToOfferResponse {
  readonly offerId: string;
  readonly revision: number;
  readonly state: DestinyFireteamFinderOfferState;
}
export interface DestinyFireteamFinderSearchListingsByClanResponse {
  readonly listings: DestinyFireteamFinderListing[];
  readonly pageToken: string;
}
export interface DestinyFireteamFinderListingFilter {
  readonly listingValue: DestinyFireteamFinderListingValue;
  readonly rangeType: DestinyFireteamFinderListingFilterRangeType;
  readonly matchType: DestinyFireteamFinderListingFilterMatchType;
}
export declare const enum DestinyFireteamFinderListingFilterRangeType {
  Unknown = 0,
  All = 1,
  Any = 2,
  InRangeInclusive = 3,
  InRangeExclusive = 4,
  GreaterThan = 5,
  GreaterThanOrEqualTo = 6,
  LessThan = 7,
  LessThanOrEqualTo = 8,
}
export declare const enum DestinyFireteamFinderListingFilterMatchType {
  Unknown = 0,
  MustNot = 1,
  Should = 2,
  Filter = 3,
}
export interface DestinyFireteamFinderSearchListingsByFiltersResponse {
  readonly listings: DestinyFireteamFinderListing[];
  readonly pageToken: string;
}
export interface DestinyFireteamFinderUpdateLobbySettingsResponse {
  readonly updatedLobby: DestinyFireteamFinderLobbyResponse;
  readonly updatedListing: DestinyFireteamFinderListing;
}
