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
  CoreSettingsConfiguration,
  CoreSystem,
  GlobalAlert
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

const API_BASE = "https://www.bungie.net/Platform/";

/** List of available localization cultures */
export function getAvailableLocales(http: HttpClient): Promise<ServerResponse<{ [key: string]: string }>> {
  return get(http, `${API_BASE}GetAvailableLocales/`);
}

/** Get the common settings used by the Bungie.Net environment. */
export function getCommonSettings(http: HttpClient): Promise<ServerResponse<CoreSettingsConfiguration>> {
  return get(http, `${API_BASE}Settings/`);
}

/**
 * Get the user-specific system overrides that should be respected alongside common
 * systems.
 */
export function getUserSystemOverrides(http: HttpClient): Promise<ServerResponse<{ [key: string]: CoreSystem }>> {
  return get(http, `${API_BASE}UserSystemOverrides/`);
}

export interface GetGlobalAlertsParams {
  /** Determines whether Streaming Alerts are included in results */
  includestreaming?: boolean;
}

/**
 * Gets any active global alert for display in the forum banners, help pages, etc.
 * Usually used for DOC alerts.
 */
export function getGlobalAlerts(http: HttpClient, params: GetGlobalAlertsParams): Promise<ServerResponse<GlobalAlert[]>> {
  return get(http, `${API_BASE}GlobalAlerts/`, {
    includestreaming: params.includestreaming
  });
}
