import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { getSiteData } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";

const siteData = getSiteData();
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteData.title,
    description: siteData.subline,
    siteName: siteData.name,
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: siteData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.title,
    description: siteData.subline,
    images: [`${siteUrl}/og-image.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd
          name={siteData.name}
          jobTitle="Web Developer & Computer Science Lecturer"
          url={siteUrl}
          image={`${siteUrl}/images/monifa-sultana.jpg`}
        />
        <WebSiteJsonLd
          name={siteData.name}
          url={siteUrl}
          description={siteData.subline}
        />
      </head>
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
