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

    constructor(container: DependencyContainer){
        this.container = container
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        this.database = this.databaseServer.getTables();
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.customItemService = container.resolve<CustomItemService>("CustomItemService");
    }

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
            borealOspreyProtectionPreset
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
            borealOspreyProtectionFromClone
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
}



