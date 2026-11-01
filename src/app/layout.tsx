import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Slim Executor | Official Documentation",
  description:
    "Official Slim Executor documentation, installation guides, Lua API reference and examples.",
  icons: {
    icon: "/slim-executor-mark.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      

    >
      <meta name="google-site-verification" content="NZSWUeQDIAnjdbr3sKnV9MFDjegc4q8X3LMfCXuqfQo" />
      <body className="min-h-full flex flex-col">{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
