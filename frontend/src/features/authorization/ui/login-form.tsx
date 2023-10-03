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
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch';
import { login } from '../model/services/authorization-services';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    setErrorMessage('');
    dispatch(login(data))
      .unwrap()
      .then(() => router.push(Routes.Main))
      .catch((err) => setErrorMessage(err.message));
  };
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
          render={({ field }) => <TextInput {...field} type="password" />}
        />
        <p className={styles.form__error}>{errors.password?.message}</p>
      </label>
      {errorMessage && <p className={styles.form__error}>{errorMessage}</p>}
      <Button type="submit" variant="secondary">
        Log In
      </Button>
    </form>
  );
};
