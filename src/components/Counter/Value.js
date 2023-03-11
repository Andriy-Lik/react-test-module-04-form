import React from "react";
import styles from './Counter.module.css';

const Value = ({ value }) => (
    <span className={styles.value}>{value}</span>
);

export default Value;