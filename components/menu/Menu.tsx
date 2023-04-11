import Link from 'next/link';
import styles from './Menu.module.css';

export interface IMenuProps {
    menuLinks : IMenuLink[],
    showMenu: boolean
}

export interface IMenuLink {
    name: string,
    path: string
}

export default function Menu ( { menuLinks, showMenu } : IMenuProps ) {
    
    return (
        <nav className={ styles.nav } >
            <ul className={ `${styles.linksList} ${ showMenu ? styles.linksListShowed : '' }` } >
                { menuLinks.map( (menuLink) => <li key={menuLink.name} className={ styles.linksItem }><Link className={ styles.links } href={ menuLink.path }>{menuLink.name}</Link></li> ) }                
            </ul>
        </nav>
    )

}