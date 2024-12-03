import type { Metadata } from "next";
import { Shippori_Antique } from "next/font/google";

import localFont from "next/font/local";

import "./globals.css";

const shippori_antique = Shippori_Antique({
  subsets: ["latin"],
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SOHEE 100",
  description: "it is about her",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-en">
      <body
        className={`${shippori_antique.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
