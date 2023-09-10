'use client';

import { useTheme } from '@/core/providers/theme-provider';
import { Button } from '@/shared/ui/button';
import { FC } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <Button className={`${className ? className : ''}`} onClick={toggleTheme}>
      Switch Theme
    </Button>
  );
};
export default ThemeSwitcher;
