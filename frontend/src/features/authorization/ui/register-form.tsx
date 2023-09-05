import Link from 'next/link';
import styles from './form.module.scss';
import { Routes } from '@/shared/router/routes';

const RegisterForm = () => {
  return (
    <form className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Register</h2>
      <p>
        Already have an account <Link href={Routes.Registration}>Log In!</Link>
      </p>

      <label>
        Username
        <input />
      </label>

      <label>
        Email
        <input />
      </label>

      <label>
        Password
        <input type="password" />
      </label>

      <label>
        Repeat Password
        <input type="password" />
      </label>

      <Link href="/">Forgot Password</Link>
      <button>Create Account</button>
    </form>
  );
};
export default RegisterForm;
