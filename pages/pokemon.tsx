import { IPokemonCardProp, PokemonCard } from "@/components/pokemon-card/PokemonCard";
import { useSearchPokemon } from "@/lib/hooks/useSearchPokemon";
import styles from '../styles/Pokemon.module.css';

export default function PokemonPage () {
    const {pokemons, error, isLoading} = useSearchPokemon({ offset: 0 });

    return (
        <div className={ styles.container }>
            { (isLoading) ? 
                <span>Wait</span> : 
                pokemons.results.map( (pokemon : any) => <PokemonCard key={pokemon.name} name={pokemon.name}/> )}
        </div>
    );
}