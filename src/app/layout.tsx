import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Dev - Senior Software Engineer",
  description: "Portfolio of Abdul Dev, a Senior Software Engineer with a passion for building scalable and efficient applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-[#1F1F1F] text-[#F8F9FA] font-sans selection:bg-[#FF6C37] selection:text-[#1F1F1F]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
