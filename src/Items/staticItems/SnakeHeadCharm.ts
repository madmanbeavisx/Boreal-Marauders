import { IProps } from "@spt/models/eft/common/tables/ITemplateItem";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";

const snakeHeadCharmProps : IProps = {
    Prefab: {
        path: "staticitems/serpent_trinket.bundle",
        rcid: ""
    },
    CanSellOnRagfair: true,
    RagFairCommissionModifier: 1
}

export const snakeHeadCharmFromClone: NewItemFromCloneDetails = {
    itemTplToClone: "5f745ee30acaeb0d490d8c5b",
    overrideProperties: snakeHeadCharmProps,
    parentId: "57864a3d24597754843f8721",
    newId: "6718063b5c8733da95d886b6",
    fleaPriceRoubles: 60000,
    handbookPriceRoubles: 42356,
    handbookParentId: "5b47574386f77428ca22b2f1",
    locales: {
        en: {
            name: "Odd snake head charm.",
            shortName: "Snake",
            description: "This is a trinket that seems to be missing it's cain. It's eyes are a beautiful jade. Seems to have a mysterious energy about it as it stares back at you."
        }
    }
}