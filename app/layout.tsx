import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StickyActionBar from "@/components/StickyActionBar";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { siteFacts } from "@/lib/site-facts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteFacts.siteUrl),
  title: {
    default: "Bureau Graphics | Branding & Print in Nairobi",
    template: "%s | Bureau Graphics",
  },
  description: "Branding, graphic design, UV, large-format and digital printing, finishing and aviation publications from Wilson Airport, Nairobi.",
  applicationName: "Bureau Graphics",
  category: "Printing and branding",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: siteFacts.name,
    title: "Bureau Graphics | Branding and print, done properly",
    description: "Branding, print and aviation production from Wilson Airport, Nairobi, since 1997.",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Bureau Graphics branding and print" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bureau Graphics | Branding and Print",
    description: "Branding, print and aviation production from Wilson Airport, Nairobi.",
    images: ["/opengraph-image.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#f6f5f0", colorScheme: "light" };

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteFacts.siteUrl}/#business`,
  name: siteFacts.name,
  legalName: siteFacts.legalName,
  url: siteFacts.siteUrl,
  logo: `${siteFacts.siteUrl}/bureau-graphics-logo-transparent.png`,
  image: `${siteFacts.siteUrl}/opengraph-image.jpg`,
  foundingDate: String(siteFacts.established),
  telephone: siteFacts.phoneE164,
  email: siteFacts.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wilson Airport, Exit Lane, KAA Building No. 49",
    addressLocality: siteFacts.locality,
    addressCountry: "KE",
  },
  areaServed: { "@type": "Country", name: siteFacts.country },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <JsonLd data={businessSchema} />
        <Header />
        {children}
        <Footer />
        <WhatsAppBubble />
        <StickyActionBar />
      </body>
    </html>
  );
}
