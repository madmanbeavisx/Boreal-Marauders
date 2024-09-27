import { Props } from "@spt/models/eft/common/tables/ITemplateItem";
import {NewItemFromCloneDetails} from "@spt/models/spt/mod/NewItemDetails";
import { Preset } from "../../resources/utilities";
import { BaseClasses } from "@spt/models/enums/BaseClasses";
import { ItemMap } from "../../resources/ItemMap";

const winterFASTMTv2PropsToOverride: Props = {
    Prefab: {
        path: "helmets/wintertrooperdayhelm.bundle",
        rcid: ""
    },
    Name: "Boreal_Winter_Helmet",
    ShortName: "Boreal_Winter_Helmet",
    Description: "Boreal_Winter_Helmet",
    RarityPvE: "Rare",
    BackgroundColor: "blue",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true
}

export const borealFASTMTv2FromClone: NewItemFromCloneDetails = {
    fleaPriceRoubles: 120000,
    handbookParentId: "5b47574386f77428ca22b330",
    handbookPriceRoubles: 97856,
    itemTplToClone: ItemMap.HEADWEAR_FAST_MT_BLACK,
    locales: {
        en: {
            name: "Boreal Ops-Core FAST MT Helmet",
            shortName: "Boreal FAST",
            description: "The \"Boreal FAST\" is a ballistic helmet is popular in special forces all around the world. Can be modified with different components. HAs been given a custom look to let people know who controls this territory."
        }
    },
    newId: "66ef4fba045adea84e946351",
    overrideProperties: winterFASTMTv2PropsToOverride,
    parentId: BaseClasses.HEADWEAR
}

export const winterFASTMTV2Preset: Preset = {
    _changeWeaponName: false,
    _encyclopedia: "66ef4fba045adea84e946351",
    _id: "66eba71c3332de12ba156d20",
    _items: [
        {
            _id: "66efab61fcd6938f3a7a2dba",
            _tpl: "66ef4fba045adea84e946351"
        },
        {
            _id: "66eba8174ddfbf7858f04f1e",
            _tpl: "657f8ec5f4c82973640b234c",
            parentId: "66efab61fcd6938f3a7a2dba",
            slotId: "Helmet_top"
        },
        {
            _id: "66eba830d885b7f1df95523a",
            _tpl: "657f8f10f4c82973640b2350",
            parentId: "66efab61fcd6938f3a7a2dba",
            slotId: "Helmet_back"
        }
    ],
    _name: "Boreal Ops-Core FAST MT Helmet",
    _parent: "66efab61fcd6938f3a7a2dba",
    _type: "Preset"    
}