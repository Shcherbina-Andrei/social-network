import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

const Button: FC<ButtonProps> = ({ variant, children, className }) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined'
          ? styles.button__outlined
          : styles.button__contained
      } ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};
export default Button;
