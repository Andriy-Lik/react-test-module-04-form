// import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import colorPickerOptions from '../Data/ColorPicker.json';

import SignupForm from 'components/SignupForm';
import ColorPicker from 'components/ColorPicker';

export default function App() {
  return (
    <div className={styles.container}>
      <SignupForm />
      <ColorPicker options={colorPickerOptions} />
      
    </div>
  );
}