import styles from './Card.module.css';

export interface IItem {
    info: string | number,
    title: string
}

export interface ICardProperties {
    imagen?: string,
    title: string,
    subtitleItems?: string[],
    items: IItem[]
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export default function Card ( { imagen, title, subtitleItems, items } : ICardProperties ) {

    return (
        <>
            <div className={ styles.card }>
                {imagen? <img className={ styles.img } src={imagen} alt="Avatar" /> : <></>}
                <div className={ styles.textContainer }>
                    <h4 className={ styles.name }>{title}</h4>
                    {
                        subtitleItems? <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                            {subtitleItems.map( (item) => <span key={ `${title}_${item}` } className={ styles.consolaFont }>{item}</span> )}
                        </div> : <></>
                    }
                    {items.map( item => <p key={`${title}_${item.title}`} className={ styles.consolaFont }>{ `${item.title}: ${item.info}` }</p> )}
                </div>
            </div>
        </>
    )

}