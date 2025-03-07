import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibm = IBM_Plex_Mono({ variable: "--font-geist-mono", weight: "300" });

export const metadata: Metadata = {
  title: "BSc Coding Club",
  description: "Made by Uttam Jangir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm.className}  antialiased bg-[#FFE275]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
