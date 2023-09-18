import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styles from './text-input.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: FC<TextInputProps> = forwardRef(function TextInput(
  { className, type, value, onChange, ...otherProps },
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      className={`${styles.input} ${className ? className : ''}`}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
      {...otherProps}
    />
  );
});
export default TextInput;
