import { useState } from "react";
import Controls from './Controls';
import Value from "./Value";
import styles from './Counter.module.css';

export default function Counter() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(prevState => prevState + 1);
    };

    const handleDecrement = () => {
        setValue(prevState => prevState - 1);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Counter</h2>
            <Value value={value} />
            <Controls 
                onIncrement={handleIncrement} 
                onDecrement={handleDecrement} 
            />
        </div>
    );
}