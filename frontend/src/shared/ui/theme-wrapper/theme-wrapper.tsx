'use client';

import { useTheme } from '@/core/providers/theme-provider';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return <div className={`app ${theme}`}>{children}</div>;
}
