import styles from './PokemonCard.module.css';

export interface IPokemonCardProp {
    name: string,
    types: string[],
    attack: number,
    hp: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number,
    spriteSrc : string
}

const addLucidaConsoleFontStyle = ( style : string ) => `${style} ${styles.consolaFont}`;

export function PokemonCard ( { name, types, attack, hp, defense, specialAttack, specialDefense, speed, spriteSrc } : IPokemonCardProp ) {

    return (
        <div className={ styles.card }>
            <img className={ styles.img } src={spriteSrc} alt="Avatar" />
            <div className={ styles.textContainer }>
                <h4 className={ styles.name }>{name}</h4>
                <div className={ addLucidaConsoleFontStyle(styles.typesContainer) }>
                    {types.map( (type, index) => <p key={ `${type}_${index}` } className={ styles.consolaFont }>{type}</p> )}
                </div>
                <p className={ styles.consolaFont }>Attack: { attack }</p>
                <p className={ styles.consolaFont }>Hp: { hp }</p>
                <p className={ styles.consolaFont }>Defense: { defense }</p>
                <p className={ styles.consolaFont }>S. A.: { specialAttack }</p>
                <p className={ styles.consolaFont }>S. D.: { specialDefense }</p>
                <p className={ styles.consolaFont }>Speed: { speed }</p>
            </div>
      </div> 
    )

}