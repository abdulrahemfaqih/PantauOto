import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PantauOto — Pelacak Efisiensi BBM & Pengingat Servis Cerdas',
  description:
    'Aplikasi pelacak konsumsi bahan bakar, kalkulasi efisiensi km/L otomatis, dan pengingat jadwal servis berkala berbasis mobilitas harian untuk motor dan mobil Anda.',
  keywords: [
    'PantauOto',
    'Pelacak BBM',
    'Aplikasi Servis Motor',
    'Catat BBM',
    'Efisiensi Kendaraan',
    'Pengingat Servis',
    'Vehicle Tracker Android',
  ],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
