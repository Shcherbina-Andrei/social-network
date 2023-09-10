import { FC, InputHTMLAttributes } from 'react';
import styles from './text-input.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: FC<TextInputProps> = ({
  className,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ''}`}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextInput;
