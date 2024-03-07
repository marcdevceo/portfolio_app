import type { Metadata } from "next";
import { Bubblegum_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });
const bubblegumSans = Bubblegum_Sans({subsets: ['latin'], weight:"400"});

export const metadata: Metadata = {
  title: "MarcDevCEO Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bubblegumSans.className}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
