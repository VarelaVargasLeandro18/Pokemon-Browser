import ItemCard from "@/components/cards/item-card/ItemCard";
import Container from "@/components/container/Container";
import IntersectionObserverWrapper from "@/components/intersection-observer-wrapper/IntersectionObserverWrapper";
import Spinner from "@/components/spinner/Spinner";
import { API_USED_PAGES } from "@/constants/constants";
import { useSearchInfinite } from "@/lib/hooks/useSearch";

export default function ItemsPage () {
    const {data, error, isLoading, setSize, size} = useSearchInfinite( API_USED_PAGES.item );

    const nextPage = () => {
        setSize( size + 1 );
    }

    return (
        <Container>
            { 
                data?
                data.map( (pageResults : any, indexPage : number) => pageResults.results.map( (item : any, index: number) => {
                    if ( indexPage === data.length -1 && index === pageResults.results.length -1 ) {                        
                        return (
                            <IntersectionObserverWrapper key={ `${item.name}_wrapper` } intersectionObserverCallback={nextPage} >
                                <ItemCard key={item.name} name={item.name}/>
                            </IntersectionObserverWrapper>
                        )
                    }
                    return <ItemCard key={item.name} name={item.name}/>
                } ) )
                :
                <Spinner/>
            }
        </Container>
    )

}