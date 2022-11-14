/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient, get, post } from '../http';

import {
  BungieMembershipType,
  ServerResponse
} from '../common.js';
import {
  BungieRewardDisplay,
  PartnerOfferClaimRequest,
  PartnerOfferSkuHistoryResponse,
  PartnerRewardHistoryResponse
} from './interfaces.js';

const API_BASE = "https://www.bungie.net/Platform/Tokens/";

/**
 * Twitch Drops self-repair function - scans twitch for drops not marked as
 * fulfilled and resyncs them.
 */
export function forceDropsRepair(http: HttpClient): Promise<ServerResponse<boolean>> {
  return post(http, `${API_BASE}Partner/ForceDropsRepair/`);
}

/** Claim a partner offer as the authenticated user. */
export function claimPartnerOffer(http: HttpClient, body: PartnerOfferClaimRequest): Promise<ServerResponse<boolean>> {
  return post(http, `${API_BASE}Partner/ClaimOffer/`, body);
}

export interface ApplyMissingPartnerOffersWithoutClaimParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}

/**
 * Apply a partner offer to the targeted user. This endpoint does not claim a new
 * offer, but any already claimed offers will be applied to the game if not already.
 */
export function applyMissingPartnerOffersWithoutClaim(http: HttpClient, params: ApplyMissingPartnerOffersWithoutClaimParams): Promise<ServerResponse<boolean>> {
  return post(http, `${API_BASE}Partner/ApplyMissingOffers/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`);
}

export interface GetPartnerOfferSkuHistoryParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}

/**
 * Returns the partner sku and offer history of the targeted user. Elevated
 * permissions are required to see users that are not yourself.
 */
export function getPartnerOfferSkuHistory(http: HttpClient, params: GetPartnerOfferSkuHistoryParams): Promise<ServerResponse<PartnerOfferSkuHistoryResponse[]>> {
  return get(http, `${API_BASE}Partner/History/${params.partnerApplicationId}/${params.targetBnetMembershipId}/`);
}

export interface GetPartnerRewardHistoryParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /** The bungie.net user to return reward history for. */
  targetBnetMembershipId: string;
}

/**
 * Returns the partner rewards history of the targeted user, both partner offers
 * and Twitch drops.
 */
export function getPartnerRewardHistory(http: HttpClient, params: GetPartnerRewardHistoryParams): Promise<ServerResponse<PartnerRewardHistoryResponse>> {
  return get(http, `${API_BASE}Partner/History/${params.targetBnetMembershipId}/Application/${params.partnerApplicationId}/`);
}

export interface GetBungieRewardsForUserParams {
  /**
   * bungie.net user membershipId for requested user rewards. If not self, elevated
   * permissions are required.
   */
  membershipId: string;
}

/** Returns the bungie rewards for the targeted user. */
export function getBungieRewardsForUser(http: HttpClient, params: GetBungieRewardsForUserParams): Promise<ServerResponse<{ [key: string]: BungieRewardDisplay }>> {
  return get(http, `${API_BASE}Rewards/GetRewardsForUser/${params.membershipId}/`);
}

export interface GetBungieRewardsForPlatformUserParams {
  /**
   * users platform membershipId for requested user rewards. If not self, elevated
   * permissions are required.
   */
  membershipId: string;
  /** The target Destiny 2 membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Returns the bungie rewards for the targeted user when a platform membership Id
 * and Type are used.
 */
export function getBungieRewardsForPlatformUser(http: HttpClient, params: GetBungieRewardsForPlatformUserParams): Promise<ServerResponse<{ [key: string]: BungieRewardDisplay }>> {
  return get(http, `${API_BASE}Rewards/GetRewardsForPlatformUser/${params.membershipId}/${params.membershipType}/`);
}

/** Returns a list of the current bungie rewards */
export function getBungieRewardsList(http: HttpClient): Promise<ServerResponse<{ [key: string]: BungieRewardDisplay }>> {
  return get(http, `${API_BASE}Rewards/BungieRewards/`);
}
