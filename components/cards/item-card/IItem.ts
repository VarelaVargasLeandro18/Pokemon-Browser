export interface IItem {
    name: string,
    cost: number,
    category: IItemCategory,
    sprites: IItemImage
}

export interface IShortItem {
    name: string,
    url: string
}

export interface IItemCategory {
    name: string,
    url: string
}

export interface IItemImage {
    default: string
}