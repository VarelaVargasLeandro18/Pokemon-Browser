import { API_USED_PAGES } from '@/constants/constants';
import { IUseSearchReturn, useSearch } from '@/lib/hooks/useSearch';
import Card, { ICardProperties } from '../card/Card';
import Spinner from '../../spinner/Spinner';
import { IPokemon } from './IPokemon';
import ICardProp from '../ICardProp';

export function PokemonCard ( { name } : ICardProp ) {
    const {data, isLoading, error} = useSearch( { page: API_USED_PAGES.pokemon, name: name } ) as IUseSearchReturn<IPokemon>;
    
    if ( !data ) return <><Spinner/></>

    const cardProperties : ICardProperties = {
        imagen: data.sprites.front_default,
        title: data.name,
        subtitleItems: data.types.map( type => type.type.name ),
        items: data.stats.map( stat => { return { title: stat.stat.name, info: stat.base_stat } } )
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