import { useState } from "react";
import { ImSearch } from 'react-icons/im';
import { toast } from "react-toastify";
import styles from './Pokemon.module.css';


export default function PokemonForm({ onSubmit }) {
    const [pokemonName, setPokemonName] = useState('');

    const handleNameChange = e => {
        setPokemonName(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (pokemonName.trim() === '') {
            return toast.error('Введіть імя покемона.');
        }
        onSubmit(pokemonName);
        setPokemonName('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.input} 
                type="text"
                name="pokemonName"
                value={pokemonName}
                onChange={handleNameChange}
            />
            <button type="submit" className={styles.btn}>
                <ImSearch style={{ marginRight: 8 }} />
                Знайти
            </button>
        </form>
    )
}

// export default class PokemonForm extends Component {
//     state = {
//         pokemonName: '',
//     };

//     handleNameChange = e => {
//         this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         if (this.state.pokemonName.trim() === '') {
//             return toast.error('Введіть імя покемона.');
//         }
//         this.props.onSubmit(this.state.pokemonName);
//         this.setState({ pokemonName: '' });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={styles.form}>
//                 <input
//                      className={styles.input} 
//                     type="text"
//                     name="pokemonName"
//                     value={this.state.pokemonName}
//                     onChange={this.handleNameChange}
//                 />
//                 <button type="submit" className={styles.btn}>
//                     <ImSearch style={{ marginRight: 8 }} />
//                     Знайти
//                 </button>
//             </form>
//         )
//     }
// }