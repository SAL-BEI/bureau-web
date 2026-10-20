import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { services } from "@/data/site";
import { buildWhatsAppUrl, mapsDirectionsUrl, siteFacts } from "@/lib/site-facts";

export default function Footer() {
  return (
    <footer className="site-footer" data-final-cta>
      <div className="site-shell footer-top">
        <div className="footer-lead">
          <Link href="/" className="footer-logo" aria-label="Bureau Graphics home">
            <Image src="/bureau-graphics-logo-transparent.png" width={900} height={405} alt="Bureau Graphics" />
          </Link>
          <p>Branding, print and aviation production from Wilson Airport, Nairobi.</p>
          <a className="footer-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Start on WhatsApp
          </a>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/aviation-printing">Aviation printing</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <nav className="footer-links footer-services" aria-label="Service links">
          <h2>Services</h2>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </nav>

        <div className="footer-links footer-contact">
          <h2>Find us</h2>
          <a href={`tel:${siteFacts.phoneE164}`}>{siteFacts.phoneDisplay}</a>
          <a href={`mailto:${siteFacts.email}`}>{siteFacts.email}</a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">{siteFacts.address}</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Bureau Graphics Limited</span>
        <span>Established 1997</span>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
