import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'secondary' | 'outlined';
}

const Button: FC<ButtonProps> = ({
  variant = 'main',
  type = 'button',
  children,
  className,
  onClick,
}) => {
  let buttonClass: string;

  switch (variant) {
    case 'main':
      buttonClass = styles.button__main;
      break;
    case 'secondary':
      buttonClass = styles.button__secondary;
      break;
    case 'outlined':
      buttonClass = styles.button__contained;
      break;
    default:
      buttonClass = styles.button__contained;
      break;
  }

  return (
    <button
      className={`${styles.button} ${buttonClass} ${
        className ? className : ''
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
