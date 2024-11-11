"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUtilities = void 0;
const BorealDayHelmet_1 = require("../Items/helmets/BorealDayHelmet");
const FastAttachments_1 = require("../Items/helmets/attachments/FastAttachments");
const ItemWhiteDeath_1 = require("../Items/facemasks/ItemWhiteDeath");
const BorealOspreyProtection_1 = require("../Items/rigs/BorealOspreyProtection");
const mod_1 = require("../mod");
const LogTextColor_1 = require("@spt/models/spt/logging/LogTextColor");
const ItemMap_1 = require("../resources/ItemMap");
const CustomItemMap_1 = require("../resources/CustomItemMap");
const BorealCOMM3_1 = require("../Items/backpacks/BorealCOMM3");
const BorealRedutT5_1 = require("../Items/armor/BorealRedutT5");
const BorealD3CRX_1 = require("../Items/rigs/BorealD3CRX");
const BorealFastMTv3_1 = require("../Items/helmets/BorealFastMTv3");
const DeathWalkerMask_1 = require("../Items/facemasks/DeathWalkerMask");
const BorealTakedown_1 = require("../Items/backpacks/BorealTakedown");
class ItemUtilities {
    container;
    database;
    logger;
    databaseServer;
    customItemService;
    constructor(container) {
        this.container = container;
        this.databaseServer = container.resolve("DatabaseServer");
        this.database = this.databaseServer.getTables();
        this.logger = container.resolve("WinstonLogger");
        this.customItemService = container.resolve("CustomItemService");
    }
    backpacksToUpdate = [
        BorealCOMM3_1.borealCOMM3SlotSize
    ];
    itemsToUpdate = [
        // Update Helmets to use new FAST Side Armor
        {
            itemIdToFixFiltersOn: ItemMap_1.ItemMap.HEADWEAR_FAST_MT_BLACK,
            filterIdToSearchFor: FastAttachments_1.borealFastSideArmor.itemTplToClone,
            filterIdToAdd: FastAttachments_1.borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: ItemMap_1.ItemMap.HEADWEAR_TK_FAST_MT,
            filterIdToSearchFor: FastAttachments_1.borealFastSideArmor.itemTplToClone,
            filterIdToAdd: FastAttachments_1.borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: ItemMap_1.ItemMap.HEADWEAR_FAST_MT_TAN,
            filterIdToSearchFor: FastAttachments_1.borealFastSideArmor.itemTplToClone,
            filterIdToAdd: FastAttachments_1.borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: CustomItemMap_1.CustomItemMap.BOREAL_FAST_HELMET,
            filterIdToSearchFor: ItemMap_1.ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToAdd: CustomItemMap_1.CustomItemMap.BOREAL_FAST_SIDE_ARMOR
        },
        {
            itemIdToFixFiltersOn: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MT_V3,
            filterIdToSearchFor: ItemMap_1.ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToAdd: CustomItemMap_1.CustomItemMap.BOREAL_FAST_SIDE_ARMOR
        },
        // Update Side Armors to use new FAST Gunslinger Mandible
        {
            itemIdToFixFiltersOn: ItemMap_1.ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToSearchFor: ItemMap_1.ItemMap.ARMOREDEQUIPMENT_GUNSIGHT,
            filterIdToAdd: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MANDIBLE
        },
        {
            itemIdToFixFiltersOn: CustomItemMap_1.CustomItemMap.BOREAL_FAST_SIDE_ARMOR,
            filterIdToSearchFor: ItemMap_1.ItemMap.ARMOREDEQUIPMENT_GUNSIGHT,
            filterIdToAdd: CustomItemMap_1.CustomItemMap.BOREAL_FAST_MANDIBLE
        }
    ];
    addToFilterWhereClonedItemExists(itemIdToFixFiltersOn, filterIdToSearchFor, filterIdToAdd) {
        const item = this.database.templates.items[itemIdToFixFiltersOn]._props.Slots;
        for (const eachSlot in item) {
            const slot = item[eachSlot];
            if (!slot._props.filters || slot._props.filters.length == 0) {
                continue;
            }
            const thisFilter = slot._props.filters[0].Filter;
            if (thisFilter.includes(filterIdToSearchFor) && !thisFilter.includes(filterIdToAdd)) {
                thisFilter.push(filterIdToAdd);
            }
        }
    }
    customBackpackStashResize(backpacks) {
        const tables = this.databaseServer.getTables();
        const items = tables.templates.items;
        let i = 0;
        while (i < backpacks.length) {
            // Update Base Grid with Configured Cells
            items[backpacks[i].itemId]._props.Grids[0]._props.cellsH = backpacks[i].horizontal;
            items[backpacks[i].itemId]._props.Grids[0]._props.cellsV = backpacks[i].vertical;
            // Remove filters if requested to
            if (backpacks[i].removeFilters === true) {
                items[backpacks[i].itemId]._props.Grids[0]._props.filters = [];
            }
            i++;
        }
    }
    doCustomBackpackStashResize() {
        this.backpacksToUpdate.forEach(backpack => this.customBackpackStashResize(this.backpacksToUpdate));
    }
    doEditsToItemFilters() {
        this.itemsToUpdate.forEach(item => {
            this.addToFilterWhereClonedItemExists(item.itemIdToFixFiltersOn, item.filterIdToSearchFor, item.filterIdToAdd);
        });
        this.logger.log(`[${mod_1.mod.modName}] Fixed item filters.`, LogTextColor_1.LogTextColor.CYAN);
    }
    addCustomITemPresets() {
        const itemPresets = this.database.globals.ItemPresets;
        const newPresets = [
            BorealDayHelmet_1.winterFASTMTV2Preset,
            BorealOspreyProtection_1.borealOspreyProtectionPreset,
            BorealRedutT5_1.borealRedutT5Preset,
            BorealFastMTv3_1.borealFASTMTV3Preset
        ];
        let ctr = 0;
        while (ctr < newPresets.length) {
            itemPresets[newPresets.at(ctr)._id] = newPresets.at(ctr);
            ctr++;
        }
        this.logger.log(`[${mod_1.mod.modName}] Added presets for your new gear.`, LogTextColor_1.LogTextColor.CYAN);
    }
    addCustomItems() {
        let numberOfNewITems = 0;
        const clonedItemsToAdd = [
            ItemWhiteDeath_1.whiteDeathMaskItemToClone,
            BorealDayHelmet_1.borealFASTMTv2FromClone,
            FastAttachments_1.borealFastSideArmor,
            FastAttachments_1.borealFastMandible,
            BorealOspreyProtection_1.borealOspreyProtectionFromClone,
            BorealCOMM3_1.borealCOMM3FromCloneDetails,
            BorealRedutT5_1.borealRedutT5FromClone,
            BorealD3CRX_1.borealD3CRXFromClone,
            BorealFastMTv3_1.borealFASTMTv3FromClone,
            DeathWalkerMask_1.deathWalkerItemToClone,
            BorealTakedown_1.borealTakedownFromCloneDetails
        ];
        let ctr = 0;
        while (ctr < clonedItemsToAdd.length) {
            this.customItemService.createItemFromClone(clonedItemsToAdd.at(ctr));
            ctr++;
            numberOfNewITems++;
        }
        this.logger.log(`[${mod_1.mod.modName}] Added ${numberOfNewITems} new items.`, LogTextColor_1.LogTextColor.CYAN);
    }
    refreshDatabase() {
        this.database = this.databaseServer.getTables();
    }
}
exports.ItemUtilities = ItemUtilities;
