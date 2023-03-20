export const POKEMON_SEARCH_URL = 'https://pokeapi.co/api/v2/pokemon';
export const LIMIT_PAGES = ( offset : number, limit : number ) => `?offset=${offset}&limit=${limit}`;
export const PAGE_LIMIT = 10;

export const STATS_INDEXES = {
    hp: 0,
    attack: 1,
    defense: 2,
    specialAttack: 3,
    specialDefense: 4,
    speed: 5
}