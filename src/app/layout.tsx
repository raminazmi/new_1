import { Tajawal, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'منصة توصيات - نظام التوصيات الأكاديمية',
  description: 'المنصة الرسمية لإصدار ومتابعة التوصيات العلمية لكلية علوم الحاسب ونظم المعلومات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
