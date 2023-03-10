import styles from './SearchBar.module.css';

export default function SearchBar () {
    return (
        <div className={ styles.container }>
            <input size={10} className={ styles.input } type="text" name="" id="" />
            <button className={ styles.button }>
                <img className={ styles.img } src={ "/search_icon.svg" } alt="" />
            </button>
        </div>
    );
}