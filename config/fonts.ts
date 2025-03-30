import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';
import { Kalam } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontKalam = Kalam({
  subsets: ['latin'],
  weight: '400',
});
