import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
});

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-great-vibes" });

import SmoothScroll from "../components/SmoothScroll";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "INFIWIN | Reclaim Your Space",
  description: "INFIWIN defines the standard for high-performance windows, doors, and architectural spatial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${greatVibes.variable} antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
