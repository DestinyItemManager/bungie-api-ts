export const DestinyProgressionScope = {
  Account: 0,
  Character: 1,
  Clan: 2,
  Item: 3,
  ImplicitFromEquipment: 4,
  Mapped: 5,
  MappedAggregate: 6,
  MappedStat: 7,
  MappedUnlockValue: 8,
};
export const DestinyProgressionStepDisplayEffect = { None: 0, Character: 1, Item: 2 };
export const DestinyScope = { Profile: 0, Character: 1 };
export const DestinyPresentationNodeType = {
  Default: 0,
  Category: 1,
  Collectibles: 2,
  Records: 3,
  Metric: 4,
};
export const DestinyGatingScope = {
  None: 0,
  Global: 1,
  Clan: 2,
  Profile: 3,
  Character: 4,
  Item: 5,
  AssumedWorstCase: 6,
};
export const DestinyActivityModeType = {
  None: 0,
  Story: 2,
  Strike: 3,
  Raid: 4,
  AllPvP: 5,
  Patrol: 6,
  AllPvE: 7,
  Reserved9: 9,
  Control: 10,
  Reserved11: 11,
  Clash: 12,
  Reserved13: 13,
  CrimsonDoubles: 15,
  Nightfall: 16,
  HeroicNightfall: 17,
  AllStrikes: 18,
  IronBanner: 19,
  Reserved20: 20,
  Reserved21: 21,
  Reserved22: 22,
  Reserved24: 24,
  AllMayhem: 25,
  Reserved26: 26,
  Reserved27: 27,
  Reserved28: 28,
  Reserved29: 29,
  Reserved30: 30,
  Supremacy: 31,
  PrivateMatchesAll: 32,
  Survival: 37,
  Countdown: 38,
  TrialsOfTheNine: 39,
  Social: 40,
  TrialsCountdown: 41,
  TrialsSurvival: 42,
  IronBannerControl: 43,
  IronBannerClash: 44,
  IronBannerSupremacy: 45,
  ScoredNightfall: 46,
  ScoredHeroicNightfall: 47,
  Rumble: 48,
  AllDoubles: 49,
  Doubles: 50,
  PrivateMatchesClash: 51,
  PrivateMatchesControl: 52,
  PrivateMatchesSupremacy: 53,
  PrivateMatchesCountdown: 54,
  PrivateMatchesSurvival: 55,
  PrivateMatchesMayhem: 56,
  PrivateMatchesRumble: 57,
  HeroicAdventure: 58,
  Showdown: 59,
  Lockdown: 60,
  Scorched: 61,
  ScorchedTeam: 62,
  Gambit: 63,
  AllPvECompetitive: 64,
  Breakthrough: 65,
  BlackArmoryRun: 66,
  Salvage: 67,
  IronBannerSalvage: 68,
  PvPCompetitive: 69,
  PvPQuickplay: 70,
  ClashQuickplay: 71,
  ClashCompetitive: 72,
  ControlQuickplay: 73,
  ControlCompetitive: 74,
  GambitPrime: 75,
  Reckoning: 76,
  Menagerie: 77,
  VexOffensive: 78,
  NightmareHunt: 79,
  Elimination: 80,
  Momentum: 81,
  Dungeon: 82,
  Sundial: 83,
  TrialsOfOsiris: 84,
};
export const DestinyActivityModeCategory = { None: 0, PvE: 1, PvP: 2, PvECompetitive: 3 };
export const ActivityGraphNodeHighlightType = {
  None: 0,
  Normal: 1,
  Hyper: 2,
  Comet: 3,
  RiseOfIron: 4,
};
export const DestinyGraphNodeState = {
  Hidden: 0,
  Visible: 1,
  Teaser: 2,
  Incomplete: 3,
  Completed: 4,
};
export const BucketScope = { Character: 0, Account: 1 };
export const BucketCategory = { Invisible: 0, Item: 1, Currency: 2, Equippable: 3, Ignored: 4 };
export const ItemLocation = { Unknown: 0, Inventory: 1, Vault: 2, Vendor: 3, Postmaster: 4 };
export const DestinyItemSubType = {
  None: 0,
  Crucible: 1,
  Vanguard: 2,
  Exotic: 5,
  AutoRifle: 6,
  Shotgun: 7,
  Machinegun: 8,
  HandCannon: 9,
  RocketLauncher: 10,
  FusionRifle: 11,
  SniperRifle: 12,
  PulseRifle: 13,
  ScoutRifle: 14,
  Crm: 16,
  Sidearm: 17,
  Sword: 18,
  Mask: 19,
  Shader: 20,
  Ornament: 21,
  FusionRifleLine: 22,
  GrenadeLauncher: 23,
  SubmachineGun: 24,
  TraceRifle: 25,
  HelmetArmor: 26,
  GauntletsArmor: 27,
  ChestArmor: 28,
  LegArmor: 29,
  ClassArmor: 30,
  Bow: 31,
  DummyRepeatableBounty: 32,
};
export const VendorDisplayCategorySortOrder = { Default: 0, SortByTier: 1 };
export const DestinyVendorInteractionRewardSelection = { None: 0, One: 1, All: 2 };
export const DestinyVendorReplyType = { Accept: 0, Decline: 1, Complete: 2 };
export const VendorInteractionType = {
  Unknown: 0,
  Undefined: 1,
  QuestComplete: 2,
  QuestContinue: 3,
  ReputationPreview: 4,
  RankUpReward: 5,
  TokenTurnIn: 6,
  QuestAccept: 7,
  ProgressTab: 8,
  End: 9,
  Start: 10,
};
export const DestinyItemSortType = { ItemId: 0, Timestamp: 1, StackSize: 2 };
export const DestinyVendorItemRefundPolicy = {
  NotRefundable: 0,
  DeletesItem: 1,
  RevokesLicense: 2,
};
export const SocketTypeActionType = { InsertPlug: 0, InfuseItem: 1, ReinitializeSocket: 2 };
export const DestinySocketCategoryStyle = {
  Unknown: 0,
  Reusable: 1,
  Consumable: 2,
  Unlockable: 3,
  Intrinsic: 4,
  EnergyMeter: 5,
  LargePerk: 6,
  Abilities: 7,
  Supers: 8,
};
export const DestinySocketVisibility = {
  Visible: 0,
  Hidden: 1,
  HiddenWhenEmpty: 2,
  HiddenIfNoPlugsAvailable: 3,
};
export const DestinyActivityNavPointType = {
  Inactive: 0,
  PrimaryObjective: 1,
  SecondaryObjective: 2,
  TravelObjective: 3,
  PublicEventObjective: 4,
  AmmoCache: 5,
  PointTypeFlag: 6,
  CapturePoint: 7,
  DefensiveEncounter: 8,
  GhostInteraction: 9,
  KillAi: 10,
  QuestItem: 11,
  PatrolMission: 12,
  Incoming: 13,
  ArenaObjective: 14,
  AutomationHint: 15,
  TrackedQuest: 16,
};
export const DestinyUnlockValueUIStyle = {
  Automatic: 0,
  Fraction: 1,
  Checkbox: 2,
  Percentage: 3,
  DateTime: 4,
  FractionFloat: 5,
  Integer: 6,
  TimeDuration: 7,
  Hidden: 8,
  Multiplier: 9,
  GreenPips: 10,
  RedPips: 11,
  ExplicitPercentage: 12,
  RawFloat: 13,
};
export const DamageType = { None: 0, Kinetic: 1, Arc: 2, Thermal: 3, Void: 4, Raid: 5, Stasis: 6 };
export const DestinyTalentNodeStepWeaponPerformances = {
  None: 0,
  RateOfFire: 1,
  Damage: 2,
  Accuracy: 4,
  Range: 8,
  Zoom: 16,
  Recoil: 32,
  Ready: 64,
  Reload: 128,
  HairTrigger: 256,
  AmmoAndMagazine: 512,
  TrackingAndDetonation: 1024,
  ShotgunSpread: 2048,
  ChargeTime: 4096,
  All: 8191,
};
export const DestinyTalentNodeStepImpactEffects = {
  None: 0,
  ArmorPiercing: 1,
  Ricochet: 2,
  Flinch: 4,
  CollateralDamage: 8,
  Disorient: 16,
  HighlightTarget: 32,
  All: 63,
};
export const DestinyTalentNodeStepGuardianAttributes = {
  None: 0,
  Stats: 1,
  Shields: 2,
  Health: 4,
  Revive: 8,
  AimUnderFire: 16,
  Radar: 32,
  Invisibility: 64,
  Reputations: 128,
  All: 255,
};
export const DestinyTalentNodeStepLightAbilities = {
  None: 0,
  Grenades: 1,
  Melee: 2,
  MovementModes: 4,
  Orbs: 8,
  SuperEnergy: 16,
  SuperMods: 32,
  All: 63,
};
export const DestinyTalentNodeStepDamageTypes = {
  None: 0,
  Kinetic: 1,
  Arc: 2,
  Solar: 4,
  Void: 8,
  All: 15,
};
export const DestinyObjectiveGrantStyle = { WhenIncomplete: 0, WhenComplete: 1, Always: 2 };
export const DestinyStatAggregationType = { CharacterAverage: 0, Character: 1, Item: 2 };
export const DestinyStatCategory = { Gameplay: 0, Weapon: 1, Defense: 2, Primary: 3 };
export const DestinyRecordValueStyle = {
  Integer: 0,
  Percentage: 1,
  Milliseconds: 2,
  Boolean: 3,
  Decimal: 4,
};
export const DestinyGender = { Male: 0, Female: 1, Unknown: 2 };
export const DestinyRecordToastStyle = {
  None: 0,
  Record: 1,
  Lore: 2,
  Badge: 3,
  MetaRecord: 4,
  MedalComplete: 5,
};
export const DestinyPresentationDisplayStyle = {
  Category: 0,
  Badge: 1,
  Medals: 2,
  Collectible: 3,
  Record: 4,
};
export const DestinyPresentationScreenStyle = { Default: 0, CategorySets: 1, Badge: 2 };
export const TierType = {
  Unknown: 0,
  Currency: 1,
  Basic: 2,
  Common: 3,
  Rare: 4,
  Superior: 5,
  Exotic: 6,
};
export const EquippingItemBlockAttributes = { None: 0, EquipOnAcquire: 1 };
export const DestinyAmmunitionType = { None: 0, Primary: 1, Special: 2, Heavy: 3, Unknown: 4 };
export const DestinyRewardSourceCategory = { None: 0, Activity: 1, Vendor: 2, Aggregate: 3 };
export const PlugUiStyles = { None: 0, Masterwork: 1 };
export const PlugAvailabilityMode = {
  Normal: 0,
  UnavailableIfSocketContainsMatchingPlugCategory: 1,
  AvailableIfSocketContainsMatchingPlugCategory: 2,
};
export const DestinyEnergyType = { Any: 0, Arc: 1, Thermal: 2, Void: 3, Ghost: 4, Subclass: 5 };
export const SocketPlugSources = {
  None: 0,
  InventorySourced: 1,
  ReusablePlugItems: 2,
  ProfilePlugSet: 4,
  CharacterPlugSet: 8,
};
export const ItemPerkVisibility = { Visible: 0, Disabled: 1, Hidden: 2 };
export const DestinyBreakerType = { None: 0, ShieldPiercing: 1, Disruption: 2, Stagger: 3 };
export const DestinyItemType = {
  None: 0,
  Currency: 1,
  Armor: 2,
  Weapon: 3,
  Message: 7,
  Engram: 8,
  Consumable: 9,
  ExchangeMaterial: 10,
  MissionReward: 11,
  QuestStep: 12,
  QuestStepComplete: 13,
  Emblem: 14,
  Quest: 15,
  Subclass: 16,
  ClanBanner: 17,
  Aura: 18,
  Mod: 19,
  Dummy: 20,
  Ship: 21,
  Vehicle: 22,
  Emote: 23,
  Ghost: 24,
  Package: 25,
  Bounty: 26,
  Wrapper: 27,
  SeasonalArtifact: 28,
  Finisher: 29,
};
export const DestinyClass = { Titan: 0, Hunter: 1, Warlock: 2, Unknown: 3 };
export const SpecialItemType = {
  None: 0,
  SpecialCurrency: 1,
  Armor: 8,
  Weapon: 9,
  Engram: 23,
  Consumable: 24,
  ExchangeMaterial: 25,
  MissionReward: 27,
  Currency: 29,
};
export const DestinyProgressionRewardItemAcquisitionBehavior = {
  Instant: 0,
  PlayerClaimRequired: 1,
};
export const DestinyProgressionRewardItemState = {
  None: 0,
  Invisible: 1,
  Earned: 2,
  Claimed: 4,
  ClaimAllowed: 8,
};
export const DestinyComponentType = {
  None: 0,
  Profiles: 100,
  VendorReceipts: 101,
  ProfileInventories: 102,
  ProfileCurrencies: 103,
  ProfileProgression: 104,
  PlatformSilver: 105,
  Characters: 200,
  CharacterInventories: 201,
  CharacterProgressions: 202,
  CharacterRenderData: 203,
  CharacterActivities: 204,
  CharacterEquipment: 205,
  ItemInstances: 300,
  ItemObjectives: 301,
  ItemPerks: 302,
  ItemRenderData: 303,
  ItemStats: 304,
  ItemSockets: 305,
  ItemTalentGrids: 306,
  ItemCommonData: 307,
  ItemPlugStates: 308,
  ItemPlugObjectives: 309,
  ItemReusablePlugs: 310,
  Vendors: 400,
  VendorCategories: 401,
  VendorSales: 402,
  Kiosks: 500,
  CurrencyLookups: 600,
  PresentationNodes: 700,
  Collectibles: 800,
  Records: 900,
  Transitory: 1000,
  Metrics: 1100,
};
export const DestinyVendorFilter = { None: 0, ApiPurchasable: 1 };
export const DestinyStatsGroupType = {
  None: 0,
  General: 1,
  Weapons: 2,
  Medals: 3,
  ReservedGroups: 100,
  Leaderboard: 101,
  Activity: 102,
  UniqueWeapon: 103,
  Internal: 104,
};
export const PeriodType = { None: 0, Daily: 1, AllTime: 2, Activity: 3 };
export const ItemBindStatus = {
  NotBound: 0,
  BoundToCharacter: 1,
  BoundToAccount: 2,
  BoundToGuild: 3,
};
export const TransferStatuses = {
  CanTransfer: 0,
  ItemIsEquipped: 1,
  NotTransferrable: 2,
  NoRoomInDestination: 4,
};
export const ItemState = { None: 0, Locked: 1, Tracked: 2, Masterwork: 4 };
export const ComponentPrivacySetting = { None: 0, Public: 1, Private: 2 };
export const DestinyGameVersions = {
  None: 0,
  Destiny2: 1,
  DLC1: 2,
  DLC2: 4,
  Forsaken: 8,
  YearTwoAnnualPass: 16,
  Shadowkeep: 32,
};
export const DestinyPresentationNodeState = { None: 0, Invisible: 1, Obscured: 2 };
export const DestinyRecordState = {
  None: 0,
  RecordRedeemed: 1,
  RewardUnavailable: 2,
  ObjectiveNotCompleted: 4,
  Obscured: 8,
  Invisible: 16,
  EntitlementUnowned: 32,
  CanEquipTitle: 64,
};
export const DestinyCollectibleState = {
  None: 0,
  NotAcquired: 1,
  Obscured: 2,
  Invisible: 4,
  CannotAffordMaterialRequirements: 8,
  InventorySpaceUnavailable: 16,
  UniquenessViolation: 32,
  PurchaseDisabled: 64,
};
export const DestinyPartyMemberStates = {
  None: 0,
  FireteamMember: 1,
  PosseMember: 2,
  GroupMember: 4,
  PartyLeader: 8,
};
export const DestinyGamePrivacySetting = {
  Open: 0,
  ClanAndFriendsOnly: 1,
  FriendsOnly: 2,
  InvitationOnly: 3,
  Closed: 4,
};
export const DestinyJoinClosedReasons = {
  None: 0,
  InMatchmaking: 1,
  Loading: 2,
  SoloMode: 4,
  InternalReasons: 8,
  DisallowedByGameState: 16,
  Offline: 32768,
};
export const DestinyRace = { Human: 0, Awoken: 1, Exo: 2, Unknown: 3 };
export const DestinyMilestoneDisplayPreference = {
  MilestoneDefinition: 0,
  CurrentQuestSteps: 1,
  CurrentActivityChallenges: 2,
};
export const DestinyMilestoneType = {
  Unknown: 0,
  Tutorial: 1,
  OneTime: 2,
  Weekly: 3,
  Daily: 4,
  Special: 5,
};
export const DestinyActivityDifficultyTier = {
  Trivial: 0,
  Easy: 1,
  Normal: 2,
  Challenging: 3,
  Hard: 4,
  Brave: 5,
  AlmostImpossible: 6,
  Impossible: 7,
};
export const EquipFailureReason = {
  None: 0,
  ItemUnequippable: 1,
  ItemUniqueEquipRestricted: 2,
  ItemFailedUnlockCheck: 4,
  ItemFailedLevelCheck: 8,
  ItemNotOnCharacter: 16,
};
export const DestinyTalentNodeState = {
  Invalid: 0,
  CanUpgrade: 1,
  NoPoints: 2,
  NoPrerequisites: 3,
  NoSteps: 4,
  NoUnlock: 5,
  NoMaterial: 6,
  NoGridLevel: 7,
  SwappingLocked: 8,
  MustSwap: 9,
  Complete: 10,
  Unknown: 11,
  CreationOnly: 12,
  Hidden: 13,
};
export const VendorItemStatus = {
  Success: 0,
  NoInventorySpace: 1,
  NoFunds: 2,
  NoProgression: 4,
  NoUnlock: 8,
  NoQuantity: 16,
  OutsidePurchaseWindow: 32,
  NotAvailable: 64,
  UniquenessViolation: 128,
  UnknownError: 256,
  AlreadySelling: 512,
  Unsellable: 1024,
  SellingInhibited: 2048,
  AlreadyOwned: 4096,
  DisplayOnly: 8192,
};
export const DestinyVendorItemState = {
  None: 0,
  Incomplete: 1,
  RewardAvailable: 2,
  Complete: 4,
  New: 8,
  Featured: 16,
  Ending: 32,
  OnSale: 64,
  Owned: 128,
  WideView: 256,
  NexusAttention: 512,
  SetDiscount: 1024,
  PriceDrop: 2048,
  DailyOffer: 4096,
  Charity: 8192,
};
export const DestinySocketArrayType = { Default: 0, Intrinsic: 1 };
export const DestinyStatsCategoryType = {
  None: 0,
  Kills: 1,
  Assists: 2,
  Deaths: 3,
  Criticals: 4,
  KDa: 5,
  KD: 6,
  Score: 7,
  Entered: 8,
  TimePlayed: 9,
  MedalWins: 10,
  MedalGame: 11,
  MedalSpecialKills: 12,
  MedalSprees: 13,
  MedalMultiKills: 14,
  MedalAbilities: 15,
};
export const UnitType = {
  None: 0,
  Count: 1,
  PerGame: 2,
  Seconds: 3,
  Points: 4,
  Team: 5,
  Distance: 6,
  Percent: 7,
  Ratio: 8,
  Boolean: 9,
  WeaponType: 10,
  Standing: 11,
  Milliseconds: 12,
  CompletionReason: 13,
};
export const AwaType = { None: 0, InsertPlugs: 1 };
export const AwaUserSelection = { None: 0, Rejected: 1, Approved: 2 };
export const AwaResponseReason = { None: 0, Answered: 1, TimedOut: 2, Replaced: 3 };
