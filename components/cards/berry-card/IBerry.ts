export interface IBerry {
    name: string,
    flavors: IFlavor[],
    growth_time: number,
    size: number,
    smoothness: number,
    soil_dryness: number
}

export interface IFlavorData {
    name: string
}

export interface IFlavor {
    flavor: IFlavorData,
    potency: number
}