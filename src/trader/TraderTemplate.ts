import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables"
import { ITraderConfig } from "@spt/models/spt/config/ITraderConfig"
import { References } from "../resources/References"
import { TraderUtils } from "../Utils/TraderUtilities"

import * as baseJson from "../../db/base.json"
import * as assortJson from "../../db/assort.json"

export class TraderData {
    mod: string

    constructor(private traderConfig: ITraderConfig, private ref: References, private traderHelper: TraderUtils) {
        this.mod = "madmanbeavis-borealmuruaders"
    }

    public registerProfileImage(): void {
        const imageFilepath = `./${this.ref.preSptModLoader.getModPath(this.mod)}res`

        this.ref.imageRouter.addRoute(baseJson.avatar.replace(".png", ""), `${imageFilepath}/frostbite.png`)
    }

    public setupTraderUpdateTime(): void {
        this.traderHelper.setTraderUpdateTime(this.traderConfig, baseJson, 1800, 7200)
    }

    public pushTrader(): void {
        this.traderHelper = new TraderUtils(this.ref)
        
        this.traderHelper.addTraderToDb(baseJson, assortJson, this.ref.tables, this.ref.jsonUtil)
    }

    public addTraderToLocales(tables: IDatabaseTables, fullName: string, firstName: string, nickName: string, location: string, description: string): void {
        const locales = Object.values(tables.locales.global) as Record<string, string>[]
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName
            locale[`${baseJson._id} FirstName`] = firstName
            locale[`${baseJson._id} Nickname`] = nickName
            locale[`${baseJson._id} Location`] = location
            locale[`${baseJson._id} Description`] = description
        }
    }
}