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
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Heeyeon's blog",
    description: '기록하고 싶은 걸 적는 곳',
    images: [
      {
        url: 'https://wheon06.github.io/opengraph-image.png',
        width: 800,
        height: 400,
        alt: 'Opengraph Image',
      },
    ],
    url: 'https://wheon06.github.io',
    siteName: "Heeyeon's blog",
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    google: 'bnPDXXDictKtaW8HcrIbLAC84zq7LLVnwMWuSaXmtlc',
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
