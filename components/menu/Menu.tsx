import Link from 'next/link';
import styles from './Menu.module.css';

export interface IMenuLink {
    name: string,
    path: string
}

export default function Menu ( { menuLinks } : { menuLinks : IMenuLink[] } ) {
    
    return (
        <nav className={ styles.nav } >
            <ul className={ styles.linksList } >
                { menuLinks.map( (menuLink) => <li key={menuLink.name} className={ styles.linksItem }><Link className={ styles.links } href={ menuLink.path }>{menuLink.name}</Link></li> ) }                
            </ul>
        </nav>
    )

}