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
  ForumPostSortEnum,
  ForumRecruitmentDetail,
  ForumTopicsCategoryFiltersEnum,
  ForumTopicsQuickDateEnum,
  ForumTopicsSortEnum,
  PostSearchResponse
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';
import {
  TagResponse
} from '../platform.js';

const API_BASE = "https://www.bungie.net/Platform/Forum/";

export interface GetTopicsPagedParams {
  /** A category filter */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /** The group, if any. */
  group: string;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
   */
  locales?: string;
  /** Zero paged page number */
  page: number;
  /** Unused */
  pageSize: number;
  /** A date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
  /** The tags to search, if any. */
  tagstring?: string;
}

/** Get topics from any forum. */
export function getTopicsPaged(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetTopicsPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.locales !== undefined) { strParams.locales = params.locales; }
  if (params.tagstring !== undefined) { strParams.tagstring = params.tagstring; }
  return get(http, `${API_BASE}GetTopicsPaged/${params.page}/${params.pageSize}/${params.group}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`, strParams);
}

export interface GetCoreTopicsPagedParams {
  /** The category filter. */
  categoryFilter: ForumTopicsCategoryFiltersEnum;
  /**
   * Comma seperated list of locales posts must match to return in the result list.
   * Default 'en'
   */
  locales?: string;
  /** Zero base page */
  page: number;
  /** The date filter. */
  quickDate: ForumTopicsQuickDateEnum;
  /** The sort mode. */
  sort: ForumTopicsSortEnum;
}

/** Gets a listing of all topics marked as part of the core group. */
export function getCoreTopicsPaged(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetCoreTopicsPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.locales !== undefined) { strParams.locales = params.locales; }
  return get(http, `${API_BASE}GetCoreTopicsPaged/${params.page}/${params.sort}/${params.quickDate}/${params.categoryFilter}/`, strParams);
}

export interface GetPostsThreadedPagedParams {
  getParentPost: boolean;
  page: number;
  pageSize: number;
  parentPostId: string;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
}

/**
 * Returns a thread of posts at the given parent, optionally returning replies to
 * those posts as well as the original parent.
 */
export function getPostsThreadedPaged(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetPostsThreadedPagedParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.showbanned !== undefined) { strParams.showbanned = params.showbanned; }
  return get(http, `${API_BASE}GetPostsThreadedPaged/${params.parentPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.getParentPost}/${params.rootThreadMode}/${params.sortMode}/`, strParams);
}

export interface GetPostsThreadedPagedFromChildParams {
  childPostId: string;
  page: number;
  pageSize: number;
  replySize: number;
  rootThreadMode: boolean;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
  sortMode: ForumPostSortEnum;
}

/**
 * Returns a thread of posts starting at the topicId of the input childPostId,
 * optionally returning replies to those posts as well as the original parent.
 */
export function getPostsThreadedPagedFromChild(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetPostsThreadedPagedFromChildParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.showbanned !== undefined) { strParams.showbanned = params.showbanned; }
  return get(http, `${API_BASE}GetPostsThreadedPagedFromChild/${params.childPostId}/${params.page}/${params.pageSize}/${params.replySize}/${params.rootThreadMode}/${params.sortMode}/`, strParams);
}

export interface GetPostAndParentParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}

/** Returns the post specified and its immediate parent. */
export function getPostAndParent(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetPostAndParentParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.showbanned !== undefined) { strParams.showbanned = params.showbanned; }
  return get(http, `${API_BASE}GetPostAndParent/${params.childPostId}/`, strParams);
}

export interface GetPostAndParentAwaitingApprovalParams {
  childPostId: string;
  /** If this value is not null or empty, banned posts are requested to be returned */
  showbanned?: string;
}

/**
 * Returns the post specified and its immediate parent of posts that are awaiting
 * approval.
 */
export function getPostAndParentAwaitingApproval(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetPostAndParentAwaitingApprovalParams): Promise<ServerResponse<PostSearchResponse>> {
  const strParams: Record<string, string> = {};
  if (params.showbanned !== undefined) { strParams.showbanned = params.showbanned; }
  return get(http, `${API_BASE}GetPostAndParentAwaitingApproval/${params.childPostId}/`, strParams);
}

export interface GetTopicForContentParams {
  contentId: string;
}

/** Gets the post Id for the given content item's comments, if it exists. */
export function getTopicForContent(http: HttpClient<ServerResponse<string>>, params: GetTopicForContentParams): Promise<ServerResponse<string>> {
  return get(http, `${API_BASE}GetTopicForContent/${params.contentId}/`);
}

export interface GetForumTagSuggestionsParams {
  /** The partial tag input to generate suggestions from. */
  partialtag?: string;
}

/**
 * Gets tag suggestions based on partial text entry, matching them with other tags
 * previously used in the forums.
 */
export function getForumTagSuggestions(http: HttpClient<ServerResponse<TagResponse[]>>, params: GetForumTagSuggestionsParams): Promise<ServerResponse<TagResponse[]>> {
  const strParams: Record<string, string> = {};
  if (params.partialtag !== undefined) { strParams.partialtag = params.partialtag; }
  return get(http, `${API_BASE}GetForumTagSuggestions/`, strParams);
}

export interface GetPollParams {
  /** The post id of the topic that has the poll. */
  topicId: string;
}

/** Gets the specified forum poll. */
export function getPoll(http: HttpClient<ServerResponse<PostSearchResponse>>, params: GetPollParams): Promise<ServerResponse<PostSearchResponse>> {
  return get(http, `${API_BASE}Poll/${params.topicId}/`);
}

/**
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 */
export function getRecruitmentThreadSummaries(http: HttpClient<ServerResponse<ForumRecruitmentDetail[]>>, body: string[]): Promise<ServerResponse<ForumRecruitmentDetail[]>> {
    return post(http, `${API_BASE}Recruit/Summaries/`, body);
}
