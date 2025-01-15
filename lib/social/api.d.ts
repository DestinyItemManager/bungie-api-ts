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
import { HttpClient } from '../http.js';
import {
  BungieFriendListResponse,
  BungieFriendRequestListResponse,
  PlatformFriendResponse,
  PlatformFriendType,
} from './interfaces.js';
import { ServerResponse } from '../common.js';
/** Returns your Bungie Friend list */
export declare function getFriendList(
  http: HttpClient
): Promise<ServerResponse<BungieFriendListResponse>>;
/** Returns your friend request queue. */
export declare function getFriendRequestList(
  http: HttpClient
): Promise<ServerResponse<BungieFriendRequestListResponse>>;
export interface IssueFriendRequestParams {
  /** The membership id of the user you wish to add. */
  membershipId: string;
}
/**
 * Requests a friend relationship with the target user. Any of the target user's
 * linked membership ids are valid inputs.
 */
export declare function issueFriendRequest(
  http: HttpClient,
  params: IssueFriendRequestParams
): Promise<ServerResponse<boolean>>;
export interface AcceptFriendRequestParams {
  /** The membership id of the user you wish to accept. */
  membershipId: string;
}
/**
 * Accepts a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 */
export declare function acceptFriendRequest(
  http: HttpClient,
  params: AcceptFriendRequestParams
): Promise<ServerResponse<boolean>>;
export interface DeclineFriendRequestParams {
  /** The membership id of the user you wish to decline. */
  membershipId: string;
}
/**
 * Declines a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 */
export declare function declineFriendRequest(
  http: HttpClient,
  params: DeclineFriendRequestParams
): Promise<ServerResponse<boolean>>;
export interface RemoveFriendParams {
  /** The membership id of the user you wish to remove. */
  membershipId: string;
}
/**
 * Remove a friend relationship with the target user. The user must be on your
 * friend list, though no error will occur if they are not.
 */
export declare function removeFriend(
  http: HttpClient,
  params: RemoveFriendParams
): Promise<ServerResponse<boolean>>;
export interface RemoveFriendRequestParams {
  /** The membership id of the user you wish to remove. */
  membershipId: string;
}
/**
 * Remove a friend relationship with the target user. The user must be on your
 * outgoing request friend list, though no error will occur if they are not.
 */
export declare function removeFriendRequest(
  http: HttpClient,
  params: RemoveFriendRequestParams
): Promise<ServerResponse<boolean>>;
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
export declare function getPlatformFriendList(
  http: HttpClient,
  params: GetPlatformFriendListParams
): Promise<ServerResponse<PlatformFriendResponse>>;
