import { IUseSearchPokemonReturn, useSearchPokemon } from '@/lib/hooks/useSearchPokemon';
import { IPokemon } from './IPokemon';
import styles from './PokemonCard.module.css';

export interface IPokemonCardProp {
    name: string
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export function PokemonCard ( { name } : IPokemonCardProp ) {
    const {pokemons, isLoading, error} = useSearchPokemon( { pokemonName: name } ) as IUseSearchPokemonReturn<IPokemon>;

    return (
        <div className={ styles.card }>
            {pokemons ?
            <>
            <img className={ styles.img } src={pokemons.sprites.front_default} alt="Avatar" />
            <div className={ styles.textContainer }>
                <h4 className={ styles.name }>{pokemons.name}</h4>
                <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                    {pokemons.types.map( (type, index) => <p key={ `${type}_${index}` } className={ styles.consolaFont }>{type.type.name}</p> )}
                </div>
                {pokemons.stats.map( stat => <p className={ styles.consolaFont }>{ `${stat.stat.name}: ${stat.base_stat}` }</p> )}
            </div>
            </>
            :
            <span>Wait</span>
            }
      </div> 
    )

}