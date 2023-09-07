'use client';

import { FC, ReactNode, useState } from 'react';
import styles from './dropdown.module.scss';
import { DropdownContext } from './dropdown-context';

interface DropdownProps {
  children: ReactNode;
  className?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({
  children,
  className,
  value,
  onChange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || '');

  const changeValue = (value: string | number) => {
    onChange?.(value);
    setCurrentValue(value);
  };

  return (
    <div
      className={`${styles.dropdown} ${className ? className : ''}`}
      onClick={() => setIsOpened(!isOpened)}
    >
      {currentValue || 'Choose one'}
      {isOpened && (
        <div className={styles.dropdown__wrapper}>
          <ul className={styles.dropdown__list}>
            <DropdownContext.Provider value={{ changeValue: changeValue }}>
              {children}
            </DropdownContext.Provider>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
