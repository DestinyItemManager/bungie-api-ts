/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.12.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { EmailSettings } from '../user/interfaces.js';
export interface CoreSettingsConfiguration {
  readonly environment: string;
  readonly systems: {
    [key: string]: CoreSystem;
  };
  readonly ignoreReasons: CoreSetting[];
  readonly forumCategories: CoreSetting[];
  readonly groupAvatars: CoreSetting[];
  readonly destinyMembershipTypes: CoreSetting[];
  readonly recruitmentPlatformTags: CoreSetting[];
  readonly recruitmentMiscTags: CoreSetting[];
  readonly recruitmentActivities: CoreSetting[];
  readonly userContentLocales: CoreSetting[];
  readonly systemContentLocales: CoreSetting[];
  readonly clanBannerDecals: CoreSetting[];
  readonly clanBannerDecalColors: CoreSetting[];
  readonly clanBannerGonfalons: CoreSetting[];
  readonly clanBannerGonfalonColors: CoreSetting[];
  readonly clanBannerGonfalonDetails: CoreSetting[];
  readonly clanBannerGonfalonDetailColors: CoreSetting[];
  readonly clanBannerStandards: CoreSetting[];
  readonly destiny2CoreSettings: Destiny2CoreSettings;
  readonly emailSettings: EmailSettings;
  readonly fireteamActivities: CoreSetting[];
}
export interface CoreSystem {
  readonly enabled: boolean;
  readonly parameters: {
    [key: string]: string;
  };
}
export interface CoreSetting {
  readonly identifier: string;
  readonly isDefault: boolean;
  readonly displayName: string;
  readonly summary: string;
  readonly imagePath: string;
  readonly childSettings: CoreSetting[];
}
export interface Destiny2CoreSettings {
  readonly collectionRootNode: number;
  readonly badgesRootNode: number;
  readonly recordsRootNode: number;
  readonly medalsRootNode: number;
  readonly metricsRootNode: number;
  readonly activeTriumphsRootNodeHash: number;
  readonly activeSealsRootNodeHash: number;
  readonly legacyTriumphsRootNodeHash: number;
  readonly legacySealsRootNodeHash: number;
  readonly medalsRootNodeHash: number;
  readonly exoticCatalystsRootNodeHash: number;
  readonly loreRootNodeHash: number;
  readonly currentRankProgressionHashes: number[];
  readonly undiscoveredCollectibleImage: string;
  readonly ammoTypeHeavyIcon: string;
  readonly ammoTypeSpecialIcon: string;
  readonly ammoTypePrimaryIcon: string;
  readonly currentSeasonalArtifactHash: number;
  readonly currentSeasonHash?: number;
  /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
  readonly seasonalChallengesPresentationNodeHash?: number;
  readonly futureSeasonHashes: number[];
  readonly pastSeasonHashes: number[];
}
export interface GlobalAlert {
  readonly AlertKey: string;
  readonly AlertHtml: string;
  readonly AlertTimestamp: string;
  readonly AlertLink: string;
  readonly AlertLevel: GlobalAlertLevel;
  readonly AlertType: GlobalAlertType;
  readonly StreamInfo: StreamInfo;
}
export declare const enum GlobalAlertLevel {
  Unknown = 0,
  Blue = 1,
  Yellow = 2,
  Red = 3,
}
export declare const enum GlobalAlertType {
  GlobalAlert = 0,
  StreamingAlert = 1,
}
export interface StreamInfo {
  readonly ChannelName: string;
}
