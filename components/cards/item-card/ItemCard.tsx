import { useSearch } from "@/lib/hooks/useSearch";
import ICardProp from "../ICardProp";
import { IItem } from "./IItem";
import { API_USED_PAGES } from "@/constants/constants";
import Spinner from "@/components/spinner/Spinner";
import Card, { ICardProperties } from "../card/Card";

export default function ItemCard ( { name } : ICardProp ) {
    const {data, isLoading, error} = useSearch<IItem>( { page: API_USED_PAGES.item, name: name } );

    if ( !data ) return <><Spinner/></>

    const cardProperties : ICardProperties = {
        imagen: data.sprites.default,
        title: data.name,
        subtitleItems: [],
        items: [
            { title: 'Cost', info: data.cost },
            { title: 'Category', info: data.category.name }
        ]
    }

    return (
        <>
            {
                data?
                <Card {...cardProperties}/>
                :
                <Spinner/>
            }
        </>
    )

}