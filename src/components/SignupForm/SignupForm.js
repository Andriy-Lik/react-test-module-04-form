import styles from './SignupForm.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function SignupForm() {

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