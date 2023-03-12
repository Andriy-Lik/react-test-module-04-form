import React from "react";
import styles from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div className={styles.controls}>
        <button className={styles.btn} type="button" onClick={onIncrement}>
            Збільшити на 1
        </button>

        <button className={styles.btn} type="button" onClick={onDecrement}>
            Зменшити на 1
        </button>
    </div>
);

export default Controls;