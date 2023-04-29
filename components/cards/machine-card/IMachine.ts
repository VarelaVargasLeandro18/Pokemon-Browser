import { IShortItem } from "../item-card/IItem";

export interface IMachine {
    item: IShortItem,
    move: IMachineMove
}

export interface IMachineMove {
    name: string
}