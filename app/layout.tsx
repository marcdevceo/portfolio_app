import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarcDevCEO Portfolio",
  description: "Web App projects and designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <div className="body">
          {children}
        </div>
        <footer className="footer">Copyright © 2024 | Created by MarcDevCEO</footer>
      </body>
    </html>
  );
}
