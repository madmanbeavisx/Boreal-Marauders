import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import * as fs from "fs";
import * as path from "path";
import * as baseJson from "../db/base.json"
import { ItemUtilities } from "./Utils/ItemUtilities";
import { References } from "./resources/References";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig";
import { TraderUtils } from "./Utils/TraderUtilities";
import { TraderData } from "./trader/TraderTemplate";
import { Traders } from "@spt/models/enums/Traders";

class Mod implements IPreSptLoadMod, IPostDBLoadMod {
    public modName: string = "Boreal Marauders";
    public version: string = "0.5.0";
    public oldVersionDirectory: string = "madmanbeavis-wintersdeathgear"
    private debug: boolean = false;

    private ref: References = new References();

    public preSptLoad(container: DependencyContainer): void {
        this.ref.preSptLoad(container);
        this.ref.modName = this.modName;
        this.ref.version = this.version;
        this.ref.debug = this.debug;
        const ragfair: any = this.ref.configServer.getConfig(ConfigTypes.RAGFAIR);
        const traderConfig: ITraderConfig = this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const traderUtils = new TraderUtils(this.ref);
        const traderData = new TraderData(traderConfig, this.ref, traderUtils);
        
        this.checkForOldVersionFolders();

        this.ref.customDebugLogger("Registering Frostbite Image.")
        traderData.registerProfileImage()

        this.ref.customDebugLogger("Frostbite: setupTraderUpdateTime")
        traderData.setupTraderUpdateTime()

        this.ref.customDebugLogger("Adding Frostbite to ragfair.")
        Traders[baseJson._id] = baseJson._id;
        ragfair.traders[baseJson._id] = true;

        this.displayCredits();
    }
    
    public postDBLoad(container: DependencyContainer): void {
        this.ref.postDBLoad(container);

        this.ref.itemUtilities = new ItemUtilities(container);
        // Let's add out items that we are cloning to the database.
        this.ref.itemUtilities.addCustomItems();
        
        // Lets add our item presets to the database.
        this.ref.itemUtilities.addCustomITemPresets();        
        
        // Let's modify the filters of the existing items to add our new items.
        this.ref.itemUtilities.refreshDatabase();
        this.ref.itemUtilities.doEditsToItemFilters(); 
        this.ref.itemUtilities.doCustomBackpackStashResize();

        this.ref.customDebugLogger("Finished adding Items")

        const traderConfig: ITraderConfig = this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER)
        const traderUtils = new TraderUtils(this.ref)
        const traderData = new TraderData(traderConfig, this.ref, traderUtils)

        this.ref.customDebugLogger("Pushing Frostbite Trader")
        traderData.pushTrader();
        this.ref.customDebugLogger("Pushed Frostbite Trader")

        this.ref.customDebugLogger("Adding Frostbite to locales.")
        traderData.addTraderToLocales(this.ref.tables, baseJson.name, "Victor", baseJson.nickname, baseJson.location, "Viktor \"Frostbite\" Mikhailovich Morozov is a former Spetsnaz operative with a reputation as cold and unrelenting as the Novinsk winters he was trained in. Standing tall with piercing, ice-blue eyes, his presence alone chills those around him. Known for his calculated precision in both combat and strategy, Viktor earned the codename Frostbite due to his ruthless efficiency and ability to outlast even the harshest conditions. His loyalty lies only with his brothers-in-arms, the Boreal Marauders, where he leads with a frozen resolve, making him both feared and respected in the unforgiving world of Tarkov.")
        this.ref.customDebugLogger("Added Frostbite to locales.")

        this.displayDoneMessage();
    }

    private displayCredits() {
        this.ref.customLogger("*********************************************");
        this.ref.customLogger(`***** ${this.modName} - ${this.version} **************`);
        this.ref.customLogger("**** My first mod to bring to you guys. *****");
        this.ref.customLogger("**** Developers:           MadManBeavis *****");
        this.ref.customLogger("**** Be gentile it's my first time ;) *******");
        this.ref.customLogger("*********************************************");
        this.ref.customLogger("*********************************************");

        this.ref.customLogger("**** Let's finally give a welcome to: *******");
        this.ref.customLogger("**************************************************************************");
        this.ref.customLogger("* ███████╗██████╗  ██████╗ ███████╗████████╗██████╗ ██╗████████╗███████╗ *");
        this.ref.customLogger("* ██╔════╝██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔══██╗██║╚══██╔══╝██╔════╝ *");
        this.ref.customLogger("* █████╗  ██████╔╝██║   ██║███████╗   ██║   ██████╔╝██║   ██║   █████╗   *");
        this.ref.customLogger("* ██╔══╝  ██╔══██╗██║   ██║╚════██║   ██║   ██╔══██╗██║   ██║   ██╔══╝   *");
        this.ref.customLogger("* ██║     ██║  ██║╚██████╔╝███████║   ██║   ██████╔╝██║   ██║   ███████╗ *");
        this.ref.customLogger("* ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═════╝ ╚═╝   ╚═╝   ╚══════╝ *");                                                           
        this.ref.customLogger("**************************************************************************");
    } 

    private displayDoneMessage() {
        this.ref.customLogger(`Thank you for using ${this.modName} please report any issues.`)
    }

    private checkForOldVersionFolders() {
        const currentDirectory = process.cwd();
        const targetDirectory = path.join(currentDirectory, "user/mods");
        const folderToRemove = path.join(targetDirectory, this.oldVersionDirectory);

        if (fs.existsSync(folderToRemove)) {
            this.ref.customDebugLogger("User is using version older than 0.3.5 removing directory.")
            fs.promises.rm(folderToRemove, { recursive: true, force: true })
                .then(() => {
                    this.ref.customLogger("Successfully removed the older version.");
                })
                .catch((error) => {
                    this.ref.customLogger(`Error removing folder: ${error.message}`);
                });
        }
        else {
            this.ref.customDebugLogger("Thank you for using the current version for this mod.")
        }        
    }
}

export const mod = new Mod();
