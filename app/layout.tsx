import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFront from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const neueMontreal = localFront({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Thin.otf",
      weight: "100",
    },
    {
      path: "../fonts/PPNeueMontreal-Book.otf",
      weight: "350",
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--neueMontreal",
});

export const metadata: Metadata = {
  title: "Script Runner",
  description: "Improving acces to healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable}  ${inter.variable} overscroll font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
