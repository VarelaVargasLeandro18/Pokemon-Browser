import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Header, IHeaderProps } from "../header/Header";
import Menu, { IMenuLink } from "../menu/Menu";
import styles from './Layout.module.css';

const menuLinks : IMenuLink[] = [
    { name: 'Pokemon', path: '/pokemon' },
    { name: 'Berries', path: '/berries' },
    { name: 'Places', path: '/places' },
    { name: 'Items', path: '/items' }
]

export default function Layout ( {children} : {children: ReactElement} ) {
    const [showMenu, setShowMenu] = useState( false );
    const [windowWidth] = useWindowWidth();
    const { pathname } = useRouter();

    const headerProps : IHeaderProps = {
        setShowMenu,
        showMenu,
        showMenuButton: windowWidth <= 1024,
        showSearchBar: !(pathname == "/")
    }

    useEffect( () => {
        console.log(showMenu, (windowWidth <= 1024) && showMenu)
    }, [showMenu] );
    
    return (
        <div>
            <Header {...headerProps} />
            { (windowWidth > 1024 || showMenu) && <Menu menuLinks={ menuLinks } /> }
            <div className={styles.realBody}>{children}</div>
        </div>
    )

}