import { IPokemonCardProp, PokemonCard } from "@/components/pokemon-card/PokemonCard";
import styles from '../styles/Pokemon.module.css';

const ejBulbasaur : IPokemonCardProp = {
    attack: 10,
    defense: 10,
    hp: 10,
    name: 'Bulbasaur',
    specialAttack: 10,
    specialDefense: 10,
    speed: 10,
    spriteSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["Poison", "Leaf", "Grass", "Fire"]
} 

export default function PokemonPage () {

    return (
        <div className={ styles.container }>
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
            <PokemonCard {...ejBulbasaur} />
        </div>
    );
}