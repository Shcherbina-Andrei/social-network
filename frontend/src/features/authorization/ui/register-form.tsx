import Link from 'next/link';
import styles from './form.module.scss';
import { Routes } from '@/shared/router/routes';
import { TextInput } from '@/shared/ui/text-input';

const RegisterForm = () => {
  return (
    <form className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Register</h2>
      <p>
        Already have an account <Link href={Routes.Login}>Log In!</Link>
      </p>

      <label>
        Username
        <TextInput />
      </label>

      <label>
        Email
        <TextInput />
      </label>

      <label>
        Password
        <TextInput type="password" />
      </label>

      <label>
        Repeat Password
        <TextInput type="password" />
      </label>

      <Link href="/">Forgot Password</Link>
      <button>Create Account</button>
    </form>
  );
};
export default RegisterForm;
