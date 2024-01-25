import { MutableRefObject, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import realBodyStyles from '../layout/Layout.module.css';

interface IIntersectionObserverWrapperProps {
    intersectionObserverCallback? : () => void
}

export default function IntersectionObserverWrapper ( { children, intersectionObserverCallback  } : PropsWithChildren<IIntersectionObserverWrapperProps> ) {

    let observer : MutableRefObject<IntersectionObserver | undefined> = useRef<IntersectionObserver>();
    
    const realObserverCallback = (e : IntersectionObserverEntry[]) => {
        if (!intersectionObserverCallback || !e[0].isIntersecting) return;
        intersectionObserverCallback();
        observer.current?.disconnect();
    }
    
    const callback = useCallback( (node: HTMLDivElement | null) => {        
        if (!intersectionObserverCallback || !node) return;
        
        const options : IntersectionObserverInit = {
            root: document.querySelector(realBodyStyles.realBody),
            threshold: [.5]
        }

        observer.current = new IntersectionObserver( realObserverCallback, options );
        observer.current?.observe(node);  
    }, [] );

    return (
        <div ref={callback}>
            { children }
        </div>
    )

}