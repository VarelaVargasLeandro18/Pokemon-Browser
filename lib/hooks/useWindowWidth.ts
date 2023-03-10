import { useEffect, useState } from "react";

export default function useWindowWidth () {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect( () => {
        setWindowWidth(window.innerWidth);

        const resizeListener = (ev : UIEvent) => {
            setWindowWidth( window.innerWidth );
        };
        
        window.addEventListener( 'resize', resizeListener );

        return () => {
            window.removeEventListener( 'resize', resizeListener );
        }
    }, [] );

    return [windowWidth];
}