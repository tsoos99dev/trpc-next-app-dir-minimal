import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TrpcProvider } from '@/util/trpcProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tRPC Nex.js App dir',
  description: 'tRPC with Nex.js App directory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
