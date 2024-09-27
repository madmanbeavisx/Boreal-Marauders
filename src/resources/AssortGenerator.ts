import {Item} from "@spt/models/eft/common/tables/IItem";
import {IBarterScheme, ITrader} from "@spt/models/eft/common/tables/ITrader";
import {Money} from "@spt/models/enums/Money";
import {ILogger} from "@spt/models/spt/utils/ILogger";
import {HashUtil} from "@spt/utils/HashUtil";

export class AssortGenerator {
    protected itemsToSell: Item[] = [];
    protected barterScheme: Record<string, IBarterScheme[][]> = {};
    protected loyaltyLevel: Record<string, number> = {};
    protected hashUtil: HashUtil;
    protected logger: ILogger;

    constructor(hashUtil: HashUtil, logger: ILogger) {
        this.hashUtil = hashUtil;
        this.logger = logger;
    }

    /**
     * Add a single item to the assortment.
     * @param itemTpl Template ID of the item to add.
     * @param itemId Optional custom ID for the item. If not provided, a unique ID will be generated.
     */
    public addItem(itemTpl: string, itemId: string = this.hashUtil.generate()): AssortGenerator {
        const newItem: Item = this.createItem(itemTpl, itemId);
        this.itemsToSell.push(newItem);
        return this;
    }

    /**
     * Add multiple items to the assortment.
     * @param items Array of items to add.
     */
    public addItems(items: Item[]): AssortGenerator {
        if (items.length === 0) {
            this.logger.warning("No items provided to addItems method.");
            return this;
        }

        items[0] = this.createItem(items[0]._tpl, items[0]._id);

        this.itemsToSell.push(...items);
        return this;
    }

    /**
     * Set stack count and unlimited status for the current item.
     * @param stackCount Stack count to set.
     * @param unlimited If true, set the stack count as unlimited.
     */
    public setStackCount(stackCount: number, unlimited = false): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item found to set stack count.");
            return this;
        }

        currentItem.upd.StackObjectsCount = stackCount;
        currentItem.upd.UnlimitedCount = unlimited;

        return this;
    }

    /**
     * Set a maximum buy restriction for the current item.
     * @param maxBuyLimit Maximum buy limit for the item.
     */
    public setBuyRestriction(maxBuyLimit: number): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item found to set buy restriction.");
            return this;
        }

        currentItem.upd.BuyRestrictionMax = maxBuyLimit;
        currentItem.upd.BuyRestrictionCurrent = 0;

        return this;
    }

    /**
     * Set loyalty level required for the current item.
     * @param level Loyalty level required.
     */
    public setLoyaltyLevel(level: number): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item found to set loyalty level.");
            return this;
        }

        this.loyaltyLevel[currentItem._id] = level;
        return this;
    }

    /**
     * Set money cost for the current item.
     * @param currencyType Currency type to use for the cost.
     * @param amount Amount of currency required.
     */
    public setMoneyCost(currencyType: Money, amount: number): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item found to set money cost.");
            return this;
        }

        this.barterScheme[currentItem._id] = [
            [
                {
                    count: amount,
                    _tpl: currencyType
                }
            ]
        ];

        return this;
    }

    /**
     * Set barter cost for the current item.
     * @param itemTpl Template ID of the barter item.
     * @param count Amount of barter items required.
     */
    public setBarterCost(itemTpl: string, count: number): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item found to set barter cost.");
            return this;
        }

        const sellableItemId = currentItem._id;

        if (!this.barterScheme[sellableItemId]) {
            this.barterScheme[sellableItemId] = [
                [
                    {
                        count: count,
                        _tpl: itemTpl
                    }
                ]
            ];
        } else {
            const existingBarter = this.barterScheme[sellableItemId][0].find(x => x._tpl === itemTpl);
            if (existingBarter) {
                existingBarter.count += count;
            } else {
                this.barterScheme[sellableItemId][0].push({
                    count: count,
                    _tpl: itemTpl
                });
            }
        }

        return this;
    }

    /**
     * Export the current assortment to the given trader.
     * @param data Trader object to which the assortment will be added.
     */
    public exportToTrader(data: ITrader): AssortGenerator {
        const currentItem = this.getCurrentItem();
        if (!currentItem) {
            this.logger.error("No current item to export to trader.");
            return this;
        }

        const itemBeingSoldId = currentItem._id;
        if (data.assort.items.find(x => x._id === itemBeingSoldId)) {
            this.logger.error(`Unable to add item with ID ${itemBeingSoldId}, ID already exists`);
            return this;
        }

        data.assort.items.push(...this.itemsToSell);
        data.assort.barter_scheme[itemBeingSoldId] = this.barterScheme[itemBeingSoldId];
        data.assort.loyal_level_items[itemBeingSoldId] = this.loyaltyLevel[itemBeingSoldId];

        this.reset();
        return this;
    }

    /**
     * Create a new item with default properties.
     * @param itemTpl Template ID of the item.
     * @param itemId Unique ID of the item.
     */
    private createItem(itemTpl: string, itemId: string): Item {
        return {
            _id: itemId,
            _tpl: itemTpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: false,
                StackObjectsCount: 100
            }
        };
    }

    /**
     * Get the current item being processed.
     */
    private getCurrentItem(): Item | undefined {
        if (this.itemsToSell.length === 0) return undefined;
        return this.itemsToSell[0];
    }

    /**
     * Reset internal state of the class.
     */
    private reset(): AssortGenerator {
        this.itemsToSell = [];
        this.barterScheme = {};
        this.loyaltyLevel = {};
        return this;
    }
}
