import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from './Pokemon.module.css';

import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

export default function PokemonApp() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokemon</h2>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={5000} />
    </div>
  );
}





// export default class OldPokemonApp extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };
 
//   render() {
//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Pokemon</h2>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={5000} />
//       </div>
//     );
//   }
// }
