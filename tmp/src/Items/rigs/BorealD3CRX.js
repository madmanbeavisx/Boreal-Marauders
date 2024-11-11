"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borealD3CRXFromClone = void 0;
const ItemMap_1 = require("../../resources/ItemMap");
const borealD3CRXProps = {
    Prefab: {
        path: "rigs/boreal_d3crx.bundle",
        rcid: ""
    },
    Name: "Boreal_D3CRX",
    ShortName: "Boreal_D3CRX",
    Description: "Boreal_D3CRX",
    BackgroundColor: "blue",
    Rarity: "Superrare",
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true,
    BlocksArmorVest: true
};
exports.borealD3CRXFromClone = {
    itemTplToClone: ItemMap_1.ItemMap.VEST_D3CRX,
    overrideProperties: borealD3CRXProps,
    parentId: "5448e5284bdc2dcb718b4567",
    newId: "67077dd5451bb1d2b842908a",
    fleaPriceRoubles: 35000,
    handbookPriceRoubles: 31000,
    handbookParentId: "5b5f6f8786f77447ed563642",
    locales: {
        en: {
            name: "Boreal Tactical D3CRX Chest Harness",
            shortName: "Boreal D3CRX",
            description: "Originally designed for year-round PMC operations, the Haley Strategic D3CRX chest rig has been modified by Boreal Marauders for survival in the unforgiving winter wilderness. This rig ensures reliability and comfort, even in the harshest conditions. The optimized pouch system remains intact, supporting seamless access during long expeditions."
        }
    }
};
