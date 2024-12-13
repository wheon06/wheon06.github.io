import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: './../../public/fonts/PretendardVariable.ttf',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "HEEYEON'S BLOG",
  icons: {
    icon: '/blog/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
