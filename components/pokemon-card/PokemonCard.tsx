import { API_USED_PAGES } from '@/constants/constants';
import { IUseSearchReturn, useSearch } from '@/lib/hooks/useSearch';
import Spinner from '../spinner/Spinner';
import { IPokemon } from './IPokemon';
import styles from './PokemonCard.module.css';

export interface IPokemonCardProp {
    name: string
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export function PokemonCard ( { name } : IPokemonCardProp ) {
    const {response, isLoading, error} = useSearch( { page: API_USED_PAGES.pokemon, name: name } ) as IUseSearchReturn<IPokemon>;
    
    return (
        <div className={ styles.card }>
            {
                response ?
                <>
                    <img className={ styles.img } src={response.sprites.front_default} alt="Avatar" />
                    <div className={ styles.textContainer }>
                        <h4 className={ styles.name }>{response.name}</h4>
                        <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                            {response.types.map( (type) => <p key={ `${response.name}_${type.type.name}` } className={ styles.consolaFont }>{type.type.name}</p> )}
                        </div>
                        {response.stats.map( stat => <p key={`${response.name}_${stat.stat.name}`} className={ styles.consolaFont }>{ `${stat.stat.name}: ${stat.base_stat}` }</p> )}
                    </div>
                </>
                :
                <Spinner/>
            }
      </div> 
    )

}