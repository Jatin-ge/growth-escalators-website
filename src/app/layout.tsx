import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne-var",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans-var",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Escalators | Performance Marketing Agency for D2C Brands",
  description: "We scale D2C ecommerce brands through profitable Meta Ads, Google Ads, and CRO. Based in Jaipur, serving brands across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://growthescalators.com",
    siteName: "Growth Escalators",
    title: "Growth Escalators | Performance Marketing Agency for D2C Brands",
    description: "We scale D2C ecommerce brands through profitable Meta Ads, Google Ads, and CRO.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Escalators | Performance Marketing Agency for D2C Brands",
    description: "We scale D2C ecommerce brands through profitable Meta Ads, Google Ads, and CRO.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-dm-sans bg-bg-dark text-text-primary-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
