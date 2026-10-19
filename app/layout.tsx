import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bureau-web-blond.vercel.app"),
  title: {
    default: "Bureau Graphics | Design, Print & Brand in Nairobi",
    template: "%s | Bureau Graphics",
  },
  description:
    "UV printing, large format, digital printing, aviation technical publications, branding and finishing from Wilson Airport, Nairobi.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Bureau Graphics",
    title: "Bureau Graphics | Design, Print & Brand",
    description: "Professional print, branding and aviation production from Wilson Airport, Nairobi.",
    images: [{ url: "/aviation-hero.png", width: 1662, height: 946, alt: "Bureau Graphics aviation printing" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
