import { useState, useEffect } from "react";
import styles from './SignupForm.module.css';

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}

export default function SignupForm() {
    // const [email, setEmail] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('email')) ?? '';
    // });

    // const [password, setPassword] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('password')) ?? '';
    // });

    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');
        
    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'email': setEmail(value);
            break;

            case 'password': setPassword(value);
            break;

            default: return;
        }
    };

    // useEffect(() => {
    //     window.localStorage.setItem('email', JSON.stringify(email))
    // }, [email]);

    // useEffect(() => {
    //     window.localStorage.setItem('password', JSON.stringify(password))
    // }, [password]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Signup Form</h2>
            <form autoComplete="off">
                <label className={styles.label}>
                    <span>Пошта</span>
                    <input type="email" name="email" onChange={handleChange} value={email} />
                </label>

                <label className={styles.label}>
                    <span>Пароль</span>
                    <input type="password" name="password" onChange={handleChange} value={password} />
                </label>

                <button className={styles.btn} type="submit">Зареєструватися</button>
            </form>
        </div>
        
    );
}