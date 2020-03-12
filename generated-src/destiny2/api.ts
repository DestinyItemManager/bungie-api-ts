/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.8.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  AwaAuthorizationResult,
  AwaInitializeResponse,
  AwaPermissionRequested,
  AwaUserResponse,
  DestinyActivityHistoryResults,
  DestinyActivityModeType,
  DestinyAggregateActivityResults,
  DestinyCharacterResponse,
  DestinyClanAggregateStat,
  DestinyCollectibleNodeDetailResponse,
  DestinyComponentType,
  DestinyDefinition,
  DestinyEntitySearchResult,
  DestinyEquipItemResults,
  DestinyHistoricalStatsAccountResult,
  DestinyHistoricalStatsByPeriod,
  DestinyHistoricalStatsDefinition,
  DestinyHistoricalWeaponStatsData,
  DestinyInsertPlugsActionRequest,
  DestinyItemActionRequest,
  DestinyItemChangeResponse,
  DestinyItemResponse,
  DestinyItemSetActionRequest,
  DestinyItemStateRequest,
  DestinyItemTransferRequest,
  DestinyLeaderboard,
  DestinyLinkedProfilesResponse,
  DestinyManifest,
  DestinyMilestone,
  DestinyMilestoneContent,
  DestinyPostGameCarnageReportData,
  DestinyPostmasterTransferRequest,
  DestinyProfileResponse,
  DestinyPublicMilestone,
  DestinyPublicVendorsResponse,
  DestinyReportOffensePgcrRequest,
  DestinyStatsGroupType,
  DestinyVendorResponse,
  DestinyVendorsResponse,
  PeriodType
} from './interfaces';
import {
  BungieMembershipType,
  ServerResponse
} from '../common';
import {
  UserInfoCard
} from '../user/interfaces';

/** Returns the current version of the manifest as a json object. */
export function getDestinyManifest(http: HttpClient): Promise<ServerResponse<DestinyManifest>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Manifest/'
  });
}

export interface GetDestinyEntityDefinitionParams {
  /**
   * The type of entity for whom you would like results. These correspond to the
   * entity's definition contract name. For instance, if you are looking for items,
   * this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint
   * is still in beta, and may experience rough edges. The schema is tentatively in
   * final form, but there may be bugs that prevent desirable operation.
   */
  entityType: string;
  /** The hash identifier for the specific Entity you want returned. */
  hashIdentifier: number;
}

/**
 * Returns the static definition of an entity of the given Type and hash identifier.
 * Examine the API Documentation for the Type Names of entities that have their
 * own definitions. Note that the return type will always *inherit from*
 * DestinyDefinition, but the specific type returned will be the requested entity
 * type if it can be found. Please don't use this as a chatty alternative to the
 * Manifest database if you require large sets of data, but for simple and one-off
 * accesses this should be handy.
 */
export function getDestinyEntityDefinition(http: HttpClient, params: GetDestinyEntityDefinitionParams): Promise<ServerResponse<DestinyDefinition>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Manifest/${params.entityType}/${params.hashIdentifier}/`
  });
}

export interface SearchDestinyPlayerParams {
  /** The full gamertag or PSN id of the player. Spaces and case are ignored. */
  displayName: string;
  /** A valid non-BungieNet membership type, or All. */
  membershipType: BungieMembershipType;
  /**
   * (optional) If passed in and set to true, we will return the original Destiny
   * Profile(s) linked to that gamertag, and not their currently active Destiny
   * Profile.
   */
  returnOriginalProfile?: boolean;
}

/**
 * Returns a list of Destiny memberships given a full Gamertag or PSN ID. Unless
 * you pass returnOriginalProfile=true, this will return membership information for
 * the users' Primary Cross Save Profile if they are engaged in cross save rather
 * than any original Destiny profile that is now being overridden.
 */
export function searchDestinyPlayer(http: HttpClient, params: SearchDestinyPlayerParams): Promise<ServerResponse<UserInfoCard[]>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/${params.membershipType}/${params.displayName}/`,
    params: {
      returnOriginalProfile: params.returnOriginalProfile
    }
  });
}

export interface GetLinkedProfilesParams {
  /**
   * (optional) if set to 'true', all memberships regardless of whether they're
   * obscured by overrides will be returned. Normal privacy restrictions on account
   * linking will still apply no matter what.
   */
  getAllMemberships?: boolean;
  /**
   * The ID of the membership whose linked Destiny accounts you want returned. Make
   * sure your membership ID matches its Membership Type: don't pass us a PSN
   * membership ID and the XBox membership type, it's not going to work!
   */
  membershipId: string;
  /** The type for the membership whose linked Destiny accounts you want returned. */
  membershipType: BungieMembershipType;
}

/**
 * Returns a summary information about all profiles linked to the requesting
 * membership type/membership ID that have valid Destiny information. The passed-in
 * Membership Type/Membership ID may be a Bungie.Net membership or a Destiny
 * membership. It only returns the minimal amount of data to begin making more
 * substantive requests, but will hopefully serve as a useful alternative to
 * UserServices for people who just care about Destiny data. Note that it will only
 * return linked accounts whose linkages you are allowed to view.
 */
export function getLinkedProfiles(http: HttpClient, params: GetLinkedProfilesParams): Promise<ServerResponse<DestinyLinkedProfilesResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    params: {
      getAllMemberships: params.getAllMemberships
    }
  });
}

export interface GetProfileParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** Destiny membership ID. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Returns Destiny Profile information for the supplied membership. */
export function getProfile(http: HttpClient, params: GetProfileParams): Promise<ServerResponse<DestinyProfileResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetCharacterParams {
  /** ID of the character. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** Destiny membership ID. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Returns character information for the supplied character. */
export function getCharacter(http: HttpClient, params: GetCharacterParams): Promise<ServerResponse<DestinyCharacterResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetClanWeeklyRewardStateParams {
  /** A valid group id of clan. */
  groupId: string;
}

/**
 * Returns information on the weekly clan rewards and if the clan has earned them
 * or not. Note that this will always report rewards as not redeemed.
 */
export function getClanWeeklyRewardState(http: HttpClient, params: GetClanWeeklyRewardStateParams): Promise<ServerResponse<DestinyMilestone>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Clan/${params.groupId}/WeeklyRewardState/`
  });
}

export interface GetItemParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** The membership ID of the destiny profile. */
  destinyMembershipId: string;
  /** The Instance ID of the destiny item. */
  itemInstanceId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is
 * one with an ItemInstanceId. Non-instanced items, such as materials, have no
 * useful instance-specific details and thus are not queryable here.
 */
export function getItem(http: HttpClient, params: GetItemParams): Promise<ServerResponse<DestinyItemResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetVendorsParams {
  /** The Destiny Character ID of the character for whom we're getting vendor info. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Get currently available vendors from the list of vendors that can possibly have
 * rotating inventory. Note that this does not include things like preview vendors
 * and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use
 * their definitions as-is for those.
 */
export function getVendors(http: HttpClient, params: GetVendorsParams): Promise<ServerResponse<DestinyVendorsResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetVendorParams {
  /** The Destiny Character ID of the character for whom we're getting vendor info. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /** The Hash identifier of the Vendor to be returned. */
  vendorHash: number;
}

/** Get the details of a specific Vendor. */
export function getVendor(http: HttpClient, params: GetVendorParams): Promise<ServerResponse<DestinyVendorResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetPublicVendorsParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
}

/**
 * Get items available from vendors where the vendors have items for sale that are
 * common for everyone. If any portion of the Vendor's available inventory is
 * character or account specific, we will be unable to return their data from this
 * endpoint due to the way that available inventory is computed. As I am often
 * guilty of saying: 'It's a long story...'
 */
export function getPublicVendors(http: HttpClient, params: GetPublicVendorsParams): Promise<ServerResponse<DestinyPublicVendorsResponse>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2//Vendors/',
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

export interface GetCollectibleNodeDetailsParams {
  /**
   * The Destiny Character ID of the character for whom we're getting collectible
   * detail info.
   */
  characterId: string;
  /**
   * The hash identifier of the Presentation Node for whom we should return
   * collectible details. Details will only be returned for collectibles that are
   * direct descendants of this node.
   */
  collectiblePresentationNodeHash: number;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components?: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Given a Presentation Node that has Collectibles as direct descendants, this will
 * return item details about those descendants in the context of the requesting
 * character.
 */
export function getCollectibleNodeDetails(http: HttpClient, params: GetCollectibleNodeDetailsParams): Promise<ServerResponse<DestinyCollectibleNodeDetailResponse>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
    params: {
      components: params.components ? params.components.join(',') : undefined
    }
  });
}

/**
 * Transfer an item to/from your vault. You must have a valid Destiny account. You
 * must also pass BOTH a reference AND an instance ID if it's an instanced item.
 * itshappening.gif
 */
export function transferItem(http: HttpClient, body: DestinyItemTransferRequest): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/TransferItem/',
    body
  });
}

/**
 * Extract an item from the Postmaster, with whatever implications that may entail.
 * You must have a valid Destiny account. You must also pass BOTH a reference AND
 * an instance ID if it's an instanced item.
 */
export function pullFromPostmaster(http: HttpClient, body: DestinyPostmasterTransferRequest): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/PullFromPostmaster/',
    body
  });
}

/**
 * Equip an item. You must have a valid Destiny Account, and either be in a social
 * space, in orbit, or offline.
 */
export function equipItem(http: HttpClient, body: DestinyItemActionRequest): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItem/',
    body
  });
}

/**
 * Equip a list of items by itemInstanceIds. You must have a valid Destiny Account,
 * and either be in a social space, in orbit, or offline. Any items not found on
 * your character will be ignored.
 */
export function equipItems(http: HttpClient, body: DestinyItemSetActionRequest): Promise<ServerResponse<DestinyEquipItemResults>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/EquipItems/',
    body
  });
}

/** Set the Lock State for an instanced item. You must have a valid Destiny Account. */
export function setItemLockState(http: HttpClient, body: DestinyItemStateRequest): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/SetLockState/',
    body
  });
}

/**
 * Insert a plug into a socketed item. I know how it sounds, but I assure you it's
 * much more G-rated than you might be guessing. We haven't decided yet whether
 * this will be able to insert plugs that have side effects, but if we do it will
 * require special scope permission for an application attempting to do so. You
 * must have a valid Destiny Account, and either be in a social space, in orbit, or
 * offline. Request must include proof of permission for 'InsertPlugs' from the
 * account owner.
 */
export function insertSocketPlug(http: HttpClient, body: DestinyInsertPlugsActionRequest): Promise<ServerResponse<DestinyItemChangeResponse>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Actions/Items/InsertSocketPlug/',
    body
  });
}

export interface GetPostGameCarnageReportParams {
  /** The ID of the activity whose PGCR is requested. */
  activityId: string;
}

/** Gets the available post game carnage report for the activity ID. */
export function getPostGameCarnageReport(http: HttpClient, params: GetPostGameCarnageReportParams): Promise<ServerResponse<DestinyPostGameCarnageReportData>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/`
  });
}

export interface ReportOffensivePostGameCarnageReportPlayerParams {
  /** The ID of the activity where you ran into the brigand that you're reporting. */
  activityId: string;
}

/**
 * Report a player that you met in an activity that was engaging in ToS-violating
 * activities. Both you and the offending player must have played in the activityId
 * passed in. Please use this judiciously and only when you have strong suspicions
 * of violation, pretty please.
 */
export function reportOffensivePostGameCarnageReportPlayer(http: HttpClient, params: ReportOffensivePostGameCarnageReportPlayerParams, body: DestinyReportOffensePgcrRequest): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
    body
  });
}

/** Gets historical stats definitions. */
export function getHistoricalStatsDefinition(http: HttpClient): Promise<ServerResponse<{ [key: string]: DestinyHistoricalStatsDefinition }>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Stats/Definition/'
  });
}

export interface GetClanLeaderboardsParams {
  /** Group ID of the clan whose leaderboards you wish to fetch. */
  groupId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 */
export function getClanLeaderboards(http: HttpClient, params: GetClanLeaderboardsParams): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/Clans/${params.groupId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}

export interface GetClanAggregateStatsParams {
  /** Group ID of the clan whose leaderboards you wish to fetch. */
  groupId: string;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
}

/**
 * Gets aggregated stats for a clan using the same categories as the clan
 * leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough
 * edges. The schema is in final form, but there may be bugs that prevent desirable
 * operation.
 */
export function getClanAggregateStats(http: HttpClient, params: GetClanAggregateStatsParams): Promise<ServerResponse<DestinyClanAggregateStat[]>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/AggregateClanStats/${params.groupId}/`,
    params: {
      modes: params.modes
    }
  });
}

export interface GetLeaderboardsParams {
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been
 * implemented. It is being returned for a preview of future functionality, and for
 * public comment/suggestion/preparation.
 */
export function getLeaderboards(http: HttpClient, params: GetLeaderboardsParams): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}

export interface GetLeaderboardsForCharacterParams {
  /**
   * The specific character to build the leaderboard around for the provided Destiny
   * Membership.
   */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 */
export function getLeaderboardsForCharacter(http: HttpClient, params: GetLeaderboardsForCharacterParams): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}

export interface SearchDestinyEntitiesParams {
  /** Page number to return, starting with 0. */
  page?: number;
  /** The string to use when searching for Destiny entities. */
  searchTerm: string;
  /**
   * The type of entity for whom you would like results. These correspond to the
   * entity's definition contract name. For instance, if you are looking for items,
   * this property should be 'DestinyInventoryItemDefinition'.
   */
  type: string;
}

/** Gets a page list of Destiny items. */
export function searchDestinyEntities(http: HttpClient, params: SearchDestinyEntitiesParams): Promise<ServerResponse<DestinyEntitySearchResult>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Armory/Search/${params.type}/${params.searchTerm}/`,
    params: {
      page: params.page
    }
  });
}

export interface GetHistoricalStatsParams {
  /**
   * The id of the character to retrieve. You can omit this character ID or set it to
   * 0 to get aggregate stats across all characters.
   */
  characterId: string;
  /**
   * Last day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  dayend?: string;
  /**
   * First day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  daystart?: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Group of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * Game modes to return. See the documentation for DestinyActivityModeType for
   * valid values, and pass in string representation, comma delimited.
   */
  modes?: DestinyActivityModeType[];
  /**
   * Indicates a specific period type to return. Optional. May be: Daily, AllTime, or
   * Activity
   */
  periodType?: PeriodType;
}

/** Gets historical stats for indicated character. */
export function getHistoricalStats(http: HttpClient, params: GetHistoricalStatsParams): Promise<ServerResponse<{ [key: string]: DestinyHistoricalStatsByPeriod }>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    params: {
      dayend: params.dayend,
      daystart: params.daystart,
      groups: params.groups ? params.groups.join(',') : undefined,
      modes: params.modes ? params.modes.join(',') : undefined,
      periodType: params.periodType
    }
  });
}

export interface GetHistoricalStatsForAccountParams {
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Groups of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals.
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Gets aggregate historical stats organized around each character for a given
 * account.
 */
export function getHistoricalStatsForAccount(http: HttpClient, params: GetHistoricalStatsForAccountParams): Promise<ServerResponse<DestinyHistoricalStatsAccountResult>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    params: {
      groups: params.groups ? params.groups.join(',') : undefined
    }
  });
}

export interface GetActivityHistoryParams {
  /** The id of the character to retrieve. */
  characterId: string;
  /** Number of rows to return */
  count?: number;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * A filter for the activity mode to be returned. None returns all activities. See
   * the documentation for DestinyActivityModeType for valid values, and pass in
   * string representation.
   */
  mode?: DestinyActivityModeType;
  /** Page number to return, starting with 0. */
  page?: number;
}

/** Gets activity history stats for indicated character. */
export function getActivityHistory(http: HttpClient, params: GetActivityHistoryParams): Promise<ServerResponse<DestinyActivityHistoryResults>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    params: {
      count: params.count,
      mode: params.mode,
      page: params.page
    }
  });
}

export interface GetUniqueWeaponHistoryParams {
  /** The id of the character to retrieve. */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Gets details about unique weapon usage, including all exotic weapons. */
export function getUniqueWeaponHistory(http: HttpClient, params: GetUniqueWeaponHistoryParams): Promise<ServerResponse<DestinyHistoricalWeaponStatsData>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
  });
}

export interface GetDestinyAggregateActivityStatsParams {
  /** The specific character whose activities should be returned. */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Gets all activities the character has participated in together with aggregate
 * statistics for those activities.
 */
export function getDestinyAggregateActivityStats(http: HttpClient, params: GetDestinyAggregateActivityStatsParams): Promise<ServerResponse<DestinyAggregateActivityResults>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/AggregateActivityStats/`
  });
}

export interface GetPublicMilestoneContentParams {
  /** The identifier for the milestone to be returned. */
  milestoneHash: number;
}

/** Gets custom localized content for the milestone of the given hash, if it exists. */
export function getPublicMilestoneContent(http: HttpClient, params: GetPublicMilestoneContentParams): Promise<ServerResponse<DestinyMilestoneContent>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Milestones/${params.milestoneHash}/Content/`
  });
}

/** Gets public information about currently available Milestones. */
export function getPublicMilestones(http: HttpClient): Promise<ServerResponse<{ [key: number]: DestinyPublicMilestone }>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Destiny2/Milestones/'
  });
}

/** Initialize a request to perform an advanced write action. */
export function awaInitializeRequest(http: HttpClient, body: AwaPermissionRequested): Promise<ServerResponse<AwaInitializeResponse>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/Initialize/',
    body
  });
}

/**
 * Provide the result of the user interaction. Called by the Bungie Destiny App to
 * approve or reject a request.
 */
export function awaProvideAuthorizationResult(http: HttpClient, body: AwaUserResponse): Promise<ServerResponse<number>> {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Destiny2/Awa/AwaProvideAuthorizationResult/',
    body
  });
}

export interface AwaGetActionTokenParams {
  /** The identifier for the advanced write action request. */
  correlationId: string;
}

/** Returns the action token if user approves the request. */
export function awaGetActionToken(http: HttpClient, params: AwaGetActionTokenParams): Promise<ServerResponse<AwaAuthorizationResult>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Awa/GetActionToken/${params.correlationId}/`
  });
}
