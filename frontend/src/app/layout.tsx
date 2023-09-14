import { ThemeProvider, useTheme } from '@/core/providers/theme-provider';
import '@/core/styles/globals.scss';
import ThemeWrapper from '@/shared/ui/theme-wrapper/theme-wrapper';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
const inter = Rubik({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
