'use client';

import { FC, ReactNode, useMemo, useState, useEffect } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/theme-context';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(
      (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK
    );
  }, []);

  return (
    <>
      {!theme || !setTheme ? (
        <div>loading</div>
      ) : (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      )}
    </>
  );
};

export default ThemeProvider;
