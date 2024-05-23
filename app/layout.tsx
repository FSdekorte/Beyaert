import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// const geist = geist({ subsets: ["latin"] });
// const inter = Inter({
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: "Beyaert Groenaanleg & Tuinonderhoud",
  description: "Gemaakt door FS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
    // <html lang="en" className={inter.className}>
    //     <body>{children}</body>
    // </html>
  );
}
