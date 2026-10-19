"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { services } from "@/data/site";
import { EMAIL, mapsDirectionsUrl, PHONE_DISPLAY, PHONE_E164 } from "@/lib/contact";

const navigation = [
  ["Home", "/"],
  ["Aviation", "/aviation-printing"],
  ["Our work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <a href={`tel:${PHONE_E164}`}><Phone size={13} /> {PHONE_DISPLAY}</a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer" className="utility-location">
            <MapPin size={13} /> Wilson Airport, Exit Lane, KAA Building No. 49
          </a>
          <a href={`mailto:${EMAIL}`} className="utility-email"><Mail size={13} /> {EMAIL}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell nav-shell">
          <Link href="/" className="site-logo" aria-label="Bureau Graphics home" onClick={closeMenus}>
            <Image src="/bureau-graphics-logo.png" width={3287} height={1483} priority alt="Bureau Graphics" />
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <Link href="/" className={pathname === "/" ? "is-active" : ""} onClick={closeMenus}>Home</Link>

            <div className="nav-services">
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((current) => !current)}
                className={pathname.startsWith("/services") ? "is-active" : ""}
              >
                Services <ChevronDown size={15} />
              </button>
              <div className={`services-menu ${servicesOpen ? "is-open" : ""}`}>
                <Link href="/services" className="services-menu-all" onClick={closeMenus}>
                  <span>All services</span><ArrowUpRight size={17} />
                </Link>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeMenus}>
                    <span>{service.number}</span>
                    <strong>{service.title}</strong>
                  </Link>
                ))}
              </div>
            </div>

            {navigation.slice(1).map(([label, href]) => (
              <Link key={href} href={href} className={pathname === href ? "is-active" : ""} onClick={closeMenus}>{label}</Link>
            ))}

            <Link href="/contact#quote" className="nav-cta" onClick={closeMenus}>Request a quote <ArrowUpRight size={17} /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
