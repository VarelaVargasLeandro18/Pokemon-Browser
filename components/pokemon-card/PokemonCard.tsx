import { API_USED_PAGES } from '@/constants/constants';
import { useSearch } from '@/lib/hooks/useSearch';
import { IUseSearchPokemonReturn } from '@/lib/hooks/useSearch';
import Spinner from '../spinner/Spinner';
import { IPokemon } from './IPokemon';
import styles from './PokemonCard.module.css';

export interface IPokemonCardProp {
    name: string
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export function PokemonCard ( { name } : IPokemonCardProp ) {
    const {pokemon, isLoading, error} = useSearch( { page: API_USED_PAGES.pokemon, name: name } ) as IUseSearchPokemonReturn<IPokemon>;
    
    return (
        <div className={ styles.card }>
            {
                pokemon ?
                <>
                    <img className={ styles.img } src={pokemon.sprites.front_default} alt="Avatar" />
                    <div className={ styles.textContainer }>
                        <h4 className={ styles.name }>{pokemon.name}</h4>
                        <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                            {pokemon.types.map( (type) => <p key={ `${pokemon.name}_${type.type.name}` } className={ styles.consolaFont }>{type.type.name}</p> )}
                        </div>
                        {pokemon.stats.map( stat => <p key={`${pokemon.name}_${stat.stat.name}`} className={ styles.consolaFont }>{ `${stat.stat.name}: ${stat.base_stat}` }</p> )}
                    </div>
                </>
                :
                <Spinner/>
            }
      </div> 
    )

}