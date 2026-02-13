import "./globals.css";
import type { Metadata } from 'next';

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
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
