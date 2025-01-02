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

const borealPantsSuitProps : IProps = {
    Name: "Boreal_Pants_Suit",
    ShortName: "Boreal_Pants_Suit",
    Description: "Boreal_Pants_Suit",
    Side: ["Usec", "Bear"],
    BodyPart: "Feet",
    Body: "",
    Hands: "",
    Feet: CustomItemMap.BOREAL_PANTS_BOTTOM,
    Prefab: undefined,
    WatchPrefab: undefined,
    IntegratedArmorVest: false,
    WatchPosition: undefined,
    WatchRotation: undefined,
    AvailableAsDefault: true,
    Game: []
}

const borealPantsProps: IProps = {
    Name: "Frostbite_Pants",
    ShortName: "Frostbite_Pants",
    Description: "Frostbite_Pants",
    Side: ["Usec", "Bear"],
    BodyPart: "Feet",
    Body: "",
    Hands: "",
    Feet: "",
    Prefab: {
        path: "clothing/pants/boreal_pants.bundle",
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

export const borealPantsSuitCustomizationItem : ICustomizationItem = {
    _id: CustomItemMap.BOREAL_PANTS_SUIT,
    _name: "Frostbite's Pants",
    _parent: "5cd944d01388ce000a659df9",
    _type: "Item",
    _props: borealPantsSuitProps,
    _proto: "5cd946231388ce000d572fe3"
}

export const borealPantsBottomCustomizationItem: ICustomizationItem = {
    _id: CustomItemMap.BOREAL_PANTS_BOTTOM,
    _name: "FrostbitePants",
    _parent: "5cc0869814c02e000a4cad94",
    _type: "Item",
    _props: borealPantsProps,
    _proto: "5cde95ef7d6c8b04713c4f2d"
}

export const borealPantsRagmanSuit: ISuit = {
    _id: CustomItemMap.BOREAL_PANTS_RAGMAN,
    tid: TraderMap.RAGMAN,
    suiteId: CustomItemMap.BOREAL_PANTS_SUIT,
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