import Link from 'next/link';
import SearchBar from '../search-bar/searchBar';
import styles from './Header.module.css';

export interface IHeaderProps {
    showMenuButton : boolean,
    showSearchBar : boolean,
    setShowMenu : (arg0: boolean) => void,
    showMenu : boolean
} 

export function Header ( { showMenuButton, showSearchBar, setShowMenu, showMenu } : IHeaderProps ) {
    return (
        <header className={ styles.header }>
            {showMenuButton && <button className={ styles.button } onClick={ () => setShowMenu(!showMenu) }>
                <img className={ styles.buttonIcon } src="/menu_icon.svg" alt="Menu Button" />
            </button>}
            <Link href={ "/" }>
                <h1 className={ styles.logo }>Pokemon Browser</h1>
            </Link>
            { showSearchBar && <SearchBar/> }
        </header>
    )
}