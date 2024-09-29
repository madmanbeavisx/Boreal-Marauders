import { Props } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { ItemMap } from "../../../resources/ItemMap";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

// Side Armor
const trooperFastSideArmorPropsToOverride: Props ={
    Prefab: {
        path: "helmets/attachments/troopersidearmor.bundle",
        rcid: ""
    },
    Name: "Trooper_FAST_Side_Armor",
    ShortName: "Trooper_FAST_Side_Armor",
    Description: "Trooper_FAST_Side_Armor",
    Rarity: "Rare",
    BackgroundColor: "blue",
    CanSellOnRagfair: true,
    CanRequireOnRagfair: false,
    RagFairCommissionModifier: 1,
    MaxDurability: 35,
    armorClass: 5,
    Weight: 1.24
}

export const borealFastSideArmor: NewItemFromCloneDetails = {
    fleaPriceRoubles: 45000,
    handbookParentId: "5b5f704686f77447ec5d76d7",
    handbookPriceRoubles: 36000,
    itemTplToClone: ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
    locales: {
        en: {
            name: "Boreal FAST Side Armor",
            shortName: "Boreal Ears",
            description: "An additional armor module for the Ops-Core FAST helmet, protects the ears from shrapnel and small caliber ricochets. Custom by the Boreal Marauders"
        }
    },
    newId: "66e906e7942ee0fc8b99e4bd",
    overrideProperties: trooperFastSideArmorPropsToOverride,
    parentId: BaseClasses.ARMORED_EQUIPMENT
}

// Mandible
const trooperFastMandiblePropsToOverride: Props ={
    Prefab: {
        path: "helmets/attachments/trooperfastmandible.bundle",
        rcid: ""
    },
    Name: "Boreal_FAST_Gunsight_Mandible",
    ShortName: "Boreal_FAST_Gunsight_Mandible",
    Description: "Boreal_FAST_Gunsight_Mandible",
    Rarity: "Rare",
    BackgroundColor: "blue",
    CanSellOnRagfair: true,
    CanRequireOnRagfair: false,
    RagFairCommissionModifier: 1,
    MaxDurability: 40,
    armorClass: 5,
    Weight: 1.76
}

export const borealFastMandible: NewItemFromCloneDetails = {
    fleaPriceRoubles: 45000,
    handbookParentId: "5b5f704686f77447ec5d76d7",
    handbookPriceRoubles: 36000,
    itemTplToClone: ItemMap.ARMOREDEQUIPMENT_GUNSIGHT,
    locales: {
        en: {
            name: "Boreal FAST Mandible",
            shortName: "Boreal Mandible",
            description: "An additional armor module for the Ops-Core FAST helmet, mounted on the Side Armor component. Custom by the Boreal Marauders"
        }
    },
    newId: "66f0c85c2c885bba5d218566",
    overrideProperties: trooperFastMandiblePropsToOverride,
    parentId: BaseClasses.ARMORED_EQUIPMENT
}