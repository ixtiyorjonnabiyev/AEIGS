import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AEGIS — Institutional Investment & Risk Operating System',
  description:
    'Institutional multi-factor portfolio analytics, parametric VaR stress-testing, sub-millisecond OMS order execution, and automated UCITS mandate compliance.',
  keywords: [
    'quantitative finance',
    'portfolio management',
    'risk analytics',
    'order management system',
    'value at risk',
    'hedge fund operating system',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#05070d] text-[#f4f6fb] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
