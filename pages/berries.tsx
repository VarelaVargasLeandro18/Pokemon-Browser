import BerryCard from "@/components/cards/berry-card/BerryCard";
import Container from "@/components/container/Container";
import IntersectionObserverWrapper from "@/components/intersection-observer-wrapper/IntersectionObserverWrapper";
import Spinner from "@/components/spinner/Spinner";
import { API_USED_PAGES } from "@/constants/constants";
import { useSearchInfinite } from "@/lib/hooks/useSearch";

export default function BerriesPage() {
    const {data, error, isLoading, setSize, size} = useSearchInfinite( API_USED_PAGES.berry );

    const nextPage = () => {
        setSize( size + 1 );
    }

    return (
        <Container>
            { 
                data?
                data.map( (pageResults : any, indexPage : number) => pageResults.results.map( (berry : any, index: number) => {
                    if ( indexPage === data.length -1 && index === pageResults.results.length -1 ) {                        
                        return (
                            <IntersectionObserverWrapper key={ `${berry.name}_wrapper` } intersectionObserverCallback={nextPage} >
                                <BerryCard key={berry.name} name={berry.name}/>
                            </IntersectionObserverWrapper>
                        )
                    }
                    return <BerryCard key={berry.name} name={berry.name}/>
                } ) )
                :
                <Spinner/>
            }
        </Container>
    )
}