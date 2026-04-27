import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { GradientBackground } from "@/components/layout/GradientBackground";
import { Footer } from "@/components/layout/Footer";
import { Starfield } from "@/components/layout/Starfield";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ernest Annor — Senior Software Engineer",
    template: "%s | Ernest Annor",
  },
  description:
    "Senior Software Engineer specialising in React, TypeScript, and Node.js. Building high-performance web applications at scale.",
  keywords: [
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Frontend",
    "Full Stack",
    "London",
  ],
  authors: [{ name: "Ernest Annor" }],
  creator: "Ernest Annor",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ernestannor.com",
    siteName: "Ernest Annor",
    title: "Ernest Annor — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in React, TypeScript, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernest Annor — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in React, TypeScript, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-screen'>
        <GradientBackground />
        <Starfield />
        <div className='relative' style={{ zIndex: 1 }}>
          <Nav />
          <main className='pt-16'>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
