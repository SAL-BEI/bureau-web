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
  verification: {
    google: "ng3cGYjZwbGr5C75Qus5iOjP2GaHBe7AbtKbZKP43D0",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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

const brandLogoUrl = `${siteFacts.siteUrl}/bureau-graphics-mark-512.png`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteFacts.siteUrl}/#business`,
  name: siteFacts.name,
  alternateName: siteFacts.legalName,
  legalName: siteFacts.legalName,
  description: "Branding, graphic design, printing, finishing and specialised aviation publications from Wilson Airport, Nairobi.",
  url: siteFacts.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteFacts.siteUrl}/#logo`,
    url: brandLogoUrl,
    contentUrl: brandLogoUrl,
    width: 512,
    height: 512,
    caption: siteFacts.name,
  },
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteFacts.siteUrl}/#website`,
  url: `${siteFacts.siteUrl}/`,
  name: siteFacts.name,
  alternateName: [siteFacts.legalName, "bureaugraphics.com"],
  publisher: { "@id": `${siteFacts.siteUrl}/#business` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <JsonLd data={[businessSchema, websiteSchema]} />
        <Header />
        {children}
        <Footer />
        <WhatsAppBubble />
        <StickyActionBar />
      </body>
    </html>
  );
}
