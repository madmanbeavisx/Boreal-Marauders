import { IProps } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { CustomItemMap } from "../../resources/CustomItemMap";

const borealD3CRXProps: IProps = {
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
    CanRequireOnRagfair: true
}

export const borealD3CRXFromClone: NewItemFromCloneDetails = {
    itemTplToClone: "5d5d85c586f774279a21cbdb",
    overrideProperties: borealD3CRXProps,
    parentId: "5448e5284bdc2dcb718b4567",
    newId: CustomItemMap.BOREAL_D3CRX,
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
}