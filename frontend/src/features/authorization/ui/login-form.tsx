import Link from 'next/link';
import styles from './form.module.scss';
import { Routes } from '@/shared/router/routes';
import { TextInput } from '@/shared/ui/text-input';
import { Button } from '@/shared/ui/button';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Log In</h2>
      <p>
        Don&apos;t have an account{' '}
        <Link href={Routes.Registration}>Sign Up!</Link>
      </p>

      <label>
        Email
        <TextInput />
      </label>

      <label>
        Password
        <TextInput type="password" />
      </label>

      <label>
        <TextInput type="checkbox" />
        Remember Me
      </label>

      <Link href="/">Forgot Password</Link>
      <Button>Log In</Button>
    </form>
  );
};
export default LoginForm;
