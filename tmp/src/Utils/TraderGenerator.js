"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderGenerator = void 0;
class TraderGenerator {
    registerProfileImage(baseJson, modName, preSptModLoader, imageRouter, traderImageName) {
        const imageFilepath = `./${preSptModLoader.getModPath(modName)}res`;
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }
    configureTraderRefreshInterval(traderConfig, traderDetails, minRefreshSeconds, maxRefreshSeconds) {
        const traderRefreshRecord = {
            traderId: traderDetails._id,
            seconds: {
                min: minRefreshSeconds,
                max: maxRefreshSeconds
            }
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    addTraderToDb(traderDetails, tables, jsonUtil) {
        try {
            if (!traderDetails._id) {
                console.error("Trader ID is missing, cannot add to database.");
                return;
            }
            tables.traders[traderDetails._id] = {
                assort: this.createAssortTable(),
                base: this.createTraderBaseRecord(traderDetails, jsonUtil),
                questassort: this.createEmptyQuestAssort()
            };
        }
        catch (error) {
            console.error("Failed to add trader to database:", error);
        }
    }
    createTraderBaseRecord(traderDetails, jsonUtil) {
        return jsonUtil.deserialize(jsonUtil.serialize(traderDetails));
    }
    createAssortTable() {
        return {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
    }
    createEmptyQuestAssort() {
        return {
            started: {},
            success: {},
            fail: {}
        };
    }
    addTraderToLocales(baseJson, tables, fullName, firstName, nickName, location, description) {
        Object.values(tables.locales.global).forEach((locale) => {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        });
    }
}
exports.TraderGenerator = TraderGenerator;
