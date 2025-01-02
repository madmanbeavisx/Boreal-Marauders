import { IProps } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemMap } from "../../resources/CustomItemMap";

const deathWalkerProps: IProps = {
    Name: "death_walker_mask",
    ShortName: "death_walker_mask",
    Description: "death_walker_mask",
    Weight: 1.5,
    BackgroundColor: "blue",
    Width: 2,
    Height: 2,
    StackMaxSize: 1,
    Rarity: "Superrare",
    ItemSound: "gear_generic",
    Prefab: {
        path: "facemasks/boreal_deathwalkermask.bundle",
        rcid: ""
    },
    Durability: 40,
    MaxDurability: 40,
    RepairCost: 120,
    RepairSpeed: 0,
    armorClass: 5,
    BluntThroughput: 0.198,
    ArmorMaterial: "Aramid",
    BlindnessProtection: 0.3,
    ArmorType: "Heavy",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true
}

export const deathWalkerItemToClone: NewItemFromCloneDetails = {
    itemTplToClone: "6570aead4d84f81fd002a033",
    overrideProperties: deathWalkerProps,
    parentId: "5a341c4686f77469e155819e",
    newId: CustomItemMap.BOREAL_DEATH_WALKER_MASK,
    fleaPriceRoubles: 100000,
    handbookPriceRoubles: 82500,
    handbookParentId: "5b47574386f77428ca22b32f",
    locales: {
        en: {
            name: "Death Walker Heavyweight Armored Mask",
            shortName: "Death Walker",
            description: "The \"Death Walker\" Heavyweight Armored Mask is used by the elite Death Walker squad of the Marauders for face protection, protecting them with aramid fibers reinforced with titan plating. The Death Walkers are an elite group that is a quick and effective hit squad that will strike hard fast an with deadly efficiency."
        }
    }
}