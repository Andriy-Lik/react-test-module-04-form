import { useState } from "react";
import styles from './SignupForm.module.css';

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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

    return (
        <form className={styles.container} autoComplete="off">
            <label className={styles.label}>
                <span>Пошта</span>
                <input type="email" name="email" onChange={handleChange} value={email} />
            </label>

            <label className={styles.label}>
                <span>Пароль</span>
                <input type="password" name="password" onChange={handleChange} value={password} />
            </label>

            <button type="submit">Зареєструватися</button>
        </form>
    );
}