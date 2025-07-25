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
import { HttpClient } from '../http.js';
import {
  SearchResultOfTrendingEntry,
  TrendingCategories,
  TrendingDetail,
  TrendingEntryType,
} from './interfaces.js';
import { ServerResponse } from '../common.js';
/**
 * Returns trending items for Bungie.net, collapsed into the first page of items
 * per category. For pagination within a category, call GetTrendingCategory.
 */
export declare function getTrendingCategories(
  http: HttpClient
): Promise<ServerResponse<TrendingCategories>>;
export interface GetTrendingCategoryParams {
  /** The ID of the category for whom you want additional results. */
  categoryId: string;
  /** The page # of results to return. */
  pageNumber: number;
}
/** Returns paginated lists of trending items for a category. */
export declare function getTrendingCategory(
  http: HttpClient,
  params: GetTrendingCategoryParams
): Promise<ServerResponse<SearchResultOfTrendingEntry>>;
export interface GetTrendingEntryDetailParams {
  /** The identifier for the entity to be returned. */
  identifier: string;
  /** The type of entity to be returned. */
  trendingEntryType: TrendingEntryType;
}
/**
 * Returns the detailed results for a specific trending entry. Note that trending
 * entries are uniquely identified by a combination of *both* the TrendingEntryType
 * *and* the identifier: the identifier alone is not guaranteed to be globally
 * unique.
 */
export declare function getTrendingEntryDetail(
  http: HttpClient,
  params: GetTrendingEntryDetailParams
): Promise<ServerResponse<TrendingDetail>>;
