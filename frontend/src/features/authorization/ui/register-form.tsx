'use client';

import Link from 'next/link';
import styles from './form.module.scss';
import { Routes } from '@/shared/router/routes';
import { TextInput } from '@/shared/ui/text-input';
import { Button } from '@/shared/ui/button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../model/validation-schemas/registration-schema';
import { UserRegistration } from '../model/types/authorization';

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit: SubmitHandler<UserRegistration> = (data) => console.log(data);

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.loginForm__title}>Register</h2>
      <p>
        Already have an account{' '}
        <Link className={styles.helpLink} href={Routes.Login}>
          Log In!
        </Link>
      </p>

      <label className={styles.form__field}>
        Username
        <Controller
          name="username"
          control={control}
          render={({ field }) => <TextInput {...field} />}
        />
        <p className={styles.form__error}>{errors.username?.message}</p>
      </label>

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
          render={({ field }) => <TextInput type="password" {...field} />}
        />
        <p className={styles.form__error}>{errors.password?.message}</p>
      </label>

      <label className={styles.form__field}>
        Repeat Password
        <Controller
          name="repeatPassword"
          control={control}
          render={({ field }) => <TextInput type="password" {...field} />}
        />
        <p className={styles.form__error}>{errors.repeatPassword?.message}</p>
      </label>
      <Button variant="secondary" type="submit">
        Create Account
      </Button>
    </form>
  );
};
export default RegisterForm;
