import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-bg-primary text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
