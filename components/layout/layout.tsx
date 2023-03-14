import useWindowWidth from "@/lib/hooks/useWindowWidth";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import styles from './Layout.module.css';
import SearchBar from "../search-bar/searchBar";
import { useRouter } from "next/router";
import Menu, { IMenuLink } from "../menu/Menu";

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

    useEffect( () => {
        console.log(showMenu, (windowWidth <= 1024) && showMenu)
    }, [showMenu] );
    
    return (
        <div>
            <header className={ styles.header }>
                {windowWidth <= 1024 && <button className={ styles.button } onClick={ () => setShowMenu(!showMenu) }>
                    <img className={ styles.buttonIcon } src="/menu_icon.svg" alt="Menu Button" />
                </button>}
                <Link href={ "/" }>
                    <h1 className={ styles.logo }>Pokemon Browser</h1>
                </Link>
                { !(pathname == "/") && <SearchBar/> }
            </header>
            { (windowWidth > 1024 || showMenu) && <Menu menuLinks={ menuLinks } /> }
            <div className={styles.realBody}>{children}</div>
        </div>
    )

}