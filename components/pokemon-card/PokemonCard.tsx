import { IUseSearchPokemonReturn, useSearchPokemon } from '@/lib/hooks/useSearchPokemon';
import { useCallback, useEffect } from 'react';
import { IPokemon } from './IPokemon';
import styles from './PokemonCard.module.css';

export interface IPokemonCardProp {
    name: string,
    intersectionObserverCallback? : () => void
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export function PokemonCard ( { name, intersectionObserverCallback } : IPokemonCardProp ) {
    const {pokemon, isLoading, error} = useSearchPokemon( { pokemonName: name } ) as IUseSearchPokemonReturn<IPokemon>;
    let observer : IntersectionObserver;

    useEffect( () => {
        return () => observer?.disconnect();
    }, [] );

    const realObserverCallback = (e : IntersectionObserverEntry[]) => {
        if (!intersectionObserverCallback || !e[0].isIntersecting) return;
        intersectionObserverCallback();
        observer.disconnect();
    }
    
    const callback = useCallback( (node : Element) => {
        if (!intersectionObserverCallback || !node) return;

        const options : IntersectionObserverInit = {
            root: document.querySelector("body"),
            rootMargin: '50px',
            threshold: .5
        }

        observer = new IntersectionObserver( realObserverCallback, options );
        observer.observe(node);
    }, [] );

    return (
        <div className={ styles.card }>
            {pokemon ?
            <>
            <img ref={callback} className={ styles.img } src={pokemon.sprites.front_default} alt="Avatar" />
            <div className={ styles.textContainer }>
                <h4 className={ styles.name }>{pokemon.name}</h4>
                <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                    {pokemon.types.map( (type, index) => <p key={ `${pokemon.name}_${type.type.name}` } className={ styles.consolaFont }>{type.type.name}</p> )}
                </div>
                {pokemon.stats.map( stat => <p key={`${pokemon.name}_${stat.stat.name}`} className={ styles.consolaFont }>{ `${stat.stat.name}: ${stat.base_stat}` }</p> )}
            </div>
            </>
            :
            <span>Wait</span>
            }
      </div> 
    )

}