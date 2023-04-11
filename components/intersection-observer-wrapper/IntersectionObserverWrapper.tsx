import { LegacyRef, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import realBodyStyles from '../layout/Layout.module.css';

interface IIntersectionObserverWrapperProps {
    intersectionObserverCallback? : () => void
}

export default function IntersectionObserverWrapper ( { children, intersectionObserverCallback  } : PropsWithChildren<IIntersectionObserverWrapperProps> ) {

    let observer : IntersectionObserver;
    const ref : LegacyRef<HTMLDivElement> = useRef(null);

    useEffect( () => {
    }, [] );

    const realObserverCallback = (e : IntersectionObserverEntry[]) => {
        console.log(e);
        if (!intersectionObserverCallback || !e[0].isIntersecting) return;
        intersectionObserverCallback();
        observer.disconnect();
    }
    
    const callback = useCallback( (node: HTMLDivElement | null) => {        
        if (!intersectionObserverCallback || !node) return;
        
        const options : IntersectionObserverInit = {
            root: document.querySelector(realBodyStyles.realBody),
            threshold: [.5]
        }

        observer = new IntersectionObserver( realObserverCallback, options );
        observer.observe(node);  
    }, [] );

    return (
        <div ref={callback}>
            { children }
        </div>
    )

}