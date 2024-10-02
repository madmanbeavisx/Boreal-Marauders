import { ITemplateItem, ItemType, Props } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemDetails, NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";

const whiteDeathProps: Props = {
    Name: "white_death_mask",
    ShortName: "white_death_mask",
    Description: "white_death_mask",
    Weight: 1.5,
    BackgroundColor: "blue",
    Width: 2,
    Height: 2,
    StackMaxSize: 1,
    Rarity: "Superrare",
    ItemSound: "gear_generic",
    Prefab: {
        path: "facemasks/whitoutdeathsquadmask.bundle",
        rcid: ""
    },
    StackObjectsCount: 1,
    NotShownInSlot: false,
    ExaminedByDefault: false,
    ExamineTime: 1.3,
    IsUndiscardable: false,
    IsUnsaleable: false,
    IsUnbuyable: false,
    IsUngivable: false,
    IsLockedafterEquip: false,
    QuestItem: false,
    LootExperience: 20,
    ExamineExperience: 20,
    HideEntrails: false,
    ExtraSizeDown: 0,
    ExtraSizeUp: 0,
    ExtraSizeLeft: 0,
    ExtraSizeRight: 0,
    ExtraSizeForceAdd: false,
    MergesWithChildren: false,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true,
    ConflictingItems: [
        "59e770f986f7742cbe3164ef",
        "572b7d8524597762b472f9d1",
        "5aa2b87de5b5b00016327c25",
        "5aa2a7e8e5b5b00016327c16",
        "5aa2b89be5b5b0001569311f",
        "5aa2b8d7e5b5b00014028f4a",
        "65749cb8e0423b9ebe0c79c9",
        "65749ccf33fdc9c0cf06d3ca",
        "5d96141523f0ea1b7f2aacab",
        "5f99418230835532b445e954",
        "61c18db6dfd64163ea78fbb4",
        "603618feffd42c541047f771",
        "603619720ca681766b6a0fc4",
        "6040de02647ad86262233012",
        "60361a7497633951dc245eb4",
        "60361b0b5a45383c122086a1",
        "60361b5a9a15b10d96792291",
        "59ef13ca86f77445fd0e2483",
        "5645bc214bdc2d363b8b4571",
        "5b40e5e25acfc4001a599bea",
        "5b40e61f5acfc4001a599bec",
        "5aa2ba19e5b5b00014028f4e",
        "5aa7d193e5b5b000171d063f",
        "5df8a58286f77412631087ed",
        "5c0e842486f77443a74d2976",
        "5c0919b50db834001b7ce3b9"
    ],
    Unlootable: false,
    UnlootableFromSlot: "FirstPrimaryWeapon",
    UnlootableFromSide: [],
    AnimationVariantsNumber: 0,
    DiscardingBlock: false,
    RagFairCommissionModifier: 1,
    IsAlwaysAvailableForInsurance: true,
    DiscardLimit: 1,
    DropSoundType: "None",
    InsuranceDisabled: false,
    QuestStashMaxCount: 0,
    IsSpecialSlotOnly: false,
    IsUnremovable: false,
    Grids: [],
    Slots: [],
    CanPutIntoDuringTheRaid: true,
    CantRemoveFromSlotsDuringRaid: [],
    BlocksEarpiece: false,
    BlocksEyewear: true,
    BlocksFaceCover: true,
    BlocksHeadwear:false,
    Durability: 50,
    MaxDurability: 40,
    RepairCost: 120,
    RepairSpeed: 0,
    armorClass: 4,
    Indestructibility: 0.9,
    FaceShieldComponent: false,
    FaceShieldMask: "NoMask",
    HasHinge: false,
    MaterialType: "BodyArmor",
    RicochetParams: {
        x: 1.4,
        y: 0.8,
        z: 85
    },
    DeafStrength: "None",
    BluntThroughput: 0.198,
    ArmorMaterial: "Aramid",
    BlindnessProtection: 0.3,
    ArmorType: "Heavy",
    armorColliders: [
        "Eyes",
        "Jaw",
        "HeadCommon"
    ],
    armorPlateColliders: [],
    speedPenaltyPercent: 0,
    mousePenalty: 0,
    weaponErgonomicPenalty: 0
}

export const whiteDeathTemplate: ITemplateItem = {
    _id: "66e51a0dd83f775f368f346d",
    _name: "white_death_mask",
    _parent: "5a341c4686f77469e155819e",
    _type: ItemType.ITEM,
    _proto: "572b7d8524597762b472f9d1",
    _props: whiteDeathProps
}

export const whiteDeathMaskItem: NewItemDetails = { //the item we want to clone, in this example i will cloning the MP-18
    newItem: whiteDeathTemplate,
    fleaPriceRoubles: 100000, //Self explanatary
    handbookPriceRoubles: 82500,
    handbookParentId: "5b47574386f77428ca22b32f", //Handbook Parent Id refers to the category the gun will be under
    //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
    locales: {
        en: {
            name: "Boreal Marauder Heavyweight Armored Mask",
            shortName: "Boreal's Fear",
            description: "The \"Boreal's Fear\" Heavyweight Armored Mask is for face protection, protecting your Elites with aramid fibers reinforced with titan plating."
        }
    }
};

export const whiteDeathMaskItemToClone: NewItemFromCloneDetails = {
    itemTplToClone: "6570aead4d84f81fd002a033",
    overrideProperties: whiteDeathProps,
    parentId: "5a341c4686f77469e155819e",
    newId: "66e51a0dd83f775f368f346d",
    fleaPriceRoubles: 100000,
    handbookPriceRoubles: 82500,
    handbookParentId: "5b47574386f77428ca22b32f",
    locales: {
        en: {
            name: "Boreal Marauder Heavyweight Armored Mask",
            shortName: "Boreal's Fear",
            description: "The \"Boreal's Fear\" Heavyweight Armored Mask is for face protection, protecting your Elites with aramid fibers reinforced with titan plating."
        }
    }
}