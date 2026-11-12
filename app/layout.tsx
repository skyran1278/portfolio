import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Senior Software Engineer with 6+ years of experience across web platforms, cloud infrastructure, and performance-critical C++ systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.u-ran.com"),
  title: "You-Ran Nai · Portfolio",
  description,
  openGraph: {
    title: "You-Ran Nai · Portfolio",
    description,
    url: "/",
    siteName: "You-Ran Nai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You-Ran Nai · Portfolio",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
