"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borealFASTMTV3Preset = exports.borealFASTMTv3FromClone = void 0;
const BaseClasses_1 = require("@spt/models/enums/BaseClasses");
const ItemMap_1 = require("../../resources/ItemMap");
const CustomItemMap_1 = require("../../resources/CustomItemMap");
const borealFASTMTv3PropsToOverride = {
    Prefab: {
        path: "helmets/boreal_helmet_v3.bundle",
        rcid: ""
    },
    Name: "Boreal_Winter_Helmet_v3",
    ShortName: "Boreal_Winter_Helmet_v3",
    Description: "Boreal_Winter_Helmet_v3",
    RarityPvE: "Rare",
    BackgroundColor: "blue",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true
};
exports.borealFASTMTv3FromClone = {
    fleaPriceRoubles: 120000,
    handbookParentId: "5b47574386f77428ca22b330",
    handbookPriceRoubles: 97856,
    itemTplToClone: ItemMap_1.ItemMap.HEADWEAR_FAST_MT_BLACK,
    locales: {
        en: {
            name: "Boreal Ops-Core FAST MT Helmet (Walker)",
            shortName: "Walker FAST",
            description: "The \"Boreal FAST\" is a ballistic helmet is popular in special forces all around the world. Can be modified with different components. HAs been given a custom look to let people know who controls this territory."
        }
    },
    newId: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MT_V3,
    overrideProperties: borealFASTMTv3PropsToOverride,
    parentId: BaseClasses_1.BaseClasses.HEADWEAR
};
exports.borealFASTMTV3Preset = {
    _changeWeaponName: false,
    _encyclopedia: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MT_V3,
    _id: "67086d0a8e8dc1c11723f98f",
    _items: [
        {
            _id: "67086d0f1b7a7256e225d4ad",
            _tpl: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MT_V3
        },
        {
            _id: "66eba8174ddfbf7858f04f1e",
            _tpl: "657f8ec5f4c82973640b234c",
            parentId: "67086d0f1b7a7256e225d4ad",
            slotId: "Helmet_top"
        },
        {
            _id: "66eba830d885b7f1df95523a",
            _tpl: "657f8f10f4c82973640b2350",
            parentId: "67086d0f1b7a7256e225d4ad",
            slotId: "Helmet_back"
        }
    ],
    _name: "Boreal Ops-Core FAST MT",
    _parent: "67086d0f1b7a7256e225d4ad",
    _type: "Preset"
};
