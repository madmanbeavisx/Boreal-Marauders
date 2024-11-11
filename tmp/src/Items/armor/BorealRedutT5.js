"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borealRedutT5Preset = exports.borealRedutT5FromClone = void 0;
const ItemMap_1 = require("../../resources/ItemMap");
const CustomItemMap_1 = require("../../resources/CustomItemMap");
const borealRedutT5Props = {
    Name: "boreal_redut_t5",
    ShortName: "boreal_redut_t5",
    Description: "boreal_redut_t5",
    Rarity: "Superrare",
    BackgroundColor: "blue",
    Prefab: {
        path: "armor/boreal_redut_t5.bundle",
        rcid: ""
    },
    speedPenaltyPercent: -10,
    mousePenalty: -1.75,
    weaponErgonomicPenalty: -4,
    RagFairCommissionModifier: 1,
    CanSellOnRagfair: true,
    CanRequireOnRagfair: true
};
exports.borealRedutT5FromClone = {
    fleaPriceRoubles: 470000,
    itemTplToClone: ItemMap_1.ItemMap.ARMOR_REDUTT5,
    overrideProperties: borealRedutT5Props,
    parentId: "5448e54d4bdc2dcc718b4568",
    newId: CustomItemMap_1.CustomItemMap.BOREAL_REDUT_T5,
    handbookPriceRoubles: 7343,
    handbookParentId: "5b5f701386f774093f2ecf0f",
    locales: {
        en: {
            name: "Boreal Redut-T5 body armor (Boreal)",
            shortName: "Redut-T5 Boreal",
            description: "The Boreal \"Redut T5\" armor vest is a reinforced version of the Redut armor series, designed with input from specialized units operating in harsh arctic conditions. The Boreal version features advanced cold-weather camouflage and insulation, ideal for combat operations in snow-covered environments. Designed for durability and protection."
        }
    }
};
exports.borealRedutT5Preset = {
    _changeWeaponName: false,
    _encyclopedia: CustomItemMap_1.CustomItemMap.BOREAL_REDUT_T5,
    _id: "67049a92e0e2ca0e925d263a",
    _items: [
        {
            _id: "67049aad556b2fe12df324f4",
            _tpl: CustomItemMap_1.CustomItemMap.BOREAL_REDUT_T5
        },
        {
            _id: "67049b2b3bf9fa33fb482fad",
            _tpl: "65573fa5655447403702a816",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Front_plate"
        },
        {
            _id: "67049b5cdb6a5d7ea6155c3a",
            _tpl: "65573fa5655447403702a816",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Back_plate"
        },
        {
            _id: "67049b5d3627725ea5771477",
            _tpl: "64afd81707e2cf40e903a316",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Left_side_plate"
        },
        {
            _id: "67049b60863675569b26e130",
            _tpl: "64afd81707e2cf40e903a316",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Right_side_plate"
        },
        {
            _id: "67049b61771db30338ee6a82",
            _tpl: "6575d9a79e27f4a85e08112d",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Soft_armor_front"
        },
        {
            _id: "67049bbd70972c0a6d0c07aa",
            _tpl: "6575d9b8945bf78edd04c427",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Soft_armor_back"
        },
        {
            _id: "67049bbff44a5bd0334246ec",
            _tpl: "6575d9c40546f8b1de093dee",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Soft_armor_left"
        },
        {
            _id: "67049bc06c64fbdf613493c0",
            _tpl: "6575d9cf0546f8b1de093df2",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "soft_armor_right"
        },
        {
            _id: "67049bc13cde3c648fa2ad5c",
            _tpl: "6575d9d8945bf78edd04c42b",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Collar"
        },
        {
            _id: "67049c14aab29c61a5585f43",
            _tpl: "6575da07945bf78edd04c433",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Shoulder_l"
        },
        {
            _id: "67049c167459bad44eb3dd98",
            _tpl: "6575da159e27f4a85e081131",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Shoulder_r"
        },
        {
            _id: "67049c178b7acbbcc4ea38d5",
            _tpl: "6575d9e7945bf78edd04c42f",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Groin"
        },
        {
            _id: "67049c188b1b5314b6ea4893",
            _tpl: "6575d9f816c2762fba00588d",
            parentId: "67049aad556b2fe12df324f4",
            slotId: "Groin_back"
        }
    ],
    _name: "Boreal Redut-T5 body armor",
    _parent: "67049aad556b2fe12df324f4",
    _type: "Preset"
};
