import { Grid, GridFilter, GridProps, Props } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { ItemMap } from "../../resources/ItemMap";
import { CustomItemMap } from "../../resources/CustomItemMap";
import { SlotSize } from "../../resources/configConsts";


const takedownGridFilters: GridFilter = {
    Filter: ["54009119af1c881c07000029"],
    ExcludedFilter: [
        "5448bf274bdc2dfc2f8b456a",
        ItemMap.BACKPACK_TAKEDOWN_BLACK,
        ItemMap.BACKPACK_TAKEDOWN_MULTICAM,
        ItemMap.CONTAINER_HOLODILNICK,
        ItemMap.CONTAINER_GRENADES,
        ItemMap.CONTAINER_JUNK,
        ItemMap.CONTAINER_MAGAZINES,
        ItemMap.CONTAINER_MEDICINE,
        ItemMap.CONTAINER_MONEY,
        ItemMap.CONTAINER_ITEMS,
        ItemMap.CONTAINER_WEAPONS,
        ItemMap.CONTAINER_THICC_ITEM_CASE,
        ItemMap.CONTAINER_THICC_WEAPON_CASE
    ]
}
const borealTakedownGridPropsWeaponSlot: GridProps = {
    cellsH: 3,
    cellsV: 5,
    filters: [takedownGridFilters],
    minCount: 0,
    maxCount: 0,
    maxWeight: 0,
    isSortingTable: false
}

const borealTakedownGridPropsBottomSlot: GridProps = {
    cellsH: 6,
    cellsV: 4,
    filters: [takedownGridFilters],
    minCount: 0,
    maxCount: 0,
    maxWeight: 0,
    isSortingTable: false
}

const broealTakedownGrid0: Grid = {
    _name: "main",
    _id: "670ca45ebb368204acb09750",
    _parent: CustomItemMap.BOREAL_TAKEDOWN,
    _props: borealTakedownGridPropsWeaponSlot,
    _proto: "55d329c24bdc2d892f8b4567"
}

const broealTakedownGrid1: Grid = {
    _name: "0",
    _id: "670ca45c317688827c49abf5",
    _parent: CustomItemMap.BOREAL_TAKEDOWN,
    _props: borealTakedownGridPropsWeaponSlot,
    _proto: "55d329c24bdc2d892f8b4567"
}

const broealTakedownGrid2: Grid = {
    _name: "1",
    _id: "670ca4594d4800a75e66f0ba",
    _parent: CustomItemMap.BOREAL_TAKEDOWN,
    _props: borealTakedownGridPropsWeaponSlot,
    _proto: "55d329c24bdc2d892f8b4567"
}

const borealTakedownProps: IProps = {
    Name: "boreal_takedown",
    ShortName: "boreal_takedown",
    Description: "boreal_takedown",
    Rarity: "Superrare",
    BackgroundColor: "blue",
    Prefab: {
        path: "backpack/boreal_takedown.bundle",
        rcid: ""
    },
    Weight: 1.75
    // Grids: [
    //     broealTakedownGrid0,
    //     broealTakedownGrid1,
    //     broealTakedownGrid2
    // ]
}

export const borealTakedownFromCloneDetails: NewItemFromCloneDetails = {
    itemTplToClone: ItemMap.BACKPACK_TAKEDOWN_BLACK,
    overrideProperties: borealTakedownProps,
    parentId: "5448e53e4bdc2d60728b4567",
    newId: CustomItemMap.BOREAL_TAKEDOWN,
    fleaPriceRoubles: 45000,
    handbookPriceRoubles: 27111,
    handbookParentId: "5b5f6f6c86f774093f2ecf0b",
    locales: {
        en: {
            name: "Boreal Marauder Takedown Sling Backpack",
            shortName: "Takedown",
            description: "The Boreal Takedown is a rugged single-strap sling backpack designed for extreme operations and with two AR style weapon storage while they are in takedown config as well as large pockets on the front leavin it optimized for maximum space and storage, the external pockets are designed to carry ammunition, cleaning kits, or additional weapon parts. Its lightweight design and adaptability make it a must-have for those venturing deep into the wilderness."
        }
    }
}


export const borealTakedownSlotSize: SlotSize = {
    name: borealTakedownFromCloneDetails.locales.en.name,
    itemId: CustomItemMap.BOREAL_TAKEDOWN,
    horizontal: 4,
    vertical: 8,
    removeFilters: false
}