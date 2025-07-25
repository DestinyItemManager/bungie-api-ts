/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.21.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { BungieMembershipType, PagedQuery, PlatformErrorCodes } from '../common.js';
import { DestinyProgression } from '../destiny2/interfaces.js';
import { UserInfoCard, UserMembership } from '../user/interfaces.js';
export interface GroupUserInfoCard {
  /**
   * This will be the display name the clan server last saw the user as. If the
   * account is an active cross save override, this will be the display name to use.
   * Otherwise, this will match the displayName property.
   */
  readonly LastSeenDisplayName: string;
  /** The platform of the LastSeenDisplayName */
  readonly LastSeenDisplayNameType: BungieMembershipType;
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}
export interface GroupResponse {
  readonly detail: GroupV2;
  readonly founder: GroupMember;
  readonly alliedIds: string[];
  readonly parentGroup: GroupV2;
  readonly allianceStatus: GroupAllianceStatus;
  readonly groupJoinInviteCount: number;
  /**
   * A convenience property that indicates if every membership you (the current user)
   * have that is a part of this group are part of an account that is considered
   * inactive - for example, overridden accounts in Cross Save.
   */
  readonly currentUserMembershipsInactiveForDestiny: boolean;
  /**
   * This property will be populated if the authenticated user is a member of the
   * group. Note that because of account linking, a user can sometimes be part of a
   * clan more than once. As such, this returns the highest member type available.
   */
  readonly currentUserMemberMap: {
    [key in BungieMembershipType]: GroupMember;
  };
  /**
   * This property will be populated if the authenticated user is an applicant or has
   * an outstanding invitation to join. Note that because of account linking, a user
   * can sometimes be part of a clan more than once.
   */
  readonly currentUserPotentialMemberMap: {
    [key in BungieMembershipType]: GroupPotentialMember;
  };
}
export interface GroupV2 {
  readonly groupId: string;
  readonly name: string;
  readonly groupType: GroupType;
  readonly membershipIdCreated: string;
  readonly creationDate: string;
  readonly modificationDate: string;
  readonly about: string;
  readonly tags: string[];
  readonly memberCount: number;
  readonly isPublic: boolean;
  readonly isPublicTopicAdminOnly: boolean;
  readonly motto: string;
  readonly allowChat: boolean;
  readonly isDefaultPostPublic: boolean;
  readonly chatSecurity: ChatSecuritySetting;
  readonly locale: string;
  readonly avatarImageIndex: number;
  readonly homepage: GroupHomepage;
  readonly membershipOption: MembershipOption;
  readonly defaultPublicity: GroupPostPublicity;
  readonly theme: string;
  readonly bannerPath: string;
  readonly avatarPath: string;
  readonly conversationId: string;
  readonly enableInvitationMessagingForAdmins: boolean;
  readonly banExpireDate?: string;
  readonly features: GroupFeatures;
  readonly remoteGroupId?: string;
  readonly clanInfo: GroupV2ClanInfoAndInvestment;
}
export declare const enum GroupType {
  General = 0,
  Clan = 1,
}
export declare const enum ChatSecuritySetting {
  Group = 0,
  Admins = 1,
}
export declare const enum GroupHomepage {
  Wall = 0,
  Forum = 1,
  AllianceForum = 2,
}
export declare const enum MembershipOption {
  Reviewed = 0,
  Open = 1,
  Closed = 2,
}
export declare const enum GroupPostPublicity {
  Public = 0,
  Alliance = 1,
  Private = 2,
}
export interface GroupFeatures {
  readonly maximumMembers: number;
  /**
   * Maximum number of groups of this type a typical membership may join. For example,
   * a user may join about 50 General groups with their Bungie.net account. They may
   * join one clan per Destiny membership.
   */
  readonly maximumMembershipsOfGroupType: number;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly capabilities: Capabilities;
  readonly membershipTypes: BungieMembershipType[];
  /**
   * Minimum Member Level allowed to invite new members to group
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly invitePermissionOverride: boolean;
  /**
   * Minimum Member Level allowed to update group culture
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly updateCulturePermissionOverride: boolean;
  /**
   * Minimum Member Level allowed to host guided games
   *
   * Always Allowed: Founder, Acting Founder, Admin
   *
   * Allowed Overrides: None, Member, Beginner
   *
   * Default is Member for clans, None for groups, although this means nothing for
   * groups.
   */
  readonly hostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel;
  /**
   * Minimum Member Level allowed to update banner
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly updateBannerPermissionOverride: boolean;
  /**
   * Level to join a member at when accepting an invite, application, or joining an
   * open clan
   *
   * Default is Beginner.
   */
  readonly joinLevel: RuntimeGroupMemberType;
}
/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 */
export declare const enum Capabilities {
  None = 0,
  Leaderboards = 1,
  Callsign = 2,
  OptionalConversations = 4,
  ClanBanner = 8,
  D2InvestmentData = 16,
  Tags = 32,
  Alliances = 64,
}
/**
 * Used for setting the guided game permission level override (admins and founders
 * can always host guided games).
 */
export declare const enum HostGuidedGamesPermissionLevel {
  None = 0,
  Beginner = 1,
  Member = 2,
}
/**
 * The member levels used by all V2 Groups API. Individual group types use their
 * own mappings in their native storage (general uses BnetDbGroupMemberType and D2
 * clans use ClanMemberLevel), but they are all translated to this in the runtime
 * api. These runtime values should NEVER be stored anywhere, so the values can be
 * changed as necessary.
 */
export declare const enum RuntimeGroupMemberType {
  None = 0,
  Beginner = 1,
  Member = 2,
  Admin = 3,
  ActingFounder = 4,
  Founder = 5,
}
/** The same as GroupV2ClanInfo, but includes any investment data. */
export interface GroupV2ClanInfoAndInvestment {
  readonly d2ClanProgressions: {
    [key: number]: DestinyProgression;
  };
  readonly clanCallsign: string;
  readonly clanBannerData: ClanBanner;
}
export interface ClanBanner {
  readonly decalId: number;
  readonly decalColorId: number;
  readonly decalBackgroundColorId: number;
  readonly gonfalonId: number;
  readonly gonfalonColorId: number;
  readonly gonfalonDetailId: number;
  readonly gonfalonDetailColorId: number;
}
export interface GroupMember {
  readonly memberType: RuntimeGroupMemberType;
  readonly isOnline: boolean;
  readonly lastOnlineStatusChange: string;
  readonly groupId: string;
  readonly destinyUserInfo: GroupUserInfoCard;
  readonly bungieNetUserInfo: UserInfoCard;
  readonly joinDate: string;
}
export declare const enum GroupAllianceStatus {
  Unallied = 0,
  Parent = 1,
  Child = 2,
}
export interface GroupPotentialMember {
  readonly potentialStatus: GroupPotentialMemberStatus;
  readonly groupId: string;
  readonly destinyUserInfo: GroupUserInfoCard;
  readonly bungieNetUserInfo: UserInfoCard;
  readonly joinDate: string;
}
export declare const enum GroupPotentialMemberStatus {
  None = 0,
  Applicant = 1,
  Invitee = 2,
}
export declare const enum GroupDateRange {
  All = 0,
  PastDay = 1,
  PastWeek = 2,
  PastMonth = 3,
  PastYear = 4,
}
/**
 * NOTE: GroupQuery, as of Destiny 2, has essentially two totally different and
 * incompatible "modes".
 *
 * If you are querying for a group, you can pass any of the properties below.
 *
 * If you are querying for a Clan, you MUST NOT pass any of the following
 * properties (they must be null or undefined in your request, not just empty
 * string/default values):
 *
 * - groupMemberCountFilter - localeFilter - tagText
 *
 * If you pass these, you will get a useless InvalidParameters error.
 */
export interface GroupQuery {
  readonly name: string;
  readonly groupType: GroupType;
  readonly creationDate: GroupDateRange;
  readonly sortBy: GroupSortBy;
  readonly groupMemberCountFilter?: number;
  readonly localeFilter: string;
  readonly tagText: string;
  readonly itemsPerPage: number;
  readonly currentPage: number;
  readonly requestContinuationToken: string;
}
export interface GroupNameSearchRequest {
  readonly groupName: string;
  readonly groupType: GroupType;
}
export interface GroupEditAction {
  readonly name: string;
  readonly about: string;
  readonly motto: string;
  readonly theme: string;
  readonly avatarImageIndex?: number;
  readonly tags: string;
  readonly isPublic?: boolean;
  readonly membershipOption?: number;
  readonly isPublicTopicAdminOnly?: boolean;
  readonly allowChat?: boolean;
  readonly chatSecurity?: number;
  readonly callsign: string;
  readonly locale: string;
  readonly homepage?: number;
  readonly enableInvitationMessagingForAdmins?: boolean;
  readonly defaultPublicity?: number;
}
export interface GroupOptionsEditAction {
  /**
   * Minimum Member Level allowed to invite new members to group
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly InvitePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to update group culture
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly UpdateCulturePermissionOverride?: boolean;
  /**
   * Minimum Member Level allowed to host guided games
   *
   * Always Allowed: Founder, Acting Founder, Admin
   *
   * Allowed Overrides: None, Member, Beginner
   *
   * Default is Member for clans, None for groups, although this means nothing for
   * groups.
   */
  readonly HostGuidedGamePermissionOverride?: number;
  /**
   * Minimum Member Level allowed to update banner
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
   */
  readonly UpdateBannerPermissionOverride?: boolean;
  /**
   * Level to join a member at when accepting an invite, application, or joining an
   * open clan
   *
   * Default is Beginner.
   */
  readonly JoinLevel?: number;
}
export interface GroupOptionalConversationAddRequest {
  readonly chatName: string;
  readonly chatSecurity: ChatSecuritySetting;
}
export interface GroupOptionalConversationEditRequest {
  readonly chatEnabled?: boolean;
  readonly chatName: string;
  readonly chatSecurity?: number;
}
export interface GroupBanRequest {
  readonly comment: string;
  readonly length: IgnoreLength;
}
export interface GroupApplicationRequest {
  readonly message: string;
}
export interface GroupApplicationListRequest {
  readonly memberships: UserMembership[];
  readonly message: string;
}
export declare const enum GroupsForMemberFilter {
  All = 0,
  Founded = 1,
  NonFounded = 2,
}
export interface GroupTheme {
  readonly name: string;
  readonly folder: string;
  readonly description: string;
}
/**
 * A small infocard of group information, usually used for when a list of groups
 * are returned
 */
export interface GroupV2Card {
  readonly groupId: string;
  readonly name: string;
  readonly groupType: GroupType;
  readonly creationDate: string;
  readonly about: string;
  readonly motto: string;
  readonly memberCount: number;
  readonly locale: string;
  readonly membershipOption: MembershipOption;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   */
  readonly capabilities: Capabilities;
  readonly remoteGroupId?: string;
  readonly clanInfo: GroupV2ClanInfo;
  readonly avatarPath: string;
  readonly theme: string;
}
/**
 * This contract contains clan-specific group information. It does not include any
 * investment data.
 */
export interface GroupV2ClanInfo {
  readonly clanCallsign: string;
  readonly clanBannerData: ClanBanner;
}
export declare const enum GroupSortBy {
  Name = 0,
  Date = 1,
  Popularity = 2,
  Id = 3,
}
export interface GroupSearchResponse {
  readonly results: GroupV2Card[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupOptionalConversation {
  readonly groupId: string;
  readonly conversationId: string;
  readonly chatEnabled: boolean;
  readonly chatName: string;
  readonly chatSecurity: ChatSecuritySetting;
}
export interface SearchResultOfGroupMember {
  readonly results: GroupMember[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupMemberLeaveResult {
  readonly group: GroupV2;
  readonly groupDeleted: boolean;
}
export declare const enum IgnoreLength {
  None = 0,
  Week = 1,
  TwoWeeks = 2,
  ThreeWeeks = 3,
  Month = 4,
  ThreeMonths = 5,
  SixMonths = 6,
  Year = 7,
  Forever = 8,
  ThreeMinutes = 9,
  Hour = 10,
  ThirtyDays = 11,
}
export interface SearchResultOfGroupBan {
  readonly results: GroupBan[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupBan {
  readonly groupId: string;
  readonly lastModifiedBy: UserInfoCard;
  readonly createdBy: UserInfoCard;
  readonly dateBanned: string;
  readonly dateExpires: string;
  readonly comment: string;
  readonly bungieNetUserInfo: UserInfoCard;
  readonly destinyUserInfo: GroupUserInfoCard;
}
export interface SearchResultOfGroupEditHistory {
  readonly results: GroupEditHistory[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupEditHistory {
  readonly groupId: string;
  readonly name: string;
  readonly nameEditors?: string;
  readonly about: string;
  readonly aboutEditors?: string;
  readonly motto: string;
  readonly mottoEditors?: string;
  readonly clanCallsign: string;
  readonly clanCallsignEditors?: string;
  readonly editDate?: string;
  readonly groupEditors: UserInfoCard[];
}
export interface SearchResultOfGroupMemberApplication {
  readonly results: GroupMemberApplication[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupMemberApplication {
  readonly groupId: string;
  readonly creationDate: string;
  readonly resolveState: GroupApplicationResolveState;
  readonly resolveDate?: string;
  readonly resolvedByMembershipId?: string;
  readonly requestMessage: string;
  readonly resolveMessage: string;
  readonly destinyUserInfo: GroupUserInfoCard;
  readonly bungieNetUserInfo: UserInfoCard;
}
export declare const enum GroupApplicationResolveState {
  Unresolved = 0,
  Accepted = 1,
  Denied = 2,
  Rescinded = 3,
}
export interface EntityActionResult {
  readonly entityId: string;
  readonly result: PlatformErrorCodes;
}
export interface GetGroupsForMemberResponse {
  /**
   * A convenience property that indicates if every membership this user has that is
   * a part of this group are part of an account that is considered inactive - for
   * example, overridden accounts in Cross Save.
   *
   * The key is the Group ID for the group being checked, and the value is true if
   * the users' memberships for that group are all inactive.
   */
  readonly areAllMembershipsInactive: {
    [key: string]: boolean;
  };
  readonly results: GroupMembership[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupMembership {
  readonly member: GroupMember;
  readonly group: GroupV2;
}
export interface GroupMembershipSearchResponse {
  readonly results: GroupMembership[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupPotentialMembershipSearchResponse {
  readonly results: GroupPotentialMembership[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}
export interface GroupPotentialMembership {
  readonly member: GroupPotentialMember;
  readonly group: GroupV2;
}
export interface GroupApplicationResponse {
  readonly resolution: GroupApplicationResolveState;
}
