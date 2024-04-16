import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

import './globals.css';

import styles from './style.module.scss';

import Navbar from '@organisms/Navbar';

const mulish = Mulish({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={mulish.className}>
        <main className={styles['layout']}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
