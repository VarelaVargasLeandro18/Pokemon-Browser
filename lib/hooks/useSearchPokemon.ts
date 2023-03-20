import { LIMIT_PAGES, PAGE_LIMIT, POKEMON_SEARCH_URL } from '@/constants/constants';
import useSWR from 'swr';

export interface ISearchPokemon {
    pokemonName? : string,
    offset : number
}

const getPokemonURLSearch = ( pokemonName? : string, offset = 0 ) => {
    if (!pokemonName) return `${POKEMON_SEARCH_URL}/${LIMIT_PAGES( offset, PAGE_LIMIT )}`;

    return `${POKEMON_SEARCH_URL}/${pokemonName}`;
}

const fetcher = (url : string) => fetch(url).then(r => r.json());

export function useSearchPokemon ( { pokemonName, offset } : ISearchPokemon ) {
    const { data, error, isLoading } = useSWR( getPokemonURLSearch( pokemonName, offset ), fetcher );

    return {
        pokemons : data,
        error,
        isLoading
    }
}