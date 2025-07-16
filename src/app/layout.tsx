import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from '@/components/Navbar';

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "EKONUMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
