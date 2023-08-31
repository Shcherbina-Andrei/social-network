import Link from 'next/link';
import styles from './form.module.scss';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Log In</h2>
      <p>
        Don&apos;t have an account <Link href="/registration">Sign Up!</Link>
      </p>

      <label>
        Email
        <input />
      </label>

      <label>
        Password
        <input type="password" />
      </label>

      <label>
        <input type="checkbox" />
        Remember Me
      </label>

      <Link href="/">Forgot Password</Link>
      <button>Log In</button>
    </form>
  );
};
export default LoginForm;
