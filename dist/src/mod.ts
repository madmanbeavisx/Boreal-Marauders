import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { WhiteDeathMaskItemToClone } from "./Items/facemasks/ItemWhiteDeath";
import { winterFASTMTPreset, winterTrooperFASTMTFromClone } from "./Items/helmets/WinterTrooperHelmet";
import {LogBackgroundColor} from "@spt/models/spt/logging/LogBackgroundColor";
import {ItemHelper} from "@spt/helpers/ItemHelper";
import {DatabaseServer} from "@spt/servers/DatabaseServer";
import {Item} from "@spt/models/eft/common/tables/IItem";
import {IDatabaseTables} from "@spt/models/spt/server/IDatabaseTables";
import {HashUtil} from "@spt/utils/HashUtil";
import { Preset } from "./resources/configConsts";

class Mod implements IPreSptLoadMod, IPostDBLoadMod 
{
    modName: string = "Winters Death Troopers";
    private version: string = "0.2.5";
    private logger: ILogger;
    private itemHelper: ItemHelper;
    private customItemService: CustomItemService;
    private databaseServer: DatabaseServer;
    private database: IDatabaseTables;
    private hashUtil: HashUtil;


    public preSptLoad(container: DependencyContainer): void 
    {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.customItemService = container.resolve<CustomItemService>("CustomItemService");
        this.itemHelper = container.resolve<ItemHelper>("ItemHelper");
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        this.hashUtil = container.resolve<HashUtil>("HashUtil");
        this.displayCredits();

    }

    public postDBLoad(container: DependencyContainer): void 
    {

        const clonedItemsToAdd: NewItemFromCloneDetails[] = [
            WhiteDeathMaskItemToClone,
            winterTrooperFASTMTFromClone
        ];

        clonedItemsToAdd.forEach(item =>
        {
            this.customItemService.createItemFromClone(item);
        })

        this.database = this.databaseServer.getTables();
        const itemPresets = this.database.globals.ItemPresets;
        const newPresets: Preset[] = [
            winterFASTMTPreset
        ]

        newPresets.forEach(preset => {
            itemPresets[preset._id] = preset
        })
    }

    private displayCredits() 
    {
        this.logger.logWithColor(
            `[${this.modName}] *********************************************`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
        this.logger.logWithColor(
            `[${this.modName}] ***** ${this.modName} - ${this.version} ********`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
        this.logger.logWithColor(
            `[${this.modName}] **** My first mod to bring to you guys. *****`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
        this.logger.logWithColor(
            `[${this.modName}] **** Developers:           MadManBeavis *****`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
        this.logger.logWithColor(
            `[${this.modName}] **** Be gentile it's my first time ;) *******`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
        this.logger.logWithColor(
            `[${this.modName}] *********************************************`,
            LogTextColor.GREEN, LogBackgroundColor.BLUE
        );
    }   
}

export const mod = new Mod();
