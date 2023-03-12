import { useState, useEffect, useRef } from "react";
import styles from './Clock.module.css';

export default function Clock() {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            stop();
        };

    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Поточний час</h2>
            <p className={styles.timer}>{time.toLocaleTimeString()}</p>
            {/* <button className={styles.btn} type="button" onClick={intervalId}>
                Запустити
            </button>            */}
            <button className={styles.btn} type="button" onClick={stop}>
                Зупинити
            </button>
        </div>
    );
}