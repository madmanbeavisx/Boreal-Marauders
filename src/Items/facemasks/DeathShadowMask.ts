import { IProps } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemMap } from "../../resources/CustomItemMap";

const deathShadowProps: IProps = {
    Name: "death_Shadow_mask",
    ShortName: "death_Shadow_mask",
    Description: "death_Shadow_mask",
    Weight: 1.5,
    BackgroundColor: "blue",
    Width: 2,
    Height: 2,
    StackMaxSize: 1,
    Rarity: "Superrare",
    ItemSound: "gear_generic",
    Prefab: {
        path: "facemasks/death_shadow_mask_v4.bundle",
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

export const deathShadowItemToClone: NewItemFromCloneDetails = {
    itemTplToClone: "6570aead4d84f81fd002a033",
    overrideProperties: deathShadowProps,
    parentId: "5a341c4686f77469e155819e",
    newId: CustomItemMap.BOREAL_DEATH_WALKER_MASK_FINAL,
    fleaPriceRoubles: 100000,
    handbookPriceRoubles: 82500,
    handbookParentId: "5b47574386f77428ca22b32f",
    locales: {
        en: {
            name: "Death Shadow Heavyweight Armored Mask",
            shortName: "Death Shadow",
            description: "The \"Death Shadow\" Heavyweight Armored Mask is used by the elite Death Walker squad of the Marauders for face protection, protecting them with aramid fibers reinforced with titan plating. The Death Walkers are an elite group that is a quick and effective hit squad that will strike hard fast an with deadly efficiency."
        }
    }
}