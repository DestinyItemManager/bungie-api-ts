/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  FireteamDateRange,
  FireteamPlatform,
  FireteamPublicSearchOption,
  FireteamResponse,
  FireteamSlotSearch,
  SearchResultOfFireteamResponse,
  SearchResultOfFireteamSummary
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

export interface GetActivePrivateClanFireteamCountParams {
  /** The group id of the clan. */
  groupId: string;
}

/**
 * Gets a count of all active non-public fireteams for the specified clan. Maximum
 * value returned is 25.
 */
export function getActivePrivateClanFireteamCount(http: HttpClient, params: GetActivePrivateClanFireteamCountParams): Promise<ServerResponse<number>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/ActiveCount/`
  });
}

export interface GetAvailableClanFireteamsParams {
  /** The activity type to filter by. */
  activityType: number;
  /** The date range to grab available fireteams. */
  dateRange: FireteamDateRange;
  /** The group id of the clan. */
  groupId: string;
  /** An optional language filter. */
  langFilter?: string;
  /** Zero based page */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
  /** Determines public/private filtering. */
  publicOnly: FireteamPublicSearchOption;
  /** Filters based on available slots */
  slotFilter: FireteamSlotSearch;
}

/**
 * Gets a listing of all of this clan's fireteams that are have available slots.
 * Caller is not checked for join criteria so caching is maximized.
 */
export function getAvailableClanFireteams(http: HttpClient, params: GetAvailableClanFireteamsParams): Promise<ServerResponse<SearchResultOfFireteamSummary>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.publicOnly}/${params.page}/`,
    params: {
      langFilter: params.langFilter
    }
  });
}

export interface SearchPublicAvailableClanFireteamsParams {
  /** The activity type to filter by. */
  activityType: number;
  /** The date range to grab available fireteams. */
  dateRange: FireteamDateRange;
  /** An optional language filter. */
  langFilter?: string;
  /** Zero based page */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
  /** Filters based on available slots */
  slotFilter: FireteamSlotSearch;
}

/**
 * Gets a listing of all public fireteams starting now with open slots. Caller is
 * not checked for join criteria so caching is maximized.
 */
export function searchPublicAvailableClanFireteams(http: HttpClient, params: SearchPublicAvailableClanFireteamsParams): Promise<ServerResponse<SearchResultOfFireteamSummary>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Search/Available/${params.platform}/${params.activityType}/${params.dateRange}/${params.slotFilter}/${params.page}/`,
    params: {
      langFilter: params.langFilter
    }
  });
}

export interface GetMyClanFireteamsParams {
  /**
   * If true, filter by clan. Otherwise, ignore the clan and show all of the user's
   * fireteams.
   */
  groupFilter?: boolean;
  /**
   * The group id of the clan. (This parameter is ignored unless the optional query
   * parameter groupFilter is true).
   */
  groupId: string;
  /** If true, return fireteams that have been closed. */
  includeClosed: boolean;
  /** An optional language filter. */
  langFilter?: string;
  /** Deprecated parameter, ignored. */
  page: number;
  /** The platform filter. */
  platform: FireteamPlatform;
}

/**
 * Gets a listing of all clan fireteams that caller is an applicant, a member, or
 * an alternate of.
 */
export function getMyClanFireteams(http: HttpClient, params: GetMyClanFireteamsParams): Promise<ServerResponse<SearchResultOfFireteamResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/My/${params.platform}/${params.includeClosed}/${params.page}/`,
    params: {
      groupFilter: params.groupFilter,
      langFilter: params.langFilter
    }
  });
}

export interface GetClanFireteamParams {
  /** The unique id of the fireteam. */
  fireteamId: string;
  /** The group id of the clan. */
  groupId: string;
}

/** Gets a specific clan fireteam. */
export function getClanFireteam(http: HttpClient, params: GetClanFireteamParams): Promise<ServerResponse<FireteamResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Fireteam/Clan/${params.groupId}/Summary/${params.fireteamId}/`
  });
}
