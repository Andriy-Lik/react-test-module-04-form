// import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import SignupForm from '../SignupForm/SignupForm';

export default function App() {
  return (
    <div className={styles.container}>
      <SignupForm />
      
    </div>
  );
}