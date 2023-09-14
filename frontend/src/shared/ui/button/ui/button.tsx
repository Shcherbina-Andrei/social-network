import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
}

const Button: FC<ButtonProps> = ({ variant, children, className, onClick }) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined'
          ? styles.button__outlined
          : styles.button__contained
      } ${className ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
