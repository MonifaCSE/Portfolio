import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { getSiteData } from "@/lib/content";

const siteData = getSiteData();

export const metadata: Metadata = {
  title: {
    default: siteData.title,
    template: "%s — Monifa Sultana",
  },
  description: siteData.subline,
  authors: [{ name: siteData.name }],
  robots: {
    index: process.env.NODE_ENV === "production",
    follow: process.env.NODE_ENV === "production",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ink-950 text-textSoft flex flex-col min-h-screen antialiased selection:bg-ember-wash selection:text-bone">
        <SiteHeader siteData={siteData} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer siteData={siteData} />
      </body>
    </html>
  );
}
