import { PropsWithChildren, useCallback, useEffect } from "react";
import realBodyStyles from '../layout/Layout.module.css';

interface IIntersectionObserverWrapperProps {
    intersectionObserverCallback? : () => void
}

export default function IntersectionObserverWrapper ( { children, intersectionObserverCallback  } : PropsWithChildren<IIntersectionObserverWrapperProps> ) {

    let observer : IntersectionObserver;
    
    const realObserverCallback = (e : IntersectionObserverEntry[]) => {
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