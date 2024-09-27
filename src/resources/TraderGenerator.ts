import { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import { ITraderBase, ITraderAssort } from "@spt/models/eft/common/tables/ITrader";
import { ITraderConfig, UpdateTime } from "@spt/models/spt/config/ITraderConfig";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ImageRouter } from "@spt/routers/ImageRouter";
import { JsonUtil } from "@spt/utils/JsonUtil";
import { ITraderDetails } from "./utilities";

export class TraderGenerator {
    public registerProfileImage(
        baseJson: ITraderDetails, 
        modName: string, 
        preSptModLoader: PreSptModLoader, 
        imageRouter: ImageRouter, 
        traderImageName: string
    ): void {
        const imageFilepath = `./${preSptModLoader.getModPath(modName)}res`;
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }

    public configureTraderRefreshInterval(
        traderConfig: ITraderConfig, 
        traderDetails: ITraderDetails, 
        minRefreshSeconds: number, 
        maxRefreshSeconds: number
    ): void {
        const traderRefreshRecord: UpdateTime = {
            traderId: traderDetails._id,
            seconds: {
                min: minRefreshSeconds,
                max: maxRefreshSeconds
            }
        };

        traderConfig.updateTime.push(traderRefreshRecord);
    }

    public addTraderToDb(
        traderDetails: ITraderDetails, 
        tables: IDatabaseTables, 
        jsonUtil: JsonUtil
    ): void {
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
        } catch (error) {
            console.error("Failed to add trader to database:", error);
        }
    }

    private createTraderBaseRecord(traderDetails: ITraderDetails, jsonUtil: JsonUtil): ITraderBase {
        return jsonUtil.deserialize(jsonUtil.serialize(traderDetails)) as ITraderBase;
    }

    private createAssortTable(): ITraderAssort {
        return {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
    }

    private createEmptyQuestAssort(): any {
        return {
            started: {},
            success: {},
            fail: {}
        };
    }

    public addTraderToLocales(
        baseJson: ITraderDetails, 
        tables: IDatabaseTables, 
        fullName: string, 
        firstName: string, 
        nickName: string, 
        location: string, 
        description: string
    ): void {
        Object.values(tables.locales.global).forEach((locale) => {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        });
    }
}
