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
exports.TraderData = void 0;
const TraderUtilities_1 = require("../Utils/TraderUtilities");
const baseJson = __importStar(require("../../db/base.json"));
const assortJson = __importStar(require("../../db/assort.json"));
class TraderData {
    traderConfig;
    ref;
    traderHelper;
    mod;
    constructor(traderConfig, ref, traderHelper) {
        this.traderConfig = traderConfig;
        this.ref = ref;
        this.traderHelper = traderHelper;
        this.mod = "madmanbeavis-borealmuruaders";
    }
    registerProfileImage() {
        const imageFilepath = `./${this.ref.preSptModLoader.getModPath(this.mod)}res`;
        this.ref.imageRouter.addRoute(baseJson.avatar.replace(".png", ""), `${imageFilepath}/frostbite.png`);
    }
    setupTraderUpdateTime() {
        this.traderHelper.setTraderUpdateTime(this.traderConfig, baseJson, 1800, 7200);
    }
    pushTrader() {
        this.traderHelper = new TraderUtilities_1.TraderUtils(this.ref);
        this.traderHelper.addTraderToDb(baseJson, assortJson, this.ref.tables, this.ref.jsonUtil);
    }
    addTraderToLocales(tables, fullName, firstName, nickName, location, description) {
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderData = TraderData;
