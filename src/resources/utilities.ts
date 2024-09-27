import { Upd } from "@spt/models/eft/common/tables/IItem";

export interface ITraderDetails {
    _id: string;
    avatar: string;
    [key: string]: any;
}

export interface Item {
    _id: string;
    _tpl: string;
    parentId?: string;
    slotId?: string;
    upd?: Upd;
}
  
export interface Preset {
    _changeWeaponName: boolean;
    _encyclopedia?: string;
    _id: string;
    _items: Item[];
    _name: string;
    _parent: string;
    _type: string;
}
export enum TraderIDs {
    MECHANIC = "5a7c2eca46aef81a7ca2145d",
    SKIER = "58330581ace78e27b8b10cee",
    PEACEKEEPER = "5935c25fb3acc3127c3d8cd9",
    THERAPIST = "54cb57776803fa99248b456e",
    PRAPOR = "54cb50c76803fa8b248b4571",
    JAEGAR = "5c0647fdd443bc2504c2d371",
    RAGMAN = "5ac3b934156ae10c4430e83c",
    FENCE = "579dc571d53a0658a154fbec",
    FROSTBITE = "66ef9505bede6c894d6b47bd"
}

export enum CurrencyIDs {
    ROUBLES = "5449016a4bdc2d6f028b456f",
    EUROS = "569668774bdc2da2298b4568",
    DOLLARS = "5696686a4bdc2da3298b456a"
}
    
export enum AllBotTypes {
    ARENA_FIGHTER  = "arenafighter",
    ARENA_FIGHTER_EVENT = "arenafighterevent",
    ASSAULT = "assault",
    BEAR = "bear",
    RESHALA = "bossbully",
    GLUHAR = "bossgluhar",
    KILLA = "bosskilla",
    KNIGHT = "bossknight",
    SHTURMAN = "bosskojaniy",
    SANITAR = "bosssanitar",
    TAGILLA = "bosstagilla",
    ZRYACHIY = "bosszryachiy",
    CRAZYASSAULTEVENT = "crazyassaultevent",
    CURSEDASSAULT = "cursedassault",
    EXUSEC = "exusec",
    FOLLOWER_BIGPIPE = "followerbigpipe",
    FOLLOWER_BIRDEYE = "followerbirdeye",
    FOLLOWER_RESHALA = "followerbully",
    FOLLOWER_GLUHAR_ASSAULT = "followergluharassault",
    FOLLOWER_GLUHAR_SCOUT = "followergluharscout",
    FOLLOWER_GLUHAR_SECURITY = "followergluharsecurity",
    FOLLOWER_GLUHAR_SNIPER = "followergluharsnipe",
    FOLLOWER_SHTURMAN = "followerkojaniy",
    FOLLOWER_SANITAR = "followersanitar",
    FOLLOWER_TAGILLA = "followertagilla",
    FOLLOWER_ZRYACHIY = "followerzryachiy",
    GIFTER = "gifter",
    MARKSMAN = "marksman",
    PMC = "pmcbot",
    CULTIST_PRIEST = "sectantpriest",
    CULTIST_WARRIOR = "sectantwarrior",
    USEC = "usec"
}

export enum InventorySlots {
    FIRST_PRIMARY_WEAPON = "55d729c64bdc2d89028b4570",
    SECOND_PRIMARY_WEAPON = "55d729d14bdc2d86028b456e",
    HOLSTER = "55d729d84bdc2de3098b456b",
    SCABBARD = "55d729e34bdc2d1b198b456d",
    FACE_COVER = "55d729e84bdc2d8a028b4569",
    HEADWEAR = "55d729ef4bdc2d3a168b456c",
    TACTICAL_VEST = "55d729f74bdc2d87028b456e",
    SECURED_CONTAINER = "55d72a054bdc2d88028b456e",
    BACKPACK = "55d72a104bdc2d89028b4571",
    ARMOR_VEST = "55d72a194bdc2d86028b456f",
    POCKETS = "55d72a274bdc2de3098b456c",
    EARPIECE = "5665b7164bdc2d144c8b4570",
    DOG_TAG = "59f0be1e86f77453be490939",
    EYEWEAR = "5a0ad9313f1241000e072755",
    ARM_BAND = "5b3f583786f77411d552fb2b"
}

export enum Stashes {
    LEVEL_1 = "566abbc34bdc2d92178b4576",
    LEVEL_2 = "5811ce572459770cba1a34ea",
    LEVEL_3 = "5811ce662459770f6f490f32",
    LEVEL_4 = "5811ce772459770e9e5f9532"
}

export interface QuestZone {
    zoneId: string;
    zoneName: string;
    zoneType: string;
    flareType?: string;
    zoneLocation: string;
    position: {
        x: string;
        y: string;
        z: string;
    };
    rotation: {
        x: string;
        y: string;
        z: string;
    };
    scale: {
        x: string;
        y: string;
        z: string;
    };
}