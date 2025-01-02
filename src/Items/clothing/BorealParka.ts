import { ICustomizationItem, IProps } from "@spt/models/eft/common/tables/ICustomizationItem";
import { CustomItemMap } from "../../resources/CustomItemMap";
import { Ixyz } from "@spt/models/eft/common/Ixyz";
import { ISuit } from "@spt/models/eft/common/tables/ITrader";
import { TraderMap } from "../../resources/TraderMap";
import { CurrencyMap } from "../../resources/CurrencyMap";



const emptyXYZ: Ixyz = {
    x: 0,
    y: 0,
    z: 0
}

const borealParkaSuitProps : IProps = {
    Name: "Frostbite's Parka",
    ShortName: "Frostbite's Parka",
    Description: "Frostbite's Parka",
    Side: ["Usec", "Bear"],
    BodyPart: "Body",
    Body: CustomItemMap.BOREAL_PARKA_TOP,
    Hands: CustomItemMap.BOREAL_PARKA_HANDS,
    Feet: "",
    Prefab: undefined,
    WatchPrefab: undefined,
    IntegratedArmorVest: false,
    WatchPosition: emptyXYZ,
    WatchRotation: emptyXYZ,
    AvailableAsDefault: true,
    Game: []
}

const borealParkaTopProps: IProps = {
    Name: "Frostbite_Parka_Top",
    ShortName: "Frostbite_Parka_Top",
    Description: "Frostbite_Parka_Top",
    Side: ["Usec", "Bear", "Savage"],
    BodyPart: "Body",
    Body: "",
    Hands: CustomItemMap.BOREAL_PARKA_HANDS,
    Feet: "",
    Prefab: {
        path: "clothing/parka/boreal_parka.bundle",
        rcid: ""
    },
    WatchPrefab: {
        path: "",
        rcid: ""
    },
    IntegratedArmorVest: false,
    WatchPosition: emptyXYZ,
    WatchRotation: emptyXYZ,
    Game: []
}

const borealParkaHandsProps: IProps = {
    Name: "Frostbite_Parka_Hands",
    ShortName: "Frostbite_Parka_Hands",
    Description: "Frostbite_Parka_Hands",
    Side: ["Usec", "Bear"],
    BodyPart: "Hands",
    Body: "",
    Hands: "",
    Feet: "",
    Prefab: {
        path: "clothing/parka/hand_boreal_parka.bundle",
        rcid: ""
    },
    WatchPrefab: {
        path: "",
        rcid: ""
    },
    IntegratedArmorVest: false,
    WatchPosition: emptyXYZ,
    WatchRotation: emptyXYZ,
    Game: []
}

export const borealParkaSuitCustomizationItem : ICustomizationItem = {
    _id: CustomItemMap.BOREAL_PARKA_SUIT,
    _name: "Frostbite_Parka_Suit",
    _parent: "5cd944ca1388ce03a44dc2a4",
    _type: "Item",
    _props: borealParkaSuitProps,
    _proto: "5cde9ec17d6c8b04723cf479"
}

export const borealParkaTopCustomizationItem: ICustomizationItem = {
    _id: CustomItemMap.BOREAL_PARKA_TOP,
    _name: "FrostbiteParka",
    _parent: "5cc0868e14c02e000c6bea68",
    _type: "Item",
    _props: borealParkaTopProps,
    _proto: "5cde95ef7d6c8b04713c4f2d"
}

export const borealParkaHandsCustomizationItem: ICustomizationItem = {
    _id: CustomItemMap.BOREAL_PARKA_HANDS,
    _name: "Frostbite_Parka_Hands",
    _parent: "5cc086a314c02e000c6bea69",
    _type: "Item",
    _props: borealParkaHandsProps,
    _proto: "5cde95fa7d6c8b04737c2d13"
}

export const borealParkaRagmanSuit: ISuit = {
    _id: CustomItemMap.BOREAL_PARKA_RAGMAN_SUIT,
    tid: TraderMap.RAGMAN,
    suiteId: CustomItemMap.BOREAL_PARKA_SUIT,
    isActive: false,
    requirements: {
        loyaltyLevel: 1,
        profileLevel: 1,
        standing: 0,
        skillRequirements: [],
        questRequirements: [],
        itemRequirements: [
            {
                count: 0,
                _tpl: CurrencyMap.ROUBLES,
                onlyFunctional: true
            }
        ],
        achievementRequirements: [],
        requiredTid: TraderMap.RAGMAN
    },
    externalObtain: false,
    internalObtain: false,
    isHiddenInPVE: false
}