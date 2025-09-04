import type { Metadata } from "next";
import { Englebert } from "next/font/google";
import "./globals.css";


const englebert = Englebert({ 
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-englebert",
});


export const metadata: Metadata = {
  title: "Phenomenal Cat - $PCAT",
  description: "The Revolutionary Cat Currency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${englebert.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
