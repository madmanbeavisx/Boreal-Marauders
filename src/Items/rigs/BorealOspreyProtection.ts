import { BaseClasses } from "@spt/models/enums/BaseClasses";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { ItemMap } from "../../resources/ItemMap";
import { Props } from "@spt/models/eft/common/tables/ITemplateItem";
import { Preset } from "../../Utils/utilities";
import { CustomItemMap } from "../../resources/CustomItemMap";


const borealOspreyProtectionProps: Props ={
    Prefab: {
        path: "rigs/boreal_trooper_osprey_plate_carrier.bundle",
        rcid: ""
    },
    Name: "Boreal_Osprey_Protection",
    ShortName: "Boreal_Osprey_Protection",
    Description: "Boreal_Osprey_Protection",
    BackgroundColor: "blue",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true,
    BlocksArmorVest: false
}

export const borealOspreyProtectionFromClone: NewItemFromCloneDetails = {
    fleaPriceRoubles: 322000,
    handbookParentId: "5b5f6f8786f77447ed563642",
    handbookPriceRoubles: 2467,
    itemTplToClone: ItemMap.VEST_OSPREY_MK4A_P,
    locales: {
        en: {
            name: "Boreal Arctic Wolf Tactical Vest (Osprey Protection)",
            shortName: "Boreal Wolf (P)",
            description: "The Boreal Arctic Wolf variant of the Osprey MK4A plate carrier is adapted for the Boreal Marauders. Featuring a Snow Camo design, this plate carrier provides the same reliable protection and utility as the standard model, with the added benefit of enhanced concealment in winter conditions."
        }
    },
    newId: CustomItemMap.BOREAL_OSPREY_PROTECTION_MTP,
    overrideProperties: borealOspreyProtectionProps,
    parentId: BaseClasses.VEST
}

export const borealOspreyProtectionPreset: Preset ={
    _changeWeaponName: false,
    _encyclopedia: CustomItemMap.BOREAL_OSPREY_PROTECTION_MTP,
    _id: "66f66b60f1aba9085e465ef7",
    _items: [
        {
            _id: "66f652675cc67bbcdca17b2d",
            _tpl: CustomItemMap.BOREAL_OSPREY_PROTECTION_MTP
        },
        {
            _id: "66f6534c73be3405868e7776",
            _tpl: "656fa8d700d62bcd2e024084",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Front_plate"
        },
        {
            _id: "66f653599eca77d9b977f235",
            _tpl: "656fa8d700d62bcd2e024084",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Back_plate"
        },
        {
            _id: "66f65682fb729c7d611a528a",
            _tpl: "64afd81707e2cf40e903a316",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Left_side_plate"
        },
        {
            _id: "66f6567e59e6044b077defe7",
            _tpl: "64afd81707e2cf40e903a316",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Right_side_plate"
        },
        {
            _id: "66f6567a330c281a93e749a1",
            _tpl: "65733312ca0ca984940a2d53",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Soft_armor_front"
        },
        {
            _id: "66f65678fc3809fc229a8e88",
            _tpl: "65733312ca0ca984940a2d53",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Soft_armor_back"
        },
        {
            _id: "66f65676a9ec05beedfd6c57",
            _tpl: "657333302cc8dfad2c0a3d9b",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Soft_armor_left"
        },
        {
            _id: "66f6567375c22f1147c3202b",
            _tpl: "6573333eca0ca984940a2d57",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "soft_armor_right"
        },
        {
            _id: "66f65671415c164d834d9361",
            _tpl: "6573334aca0ca984940a2d5b",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Collar"
        },
        {
            _id: "66f6566f5ad6bdde53e0853a",
            _tpl: "65733375b7a8d286530e3dd7",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Shoulder_l"
        },
        {
            _id: "66f6566d189450e554e2d850",
            _tpl: "65733375b7a8d286530e3dd7",
            parentId:"66f652675cc67bbcdca17b2d",
            slotId: "Shoulder_r"
        }
    ],
    _name: "Boreal Arctic Wolf Tactical Vest (Osprey Protection)",
    _parent: "66f652675cc67bbcdca17b2d",
    _type: "Preset"
}