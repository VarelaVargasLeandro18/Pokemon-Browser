import Spinner from "@/components/spinner/Spinner";
import { useEffect, useState } from "react";
import ICardProp from "../ICardProp";
import Card, { ICardProperties } from "../card/Card";
import { IItem } from "../item-card/IItem";
import { IMachine } from "./IMachine";

export default function MachineCard ( { name } : ICardProp  ) {
    const [machine, setMachine] = useState<IMachine | undefined>(undefined);
    const [item, setItem] = useState<IItem | undefined>(undefined);

    useEffect( () => {
        if (!name) return

        fetch( name )
            .then( resultMachine => resultMachine.json() )
            .then( (machine : IMachine) => setMachine(machine) )

    }, [] );

    useEffect( () => {
        if (!machine) return

        fetch( machine.item.url )
            .then( resultItem => resultItem.json() )
            .then( (item : IItem) => setItem(item) )

    }, [machine?.item.url] );

    if ( !machine || !item ) return <><Spinner/></>

    const cardProperties : ICardProperties = {
        imagen: item.sprites.default,
        title: item.name,
        subtitleItems: [],
        items: [
            { title: 'Move', info: machine.move.name },
            { title: 'Cost', info: item.cost },
            { title: 'Category', info: item.category.name }
        ]
    }

    return (
        <>
            <Card {...cardProperties}/>
        </>
    )

}