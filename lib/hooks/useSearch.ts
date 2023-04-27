import { API_USED_PAGES, LIMIT_PAGES, MAIN_URL, PAGE_LIMIT, POKEMON_SEARCH_URL } from "@/constants/constants";
import useSWRInfinite from 'swr/infinite';
import useSWR from 'swr';
import { fetcher } from "../fetcher";

export interface ISearch {
    page : API_USED_PAGES,
    name? : string
}

export interface IUseSearchReturn<Type> {
    data?: Type,
    error: any,
    isLoading: any,
    next: any
}

export interface IPokeApiCollectionGeneralResponse<Type> {
    count: number,
    next?: string,
    previous?: string,
    results: Type[]
}

export interface IUseSearchInfiniteReturn<Type> {
    data?: IPokeApiCollectionGeneralResponse<Type>[],
    size: number,
    setSize: (size: number | ((_size: number) => number)) => Promise<any[] | undefined>,
    error: any,
    isLoading: boolean
}

const getURLSearch = ( page : API_USED_PAGES, name? : string, offset = 0 ) => {
    if (!name) return `${MAIN_URL}/${page}/${LIMIT_PAGES( offset, PAGE_LIMIT )}`;

    return `${MAIN_URL}/${page}/${name}`;
}

export function useSearch ( { page, name } : ISearch ) {
    const { data, error, isLoading } = useSWR( getURLSearch( page, name ), fetcher );

    return {
        data,
        error,
        isLoading
    }
}

export function useSearchInfinite ( page : API_USED_PAGES) {
    const { data, size, setSize, error, isLoading } = 
        useSWRInfinite( (pageIndex : number) => getURLSearch( page, "", pageIndex * PAGE_LIMIT ), fetcher );

    return {
        data: data,
        size,
        setSize,
        error,
        isLoading
    }
}