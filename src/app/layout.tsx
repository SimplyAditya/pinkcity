import type { Metadata } from "next";
import "./globals.css";
import {Cormorant} from "next/font/google";

export const metadata: Metadata = {
  title: "PinkCity Mouthfreshners",
  description: "PinkCity Mouthfreshners",
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
        className={`antialiased font-cormorant`}
      >
        {children}
      </body>
    </html>
  );
}
