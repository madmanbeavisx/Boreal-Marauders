"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const baseJson = __importStar(require("../db/base.json"));
const ItemUtilities_1 = require("./Utils/ItemUtilities");
const References_1 = require("./resources/References");
const ConfigTypes_1 = require("@spt/models/enums/ConfigTypes");
const TraderUtilities_1 = require("./Utils/TraderUtilities");
const TraderTemplate_1 = require("./trader/TraderTemplate");
const Traders_1 = require("@spt/models/enums/Traders");
class Mod {
    modName = "Boreal Marauders";
    version = "0.7.5";
    oldVersionDirectory = "madmanbeavis-wintersdeathgear";
    debug = false;
    ref = new References_1.References();
    preSptLoad(container) {
        this.ref.preSptLoad(container);
        this.ref.modName = this.modName;
        this.ref.version = this.version;
        this.ref.debug = this.debug;
        const ragfair = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderUtils = new TraderUtilities_1.TraderUtils(this.ref);
        const traderData = new TraderTemplate_1.TraderData(traderConfig, this.ref, traderUtils);
        this.checkForOldVersionFolders();
        this.ref.customDebugLogger("Registering Frostbite Image.");
        traderData.registerProfileImage();
        this.ref.customDebugLogger("Frostbite: setupTraderUpdateTime");
        traderData.setupTraderUpdateTime();
        this.ref.customDebugLogger("Adding Frostbite to ragfair.");
        Traders_1.Traders[baseJson._id] = baseJson._id;
        ragfair.traders[baseJson._id] = true;
        this.displayCredits();
    }
    postDBLoad(container) {
        this.ref.postDBLoad(container);
        this.ref.itemUtilities = new ItemUtilities_1.ItemUtilities(container);
        // Let's add out items that we are cloning to the database.
        this.ref.itemUtilities.addCustomItems();
        // Lets add our item presets to the database.
        this.ref.itemUtilities.addCustomITemPresets();
        // Let's modify the filters of the existing items to add our new items.
        this.ref.itemUtilities.refreshDatabase();
        this.ref.itemUtilities.doEditsToItemFilters();
        this.ref.itemUtilities.doCustomBackpackStashResize();
        this.ref.customDebugLogger("Finished adding Items");

        // Add clothing
        this.ref.itemUtilities.addCustomClothing();
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderUtils = new TraderUtilities_1.TraderUtils(this.ref);
        const traderData = new TraderTemplate_1.TraderData(traderConfig, this.ref, traderUtils);
        this.ref.customDebugLogger("Pushing Frostbite Trader");
        traderData.pushTrader();
        this.ref.customDebugLogger("Pushed Frostbite Trader");
        this.ref.customDebugLogger("Adding Frostbite to locales.");
        traderData.addTraderToLocales(this.ref.tables, baseJson.name, "Victor", baseJson.nickname, baseJson.location, "Viktor \"Frostbite\" Mikhailovich Morozov is a former Spetsnaz operative with a reputation as cold and unrelenting as the Novinsk winters he was trained in. Standing tall with piercing, ice-blue eyes, his presence alone chills those around him. Known for his calculated precision in both combat and strategy, Viktor earned the codename Frostbite due to his ruthless efficiency and ability to outlast even the harshest conditions. His loyalty lies only with his brothers-in-arms, the Boreal Marauders, where he leads with a frozen resolve, making him both feared and respected in the unforgiving world of Tarkov.");
        this.ref.customDebugLogger("Added Frostbite to locales.");
        this.displayDoneMessage();
    }

    displayCredits() {
        this.ref.customLogger("*********************************************");
        this.ref.customLogger(`***** ${this.modName} - ${this.version} **************`);
        this.ref.customLogger("**** Developers:           MadManBeavis *****");
        this.ref.customLogger("*********************************************");
    }
    displayDoneMessage() {
        this.ref.customLogger(`Thank you for using ${this.modName} please report any issues.`);
    }
    checkForOldVersionFolders() {
        const currentDirectory = process.cwd();
        const targetDirectory = path.join(currentDirectory, "user/mods");
        const folderToRemove = path.join(targetDirectory, this.oldVersionDirectory);
        if (fs.existsSync(folderToRemove)) {
            this.ref.customDebugLogger("User is using version older than 0.3.5 removing directory.");
            fs.promises.rm(folderToRemove, { recursive: true, force: true })
                .then(() => {
                this.ref.customLogger("Successfully removed the older version.");
            })
                .catch((error) => {
                this.ref.customLogger(`Error removing folder: ${error.message}`);
            });
        }
        else {
            this.ref.customDebugLogger("Thank you for using the current version for this mod.");
        }
    }
}
exports.mod = new Mod();
