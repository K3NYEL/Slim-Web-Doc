import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Official Documentation`,
  description: siteConfig.description,
  icons: {
    icon: "/slim-executor-mark.svg",
  },
  verification: {
    google: "NZSWUeQDIAnjdbr3sKnV9MFDjegc4q8X3LMfCXuqfQo",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      

    >
      <body className="min-h-full flex flex-col">{children}<Analytics />
      <SpeedInsights/></body>
    </html>
  );
}
