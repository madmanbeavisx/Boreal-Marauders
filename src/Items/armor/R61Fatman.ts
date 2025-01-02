import type { IProps } from "@spt/models/eft/common/tables/ITemplateItem";
import type { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemMap } from "../../resources/CustomItemMap";




const borealRT61FatmanProps: IProps = {
    Name: "boreal_rt61_fatman_frostbite",
    ShortName: "boreal_rt61_fatman_frostbite",
    Description: "boreal_rt61_fatman_frostbite",
    Prefab: {
        path: "armor/heavy_assult_vest_frostbite_camo.bundle",
        rcid: ""
    },
    Rarity: "Superrare",
    RarityPvE: "Superrare",
    BackgroundColor: "blue",
    Height: 4,
    Width: 4,
    DiscardLimit: 1,
    RicochetParams: {
        x: 0.9,
        y: 0.4,
        z: 70
    },
    Slots: [],
    Grids: [],
    armorClass: 6,
    armorColliders: [
        "RibcageUp",
        "Pelvis",
        "LeftUpperArm",
        "LeftForearm",
        "RightUpperArm",
        "RightForearm",
        "LeftThigh",
        "LeftCalf",
        "RightThigh",
        "RightCalf",
        "ParietalHead",
        "BackHead",
        "Ears",
        "Eyes",
        "Jaw",
        "NeckFront",
        "NeckBack",
        "RightSideChestUp",
        "LeftSideChestUp",
        "SpineTop",
        "SpineDown",
        "PelvisBack",
        "RightSideChestDown",
        "LeftSideChestDown",
        "RibcageLow"
    ],
    CanSellOnRagfair: true,
    Durability: 1200,
    MaxDurability: 1200,
    ArmorType: "Heavy",
    ArmorMaterial: "UHMWPE",
    BluntThroughput: 0.198,
    MaterialType: "BodyArmor",
    speedPenaltyPercent: -0.23,
    weaponErgonomicPenalty: -0.15
}

export const borealRT61FatmanFrostbiteFromClone: NewItemFromCloneDetails = {
    itemTplToClone: "60bf74184a63fc79b60c57f6",
    overrideProperties: borealRT61FatmanProps,
    parentId: "5448e54d4bdc2dcc718b4568",
    newId: CustomItemMap.BOREAL_RT61_FATMAN,
    fleaPriceRoubles: 858000,
    handbookPriceRoubles: 650000,
    handbookParentId: "5b5f701386f774093f2ecf0f",
    locales: {
        en: {
            name: "R61 Fatman Full Body Armor (White)",
            shortName: "Fatman",
            description: ""
        }
    }
}