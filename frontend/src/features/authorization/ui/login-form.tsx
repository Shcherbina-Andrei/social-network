'use client';

import Link from 'next/link';
import styles from './form.module.scss';
import { Routes } from '@/shared/router/routes';
import { TextInput } from '@/shared/ui/text-input';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserLogin } from '../model/types/authorization';
import { loginSchema } from '../model/validation-schemas/login-schemas';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<UserLogin> = (data) => console.log(data);
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.loginForm__title}>Log In</h2>
      <p>
        Don&apos;t have an account?{' '}
        <Link className={styles.helpLink} href={Routes.Registration}>
          Sign Up!
        </Link>
      </p>

      <label className={styles.form__field}>
        Email
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextInput {...field} />}
        />
        <p className={styles.form__error}>{errors.email?.message}</p>
      </label>

      <label className={styles.form__field}>
        Password
        <Controller
          name="password"
          control={control}
          render={({ field }) => <TextInput {...field} />}
        />
        <p className={styles.form__error}>{errors.password?.message}</p>
      </label>

      <div className={styles.form__innerWrapper}>
        <label>
          <Checkbox />
          Remember Me
        </label>

        <Link className={styles.helpLink} href="/">
          Forgot Password?
        </Link>
      </div>
      <Button type="submit" variant="secondary">
        Log In
      </Button>
    </form>
  );
};
export default LoginForm;
