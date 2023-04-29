import { IShortItem } from "../item-card/IItem"

export interface IBerry {
    name: string,
    flavors: IFlavor[],
    growth_time: number,
    size: number,
    smoothness: number,
    soil_dryness: number,
    item: IShortItem
}

export interface IFlavorData {
    name: string
}

export interface IFlavor {
    flavor: IFlavorData,
    potency: number
}

export interface IBerryImage {
    sprites: {
        default: string
    }
}