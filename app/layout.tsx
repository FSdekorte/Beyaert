import type { Metadata } from "next";
import { Inter } from "@next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
})

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
    // <html lang="en">
    //   <body className={GeistSans.className}>
    //     {children}
    //   </body>
    // </html>
     <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
