/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient, get, post } from '../http.js';

import {
  BungieFriendListResponse,
  BungieFriendRequestListResponse,
  PlatformFriendResponse,
  PlatformFriendType
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

const API_BASE = "https://www.bungie.net/Platform/Social/";

/** Returns your Bungie Friend list */
export function getFriendList(http: HttpClient): Promise<ServerResponse<BungieFriendListResponse>> {
  return get(http, `${API_BASE}Friends/`);
}

/** Returns your friend request queue. */
export function getFriendRequestList(http: HttpClient): Promise<ServerResponse<BungieFriendRequestListResponse>> {
  return get(http, `${API_BASE}Friends/Requests/`);
}

export interface IssueFriendRequestParams {
  /** The membership id of the user you wish to add. */
  membershipId: string;
}

/**
 * Requests a friend relationship with the target user. Any of the target user's
 * linked membership ids are valid inputs.
 */
export function issueFriendRequest(http: HttpClient, params: IssueFriendRequestParams): Promise<ServerResponse<boolean>> {
    return post(http, `${API_BASE}Friends/Add/${params.membershipId}/`);
}

export interface AcceptFriendRequestParams {
  /** The membership id of the user you wish to accept. */
  membershipId: string;
}

/**
 * Accepts a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 */
export function acceptFriendRequest(http: HttpClient, params: AcceptFriendRequestParams): Promise<ServerResponse<boolean>> {
    return post(http, `${API_BASE}Friends/Requests/Accept/${params.membershipId}/`);
}

export interface DeclineFriendRequestParams {
  /** The membership id of the user you wish to decline. */
  membershipId: string;
}

/**
 * Declines a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 */
export function declineFriendRequest(http: HttpClient, params: DeclineFriendRequestParams): Promise<ServerResponse<boolean>> {
    return post(http, `${API_BASE}Friends/Requests/Decline/${params.membershipId}/`);
}

export interface RemoveFriendParams {
  /** The membership id of the user you wish to remove. */
  membershipId: string;
}

/**
 * Remove a friend relationship with the target user. The user must be on your
 * friend list, though no error will occur if they are not.
 */
export function removeFriend(http: HttpClient, params: RemoveFriendParams): Promise<ServerResponse<boolean>> {
    return post(http, `${API_BASE}Friends/Remove/${params.membershipId}/`);
}

export interface RemoveFriendRequestParams {
  /** The membership id of the user you wish to remove. */
  membershipId: string;
}

/**
 * Remove a friend relationship with the target user. The user must be on your
 * outgoing request friend list, though no error will occur if they are not.
 */
export function removeFriendRequest(http: HttpClient, params: RemoveFriendRequestParams): Promise<ServerResponse<boolean>> {
    return post(http, `${API_BASE}Friends/Requests/Remove/${params.membershipId}/`);
}

export interface GetPlatformFriendListParams {
  /** The platform friend type. */
  friendPlatform: PlatformFriendType;
  /** The zero based page to return. Page size is 100. */
  page: string;
}

/**
 * Gets the platform friend of the requested type, with additional information if
 * they have Bungie accounts. Must have a recent login session with said platform.
 */
export function getPlatformFriendList(http: HttpClient, params: GetPlatformFriendListParams): Promise<ServerResponse<PlatformFriendResponse>> {
  return get(http, `${API_BASE}PlatformFriends/${params.friendPlatform}/${params.page}/`);
}
