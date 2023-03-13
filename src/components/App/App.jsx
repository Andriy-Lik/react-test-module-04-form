import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import colorPickerOptions from '../Data/ColorPicker.json';

import AppBar from 'components/AppBar';
import SignupForm from 'components/SignupForm';
import ColorPicker from 'components/ColorPicker';
import Counter from 'components/Counter';
import Clock from 'components/Clock';
import PokemonApp from 'components/Pokemon';


export default function App() {
  return (
    <div className={styles.container}>
      
      <AppBar />
      
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/clock">
          <Clock />
        </Route>

        <Route path="/pokemon">
          <PokemonApp />
        </Route>
      </Switch>
      
    </div>
  );
}