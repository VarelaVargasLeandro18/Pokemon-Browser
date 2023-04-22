import Container from "@/components/container/Container";
import IntersectionObserverWrapper from "@/components/intersection-observer-wrapper/IntersectionObserverWrapper";
import { PokemonCard } from "@/components/pokemon-card/PokemonCard";
import Spinner from "@/components/spinner/Spinner";
import { API_USED_PAGES } from "@/constants/constants";
import { useSearchInfinite } from "@/lib/hooks/useSearch";

export default function PokemonPage () {
    const {data, error, isLoading, setSize, size} = useSearchInfinite( API_USED_PAGES.pokemon );

    const nextPage = () => {
        setSize( size + 1 );
    }

    return (
        <Container>
            { 
                data?
                data.map( (pageResults : any, indexPage : number) => pageResults.results.map( (pokemon : any, index: number) => {
                    if ( indexPage === data.length -1 && index === pageResults.results.length -1 ) {                        
                        return (
                            <IntersectionObserverWrapper key={ `${pokemon.name}_wrapper` } intersectionObserverCallback={nextPage} >
                                <PokemonCard key={pokemon.name} name={pokemon.name}/>
                            </IntersectionObserverWrapper>
                        )
                    }
                    return <PokemonCard key={pokemon.name} name={pokemon.name}/>
                } ) )
                :
                <Spinner/>
            }
        </Container>
    );
}