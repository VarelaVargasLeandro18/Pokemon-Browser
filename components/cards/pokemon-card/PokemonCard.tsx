import { API_USED_PAGES } from '@/constants/constants';
import { IUseSearchReturn, useSearch } from '@/lib/hooks/useSearch';
import { Card, ICardProperties } from '../card/Card';
import Spinner from '../../spinner/Spinner';
import { IPokemon } from './IPokemon';

export interface IPokemonCardProp {
    name: string
}

export function PokemonCard ( { name } : IPokemonCardProp ) {
    const {response, isLoading, error} = useSearch( { page: API_USED_PAGES.pokemon, name: name } ) as IUseSearchReturn<IPokemon>;
    
    if ( !response ) return <><Spinner/></>

    const cardProperties : ICardProperties = {
        imagen: response.sprites.front_default,
        title: response.name,
        subtitleItems: response.types.map( type => type.type.name ),
        items: response.stats.map( stat => { return { title: stat.stat.name, info: stat.base_stat } } )
    }

    return (
        <>
            {
                response?
                <Card {...cardProperties}/>
                :
                <Spinner/>
            }
        </>
    )

}