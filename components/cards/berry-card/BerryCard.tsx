import { IUseSearchReturn, useSearch } from "@/lib/hooks/useSearch";
import ICardProp from "../ICardProp";
import { IBerry } from "./IBerry";
import { API_USED_PAGES } from "@/constants/constants";
import Card, { ICardProperties } from "../card/Card";
import Spinner from "@/components/spinner/Spinner";

export default function BerryCard ( {name} : ICardProp ) {
    const {data, isLoading, error} = useSearch<IBerry>( { page: API_USED_PAGES.berry, name: name } );

    if ( !data ) return <><Spinner/></>

    const cardProperties : ICardProperties = {
        title: data.name,
        subtitleItems: data.flavors.filter( flavor => flavor.potency > 0 ).map( flavor => flavor.flavor.name ),
        items: [
            { title: 'Smoothness', info: data.smoothness },
            { title: 'Growth Time', info: data.growth_time },
            { title: 'Size', info: data.size },
            { title: 'Soil Dryness', info: data.soil_dryness }
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