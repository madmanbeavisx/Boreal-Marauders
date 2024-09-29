import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import * as fs from "fs";
import * as path from "path";
import { InstanceManager } from "./Utils/InstanceManager";
import { ItemUtilities } from "./Utils/ItemUtilities";

class Mod implements IPreSptLoadMod, IPostDBLoadMod {
    public modName: string = "Boreal Marauders";
    public version: string = "0.3.2";
    private itemUtilities: ItemUtilities;
    public oldVersionDirectory: string = "madmanbeavis-wintersdeathgear"


    private instance: InstanceManager = new InstanceManager();


    public preSptLoad(container: DependencyContainer): void {
        this.instance.preSptLoad(container);
        this.checkForOldVersionFolders();
        this.displayCredits();
    }
    

    public postDBLoad(container: DependencyContainer): void {
        this.itemUtilities = new ItemUtilities(container);
        // Let's add out items that we are cloning to the database.
        this.itemUtilities.addCustomItems();
        
        // Lets add our item presets to the database.
        this.itemUtilities.addCustomITemPresets();        
        
        // Let's modify the filters of the existing items to add our new items.
        this.itemUtilities.refreshDatabase();
        this.itemUtilities.doEditsToItemFilters(); 

        this.displayDoneMessage();
    }

    

    private displayCredits() {
        this.instance.logger.log(`[${this.modName}] *********************************************`, LogTextColor.CYAN);
        this.instance.logger.log(`[${this.modName}] ***** ${this.modName} - ${this.version} ******`, LogTextColor.CYAN);
        this.instance.logger.log(`[${this.modName}] **** My first mod to bring to you guys. *****`, LogTextColor.CYAN);
        this.instance.logger.log(`[${this.modName}] **** Developers:           MadManBeavis *****`, LogTextColor.CYAN);
        this.instance.logger.log(`[${this.modName}] **** Be gentile it's my first time ;) *******`, LogTextColor.CYAN);
        this.instance.logger.log(`[${this.modName}] *********************************************`, LogTextColor.CYAN);
    } 

    private displayDoneMessage() {
        this.instance.logger.log(`[${mod.modName}] Thank you for using ${this.modName} please report any issues.`, LogTextColor.CYAN)
    }

    private checkForOldVersionFolders() {
        const currentDirectory = process.cwd();
        const targetDirectory = path.join(currentDirectory, "user/mods");
        const folderToRemove = path.join(targetDirectory, this.oldVersionDirectory);

        if (fs.existsSync(folderToRemove)) {
            this.instance.logger.debug(`[${mod.modName}] User is using version older than 0.3.5 removing directory.`)
            fs.promises.rm(folderToRemove, { recursive: true, force: true })
                .then(() => {
                    console.log(`Successfully removed folder: ${folderToRemove}`);
                })
                .catch((error) => {
                    console.error(`Error removing folder: ${error.message}`);
                });
        }
        else {
            this.instance.logger.debug(`[${mod.modName}] Thank you for using the current version for this mod.`)
        }        
    }
}

export const mod = new Mod();
