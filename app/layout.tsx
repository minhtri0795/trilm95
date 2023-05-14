import { Inter } from "@next/font/google";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
const InterFont = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={InterFont.className}>
        <Providers>
          <Header />
          <main className="flex flex-col justify-center px-8 min-h-[50vh] overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
export const metadata = {
  title:"Minh-Tri Le | Web Developer",
  description:"Welcome to my digital garden, I blogging about programming, life, and soft skills I've learned from my work as a developer; at least one new post every month.",
  openGraph: {
    title: 'Minh-Tri Le | Web Developer',
    description: "Welcome to my digital garden, I blogging about programming, life, and soft skills I've learned from my work as a developer; at least one new post every month.",
    url: 'https://trilm95.com',
    siteName: 'trilm95.com',
    images: [
      {
        url: 'https://trilm95.com/og-image.png',
        width: 1200,
        height: 627,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Minh-Tri Le',
    creator: '@trilm95',
    images: ['https://trilm95.com/og-image.png'],
  },
  icons: {
    icon: '/favicons/favicon-16x16.svg',
    apple: [
      { url: '/favicons/apple-touch-icon.svg', sizes: '180x180', type:"image/svg+xml" },
    ],
    shortcut: ['/favicons/favicon-32x32.svg'],
  },
};