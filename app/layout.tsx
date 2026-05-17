import './globals.css';
import { ReactNode } from 'react';
import { MainNav } from '@/components/MainNav';

export const metadata = { title: 'EcoSTEM Project Hub' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <MainNav />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
