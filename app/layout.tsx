import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFront from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const neueMontreal = localFront({
  src: [
    {
      path: "../fonts/NeueMontreal-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/NeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/NeueMontreal-Bold.otf",
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
        className={`${neueMontreal.variable}  ${inter.variable} relative  min-h-screen mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
