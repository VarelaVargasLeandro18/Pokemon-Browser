import { PokemonCard } from "@/components/pokemon-card/PokemonCard";
import { useSearchPokemons } from "@/lib/hooks/useSearchPokemon";
import styles from '../styles/Pokemon.module.css';

export default function PokemonPage () {
    const {data, error, isLoading, setSize, size} = useSearchPokemons();

    const nextPage = () => {
        setSize( size + 1 );
    }

    return (
        <div className={ styles.container }>
            { 
                data?
                data.map( (pageResults : any, indexPage : number) => pageResults.results.map( (pokemon : any, index: number) => {
                    if ( indexPage === data.length -1 && index === pageResults.results.length -1 ) {                        
                        return <PokemonCard intersectionObserverCallback={nextPage} key={pokemon.name} name={pokemon.name}/>
                    }
                    return <PokemonCard key={pokemon.name} name={pokemon.name}/>
                } ) )
                :
                <span>Wait...</span>
            }
        </div>
    );
}