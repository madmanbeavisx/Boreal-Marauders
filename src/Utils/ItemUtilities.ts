import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";
import { borealFASTMTv2FromClone, winterFASTMTV2Preset } from "../Items/helmets/BorealDayHelmet";
import { borealFastMandible, borealFastSideArmor } from "../Items/helmets/attachments/FastAttachments";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { whiteDeathMaskItemToClone } from "../Items/facemasks/ItemWhiteDeath";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { borealOspreyProtectionPreset, borealOspreyProtectionFromClone } from "../Items/rigs/BorealOspreyProtection";
import { mod } from "../mod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { ItemMap } from "../resources/ItemMap";
import { CustomItemMap } from "../resources/CustomItemMap";
import { Preset } from "./utilities";
import { borealCOMM3FromCloneDetails, borealCOMM3SlotSize } from "../Items/backpacks/BorealCOMM3";
import { SlotSize } from "../resources/configConsts";
import { borealRedutT5FromClone, borealRedutT5Preset } from "../Items/armor/BorealRedutT5";
import { borealD3CRXFromClone } from "../Items/rigs/BorealD3CRX";
import { borealFASTMTv3FromClone, borealFASTMTV3Preset } from "../Items/helmets/BorealFastMTv3";
import { deathWalkerItemToClone } from "../Items/facemasks/DeathWalkerMask";
import { borealTakedownFromCloneDetails, borealTakedownSlotSize } from "../Items/backpacks/BorealTakedown";
import { snakeHeadCharmFromClone } from "../Items/staticItems/SnakeHeadCharm";
import { deathShadowItemToClone } from "../Items/facemasks/DeathShadowMask";
import { ICustomizationItem } from "@spt/models/eft/common/tables/ICustomizationItem";
import { borealParkaHandsCustomizationItem, borealParkaRagmanSuit, borealParkaSuitCustomizationItem, borealParkaTopCustomizationItem } from "../Items/clothing/BorealParka";
import { TraderMap } from "../resources/TraderMap";
import { ISuit } from "@spt/models/eft/common/tables/ITrader";
import { borealPantsBottomCustomizationItem, borealPantsRagmanSuit, borealPantsSuitCustomizationItem } from "../Items/clothing/BorealPants";
import { References } from "../resources/References";
import { CurrencyMap } from "../resources/CurrencyMap";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { borealRT61FatmanFrostbiteFromClone } from "../Items/armor/R61Fatman";

export interface IITemsToUpdateFilters {
    itemIdToFixFiltersOn: string;
    filterIdToSearchFor: string;
    filterIdToAdd: string;
}

export class ItemUtilities {
    private readonly container: DependencyContainer;
    private database: IDatabaseTables;
    private logger: ILogger;
    private databaseServer: DatabaseServer;
    private customItemService: CustomItemService;
    private ref:References;
    private jsonUtil: JsonUtil

    constructor(container: DependencyContainer, ref: References){
        this.container = container
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        this.database = this.databaseServer.getTables();
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.jsonUtil = container.resolve<JsonUtil>("JsonUtil");
        this.customItemService = container.resolve<CustomItemService>("CustomItemService");
        this.ref = ref
    }

    private backpacksToUpdate: SlotSize[] = [
        borealCOMM3SlotSize
        //borealTakedownSlotSize
    ]

    private itemsToUpdate: IITemsToUpdateFilters[] = [
        // Update Helmets to use new FAST Side Armor
        {
            itemIdToFixFiltersOn: ItemMap.HEADWEAR_FAST_MT_BLACK,
            filterIdToSearchFor: borealFastSideArmor.itemTplToClone,
            filterIdToAdd: borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: ItemMap.HEADWEAR_TK_FAST_MT,
            filterIdToSearchFor: borealFastSideArmor.itemTplToClone,
            filterIdToAdd: borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: ItemMap.HEADWEAR_FAST_MT_TAN,
            filterIdToSearchFor: borealFastSideArmor.itemTplToClone,
            filterIdToAdd: borealFastSideArmor.newId
        },
        {
            itemIdToFixFiltersOn: CustomItemMap.BOREAL_FAST_HELMET,
            filterIdToSearchFor: ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToAdd: CustomItemMap.BOREAL_FAST_SIDE_ARMOR
        },
        {
            itemIdToFixFiltersOn: CustomItemMap.BOREAL_FAST_MT_FINAL,
            filterIdToSearchFor: ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToAdd: CustomItemMap.BOREAL_FAST_SIDE_ARMOR
        },
        // Update Side Armors to use new FAST Gunslinger Mandible
        {
            itemIdToFixFiltersOn: ItemMap.ARMOREDEQUIPMENT_FAST_EARS,
            filterIdToSearchFor: ItemMap.ARMOREDEQUIPMENT_GUNSIGHT,
            filterIdToAdd: CustomItemMap.BOREAL_FAST_MANDIBLE
        },
        {
            itemIdToFixFiltersOn: CustomItemMap.BOREAL_FAST_SIDE_ARMOR,
            filterIdToSearchFor: ItemMap.ARMOREDEQUIPMENT_GUNSIGHT,
            filterIdToAdd: CustomItemMap.BOREAL_FAST_MANDIBLE
        }
    ]

    private addToFilterWhereClonedItemExists(itemIdToFixFiltersOn: string, filterIdToSearchFor: string, filterIdToAdd: string): void {
        const item = this.database.templates.items[itemIdToFixFiltersOn]._props.Slots;
        for (const eachSlot in item) {
            const slot = item[eachSlot]
            if (!slot._props.filters || slot._props.filters.length == 0) {
                continue
            }
            const thisFilter = slot._props.filters[0].Filter
            if (thisFilter.includes(filterIdToSearchFor) && !thisFilter.includes(filterIdToAdd)) {
                thisFilter.push(filterIdToAdd)
            }    
        }
    }
    private customBackpackStashResize(backpacks: SlotSize[]): void {
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

    public doCustomBackpackStashResize(): void {
        this.backpacksToUpdate.forEach(backpack =>
            this.customBackpackStashResize(this.backpacksToUpdate)
        )
    }

    public doEditsToItemFilters(): void{
        this.itemsToUpdate.forEach(item=>{
            this.addToFilterWhereClonedItemExists(item.itemIdToFixFiltersOn, item.filterIdToSearchFor, item.filterIdToAdd);
        })
        this.logger.log(`[${mod.modName}] Fixed item filters.`, LogTextColor.CYAN)
    }  

    public addCustomITemPresets(): void {
        const itemPresets = this.database.globals.ItemPresets;
        const newPresets: Preset[] = [
            winterFASTMTV2Preset,
            borealOspreyProtectionPreset,
            borealRedutT5Preset,
            borealFASTMTV3Preset
        ]

        let ctr = 0;
        while (ctr < newPresets.length){
            itemPresets[newPresets.at(ctr)._id] = newPresets.at(ctr)
            ctr++;
        }
        this.logger.log(`[${mod.modName}] Added presets for your new gear.`, LogTextColor.CYAN)
    }

    public addCustomItems():void{
        let numberOfNewITems: number = 0;
        const clonedItemsToAdd: NewItemFromCloneDetails[] = [
            whiteDeathMaskItemToClone,
            borealFASTMTv2FromClone,
            borealFastSideArmor,
            borealFastMandible,
            borealOspreyProtectionFromClone,
            borealCOMM3FromCloneDetails,
            borealRedutT5FromClone,
            borealD3CRXFromClone,
            borealFASTMTv3FromClone,
            deathWalkerItemToClone,
            borealTakedownFromCloneDetails,
            snakeHeadCharmFromClone,
            deathShadowItemToClone,
            borealRT61FatmanFrostbiteFromClone
        ];

        let ctr = 0;
        while (ctr < clonedItemsToAdd.length){
            this.customItemService.createItemFromClone(clonedItemsToAdd.at(ctr))
            ctr++;
            numberOfNewITems++;
        }
        this.logger.log(`[${mod.modName}] Added ${numberOfNewITems} new items.`, LogTextColor.CYAN)
    }
    
    public refreshDatabase(): void {
        this.database = this.databaseServer.getTables();
    }

    private addClothingToRagman(item: ISuit){
        const ragmanDb = this.database.traders[TraderMap.RAGMAN];
        ragmanDb.suits = ragmanDb.suits.concat(item);
    }

    private addClothingItemToLocales(item: ICustomizationItem): void {
        const localeDb = Object.values(this.database.locales.global) as Record<string,string>[];
        for (const locale of localeDb) {
            locale[`${item._id} Name`] = item._props.Name;
            locale[`${item._id}} ShortName`] = item._props.ShortName;
            locale[`${item._id}} Description`] = item._props.Description;
        }
    }

    private addClothingItemToDb(item: ICustomizationItem): void {
        const customizationItemsDb = this.database.templates.customization;
        customizationItemsDb[item._id] = item as ICustomizationItem;

        this.addClothingItemToLocales(item);
    }

    public addCustomClothing(): void {
        let numberOfNewClothingItems: number = 0;
        let numberOfNewClothingItemsAddedToRagman: number = 0;
        // Items have to be listed in order
        // Top / Bottom
        // Hands / Feet
        // Suit
        const clothingToAdd: ICustomizationItem[] = [
            borealParkaTopCustomizationItem,
            borealParkaHandsCustomizationItem,
            borealParkaSuitCustomizationItem,
            borealPantsBottomCustomizationItem,
            borealPantsSuitCustomizationItem
        ];

        const clothingRagmanSuitsToAdd: ISuit[] = [
            //borealParkaRagmanSuit,
            borealPantsRagmanSuit
        ]
        let ctr = 0;
        // Add Tops/Bottoms
        clothingToAdd.forEach(item => {
            this.addClothingItemToDb(clothingToAdd.at(ctr))
            ctr++;
            numberOfNewClothingItems++;
        });

        clothingRagmanSuitsToAdd.forEach(suitItem => {
            this.addClothingToRagman(suitItem)
            numberOfNewClothingItemsAddedToRagman++;
        })

        this.logger.log(`[${mod.modName}] Added ${numberOfNewClothingItemsAddedToRagman} new clothing items to Ragman.`, LogTextColor.CYAN)
        // this.logger.log(`[${mod.modName}] Added ${numberOfNewClothingItems} new clothing items.`, LogTextColor.CYAN)
    
    }
}



