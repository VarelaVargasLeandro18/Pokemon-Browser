import MachineCard from "@/components/cards/machine-card/MachineCard";
import Container from "@/components/container/Container";
import IntersectionObserverWrapper from "@/components/intersection-observer-wrapper/IntersectionObserverWrapper";
import Spinner from "@/components/spinner/Spinner";
import { API_USED_PAGES } from "@/constants/constants";
import { IPokeApiCollectionGeneralResponse, IResult, useSearchInfinite } from "@/lib/hooks/useSearch";

export default function MachinesPage () {
    const {data, error, isLoading, setSize, size} = useSearchInfinite( API_USED_PAGES.machine );

    const nextPage = () => {
        setSize( size + 1 );
    }

    if (isLoading) return (
        <Container>
            <Spinner/>
        </Container>
    )

    return (
        <Container>
            { 
                data?
                data.map( (pageResults : IPokeApiCollectionGeneralResponse, indexPage : number) => pageResults.results.map( (machine : IResult, index: number) => {
                    if ( indexPage === data.length -1 && index === pageResults.results.length -1 ) {
                        return (
                            <IntersectionObserverWrapper key={ `machine_${index}_wrapper` } intersectionObserverCallback={nextPage} >
                                <MachineCard key={ `machine_${index}` }  name={ machine.url }/>
                            </IntersectionObserverWrapper>
                        )
                    }
                    return <MachineCard key={ `machine_${index}` } name={machine.url}/>
                } ) )
                :
                <Spinner/>
            }
        </Container>
    )
}