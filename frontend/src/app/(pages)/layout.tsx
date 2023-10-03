'use client';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '@/core/providers/theme-provider';
import { refresh } from '@/features/authorization';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch';
import { useEffect, useState } from 'react';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    setTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);
    dispatch(refresh());
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
