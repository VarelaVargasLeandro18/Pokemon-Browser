import { LIMIT_PAGES, PAGE_LIMIT, POKEMON_SEARCH_URL } from '@/constants/constants';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../fetcher';

export interface ISearchPokemon {
    pokemonName? : string
}

export interface IUseSearchPokemonReturn<Type> {
    pokemon: Type,
    error: any,
    isLoading: any,
    next: any
}

const getPokemonURLSearch = ( {pokemonName = "", offset = 0} ) => {
    if (!pokemonName) return `${POKEMON_SEARCH_URL}/${LIMIT_PAGES( offset, PAGE_LIMIT )}`;

    return `${POKEMON_SEARCH_URL}/${pokemonName}`;
}

export function useSearchPokemon ( { pokemonName } : ISearchPokemon ) {
    const { data, error, isLoading } = useSWR( getPokemonURLSearch( {pokemonName} ), fetcher );

    return {
        pokemon: data,
        error,
        isLoading
    }
}

function getKey (pageIndex : number) {
    const url = getPokemonURLSearch( {offset: pageIndex * PAGE_LIMIT} );
    
    return url;
}

export function useSearchPokemons () {
    const { data, size, setSize, error, isLoading } = useSWRInfinite( getKey, fetcher );

    return {
        data: data,
        size,
        setSize,
        error,
        isLoading
    }
}