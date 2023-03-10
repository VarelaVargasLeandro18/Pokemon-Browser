import useWindowWidth from "@/lib/hooks/useWindowWidth";
import Link from "next/link";
import { ReactElement, useState } from "react";
import styles from './Layout.module.css';
import SearchBar from "../search-bar/searchBar";
import { useRouter } from "next/router";

export default function Layout ( {children} : {children: ReactElement} ) {
    const [showMenu, setShowMenu] = useState( false );
    const [windowWidth] = useWindowWidth();
    const { pathname } = useRouter();
    console.log(!pathname.match("/"));
    

    return (
        <div>
            <header className={ styles.header }>
                {windowWidth <= 1024 && <button className={ styles.button } onClick={ () => setShowMenu(!showMenu) }>
                    <img className={ styles.buttonIcon } src="/menu_icon.svg" alt="Menu Button" />
                </button>}
                <h1 className={ styles.logo }>Pokemon Browser</h1>
                { !(pathname == "/") && <SearchBar/> }
            </header>
            <nav className={ styles.nav } >
                <ul className={ styles.linksList } >
                    <li className={ styles.linksItem }><Link className={ styles.links } href={"/pokemon"}>Pokemons</Link></li>
                    <li className={ styles.linksItem }><Link className={ styles.links } href={""}>Berries</Link></li>
                    <li className={ styles.linksItem }><Link className={ styles.links } href={""}>Places</Link></li>
                    <li className={ styles.linksItem }><Link className={ styles.links } href={""}>Items</Link></li>
                </ul>
            </nav>
            <div className={styles.realBody}>{children}</div>
        </div>
    )

}