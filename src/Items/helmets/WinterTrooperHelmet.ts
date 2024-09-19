import { Props } from "@spt/models/eft/common/tables/ITemplateItem";
import {NewItemFromCloneDetails} from "@spt/models/spt/mod/NewItemDetails";
import { Preset } from "../../resources/configConsts";

const winterFASTMTPropsToOverride: Props = {
    Prefab: {
        path: "wintertrooperfastmt.bundle",
        rcid: ""
    },
    Name: "Winter_trooper_helmet",
    ShortName: "Winter_trooper_helmet",
    Description: "Winter_trooper_helmet",
    RarityPvE: "Rare",
    BackgroundColor: "blue",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true
}

export const winterTrooperFASTMTFromClone: NewItemFromCloneDetails = {
    fleaPriceRoubles: 120000,
    handbookParentId: "5b47574386f77428ca22b330",
    handbookPriceRoubles: 97856,
    itemTplToClone: "5a154d5cfcdbcb001a3b00da",
    locales: {
        en: {
            name: "Winter Trooper Ops-Core FAST MT Helmet",
            shortName: "Winter Trooper",
            description: "The \"Winter Trooper\" is a ballistic helmet is popular in special forces all around the world. Can be modified with different components. "
        }
    },
    newId: "66e906e7942ee0fc8b99e4bd",
    overrideProperties: winterFASTMTPropsToOverride,
    parentId: "5a341c4086f77401f2541505"
}

export const winterFASTMTPreset: Preset = {
    _changeWeaponName: false,
    _id: "66eba71c3332de12ba156d20",
    _items: [
        {
            _id: "66eba4f2e856fac2c7872576",
            _tpl: "66e906e7942ee0fc8b99e4bd"
        },
        {
            _id: "66eba8174ddfbf7858f04f1e",
            _tpl: "657f8ec5f4c82973640b234c",
            parentId: "66eba4f2e856fac2c7872576",
            slotId: "Helmet_top",
            upd:{
                Repairable: {
                    Durability: 100,
                    MaxDurability: 100
                }
            }
        },
        {
            _id: "66eba830d885b7f1df95523a",
            _tpl: "657f8f10f4c82973640b2350",
            parentId: "66eba4f2e856fac2c7872576",
            slotId: "Helmet_back",
            upd:{
                Repairable: {
                    Durability: 100,
                    MaxDurability: 100
                }
            }
        }
    ],
    _name: "Winter Trooper Ops-Core FAST MT Helmet",
    _parent: "5a341c4086f77401f2541505",
    _type: "Preset"
}