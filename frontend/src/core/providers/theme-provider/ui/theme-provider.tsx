'use client';

import { FC, ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/theme-context';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme =
  (typeof window !== 'undefined' &&
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)) ||
  Theme.DARK;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
