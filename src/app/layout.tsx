import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Bentham } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PinkCity MouthFresheners | Where Taste Meets Tradition",
  description:
    "Crafting premium mouth fresheners since 1982 with authentic flavors, freshness, and Jaipur's rich heritage.",
  keywords: [
    "Pink City Mouth Freshener",
    "Jaipur mouth freshener",
    "premium mouth freshener",
    "Indian mouth freshener",
    "traditional mouth freshener",
    "authentic flavors",
    "fennel mouth freshener",
    "mukhwas",
    "cultural heritage",
    "refreshing mouth freshener",
  ],
};

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Disable Font Awesome's automatic CSS injection


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bentham = Bentham({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bentham",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bentham.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
