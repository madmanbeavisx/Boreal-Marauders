import { Props } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemMap } from "../../resources/CustomItemMap";
import { ItemMap } from "../../resources/ItemMap";
import { SlotSize } from "../../resources/configConsts";

const borealCOMM3Props: Props = {
    Name: "boreal_COMM3",
    ShortName: "boreal_COMM3",
    Description: "boreal_COMM3",
    Rarity: "Superrare",
    BackgroundColor: "blue",
    Prefab: {
        path: "backpack/boreal_comm3.bundle",
        rcid: ""
    },
    weaponErgonomicPenalty: -3,
    Weight: 10,
    speedPenaltyPercent: -4
}

export const borealCOMM3FromCloneDetails: NewItemFromCloneDetails = {
    itemTplToClone: ItemMap.BACKPACK_COMM_3,
    overrideProperties: borealCOMM3Props,
    parentId: "5448e53e4bdc2d60728b4567",
    newId: CustomItemMap.BOREAL_COMM3,
    fleaPriceRoubles: 112000,
    handbookPriceRoubles: 78000,
    handbookParentId: "5b5f6f6c86f774093f2ecf0b",
    locales: {
        en: {
            name: "Boreal Marauder Frostbite Tactical COMM 3 Frame System",
            shortName: "Frostbite's Frame",
            description: "The Frostbite Frame system is specially designed for extreme cold weather operations, equipped with the 'Whiteout' backpack for carrying essential survival and communication gear. The main compartment is optimized for survival radios like the PRC117F or G, PRC119F, 152, or ASIP. The modular system allows for additional gear attachments, making it versatile for long winter expeditions. A highly sought-after item in the brutal Boreal Marauders' wilderness."
        }
    }
}

export const borealCOMM3SlotSize: SlotSize = {
    name: borealCOMM3FromCloneDetails.locales.en.name,
    itemId: CustomItemMap.BOREAL_COMM3,
    horizontal: 6,
    vertical: 8,
    removeFilters: false
}