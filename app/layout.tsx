import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Layout from "@/components/Layout";

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
    <html lang="en">
      <body className={GeistSans.className}>
          <Layout>
            {children}
          </Layout>
      </body>
    </html>
  );
}
