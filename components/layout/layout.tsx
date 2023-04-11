import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import { Header, IHeaderProps } from "../header/Header";
import Menu, { IMenuLink, IMenuProps } from "../menu/Menu";
import styles from './Layout.module.css';

const menuLinks : IMenuLink[] = [
    { name: 'Pokemon', path: '/pokemon' },
    { name: 'Berries', path: '/berries' },
    { name: 'Places', path: '/places' },
    { name: 'Items', path: '/items' }
]

export default function Layout ( {children} : PropsWithChildren ) {
    const [showMenu, setShowMenu] = useState( false );
    const [windowWidth] = useWindowWidth();
    const { pathname } = useRouter();

    const headerProps : IHeaderProps = {
        setShowMenu,
        showMenu,
        showMenuButton: windowWidth <= 1023,
        showSearchBar: !(pathname == "/")
    }

    const menuProps : IMenuProps = {
        menuLinks,
        showMenu
    }
    
    return (
        <div>
            <Header {...headerProps} />
            <Menu {...menuProps} />
            <div className={styles.realBody}>{children}</div>
        </div>
    )

}