import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { ADDRESS, EMAIL, mapsDirectionsUrl, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div className="footer-lead">
          <Link href="/" className="footer-logo">
            <Image src="/bureau-graphics-logo.png" width={3287} height={1483} alt="Bureau Graphics" />
          </Link>
          <p>Design, print and branding support for businesses and aviation organisations from Wilson Airport, Nairobi.</p>
          <a className="footer-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Start on WhatsApp <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-links">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/aviation-printing">Aviation printing</Link>
          <Link href="/work">Our work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links footer-services">
          <h2>Services</h2>
          {services.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </div>

        <div className="footer-links footer-contact">
          <h2>Find us</h2>
          <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">{ADDRESS}</a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Bureau Graphics</span>
        <span>Since 1997 · Design. Print. Brand.</span>
      </div>
    </footer>
  );
}
