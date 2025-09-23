import type { Metadata } from "next";
import "./globals.css";
import {Cormorant} from "next/font/google";

export const metadata: Metadata = {
  title: "PinkCity MouthFresheners",
  description: "PinkCity MouthFresheners",
};

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
