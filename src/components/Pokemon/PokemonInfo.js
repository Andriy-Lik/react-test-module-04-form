import { useState, useEffect } from "react";
import PokemonErrorViev from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../../servises/pokemon-api';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if (!pokemonName) {
            return;
        }

        setStatus(Status.PENDING);

        pokemonAPI
        .fetchPokemon(pokemonName)
        .then(pokemon => {setPokemon(pokemon); setStatus(Status.RESOLVED);})
        .catch(error => {setError(error); setStatus(Status.REJECTED);});
    }, [pokemonName]);


    if (status === 'idle') {
        return <div>Введіть ім'я покемона.</div>;
    }

    if (status === 'pending') {
        return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
        return <PokemonErrorViev message={error.message} />;
    }

    if (status === 'resolved') {
        return <PokemonDataView pokemon={pokemon} />;
    }

}

// export default class PokemonInfo extends Component {
//     state ={
//         pokemon: null,
//         error: null,
//         status: 'idle'
//     }

//     componentDidUpdate(prevProps, prevstate) {
//         const prevName = prevProps.pokemonName;
//         const nextName = this.props.pokemonName;

//         if (prevName !== nextName) {
//             this.setState({ status: 'pending' });

//             pokemonAPI.fetchPokemon(nextName)
//             .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//             .catch(error => this.setState({ error, status: 'rejected' }));
//         }
//     }

//     render() {
//         const { pokemon, error, status } = this.state;
//         const { pokemonName } = this.props;

//         if (status === 'idle') {
//             return <div>Введіть ім'я покемона.</div>;
//         }

//         if (status === 'pending') {
//             return <PokemonPendingView pokemonName={pokemonName} />;
//         }

//         if (status === 'rejected') {
//             return <PokemonErrorViev message={error.message} />;
//         }

//         if (status === 'resolved') {
//             return <PokemonDataView pokemon={pokemon} />;
//         }
//     }
// }