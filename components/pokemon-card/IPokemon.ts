export interface IPokemon {
    name: string,
    types: Type[],
    stats: Stat[],
    sprites : ISprites
}

interface ISprites {
    back_default?: string
    back_female?: string
    back_shiny?: string
    back_shiny_female?: string
    front_default?: string
    front_female?: string
    front_shiny?: string
    front_shiny_female?: string
}

interface Type {
    slot: number
    type: Type2
}
  
interface Type2 {
    name: string
    url: string
}

interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
}
  
interface Stat2 {
    name: string
    url: string
}
  