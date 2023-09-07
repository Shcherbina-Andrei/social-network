'use client';
import { FC, ReactNode, useContext } from 'react';
import styles from './dropdown.module.scss';
import { DropdownContext } from './dropdown-context';

interface DropdownItemProps {
  className?: string;
  children: ReactNode;
  value: string | number;
}

const DropdownItem: FC<DropdownItemProps> = ({
  className,
  children,
  value,
}) => {
  const { changeValue } = useContext(DropdownContext);

  return (
    <li
      className={`${styles.dropdown__item} ${className ? className : ''}`}
      onClick={() => changeValue?.(value)}
    >
      {children}
    </li>
  );
};
export default DropdownItem;
