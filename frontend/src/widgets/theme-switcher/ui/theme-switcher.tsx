'use client';

import { useTheme } from '@/core/providers/theme-provider';
import { Button } from '@/shared/ui/button';
import { FC } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  const buttonHandler = () => {
    toggleTheme();
  };
  return (
    <Button className={`${className ? className : ''}`} onClick={buttonHandler}>
      Switch Theme
    </Button>
  );
};
export default ThemeSwitcher;
