export enum API_USED_PAGES {
    pokemon = 'pokemon',
    berry = 'berry',
    machine = 'machine',
    item = 'item'
}

export const MAIN_URL = 'https://pokeapi.co/api/v2'
export const POKEMON_SEARCH_URL = `${MAIN_URL}/${API_USED_PAGES.pokemon}`;
export const BERRY_SEARCH_URL = `${MAIN_URL}/${API_USED_PAGES.berry}`;
export const MACHINE_SEARCH_URL = `${MAIN_URL}/${API_USED_PAGES.machine}`;
export const ITEM_SEARCH_URL = `${MAIN_URL}/${API_USED_PAGES.item}`;
export const LIMIT_PAGES = ( offset : number, limit : number ) => `?offset=${offset}&limit=${limit}`;
export const PAGE_LIMIT = 9;

//POKEMON_STATS
export const STATS_INDEXES = {
    hp: 0,
    attack: 1,
    defense: 2,
    specialAttack: 3,
    specialDefense: 4,
    speed: 5
}