"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { services } from "@/data/site";
import { mapsDirectionsUrl, siteFacts } from "@/lib/site-facts";
import { ButtonLink } from "@/components/ui/Button";

const navigation = [
  ["Home", "/"],
  ["Aviation", "/aviation-printing"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <a href={`tel:${siteFacts.phoneE164}`}><Phone size={13} /> {siteFacts.phoneDisplay}</a>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
            <MapPin size={13} /> Wilson Airport, KAA Building No. 49
          </a>
          <a href={`mailto:${siteFacts.email}`} className="utility-email"><Mail size={13} /> {siteFacts.email}</a>
        </div>
      </div>

      <div className="nav-bar">
        <div className="site-shell nav-shell">
          <Link href="/" className="site-logo" aria-label="Bureau Graphics home" onClick={closeMenus}>
            <Image src="/bureau-graphics-logo-transparent.png" width={900} height={405} priority alt="Bureau Graphics" />
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav id="main-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
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
                  <strong>All services</strong><span>Choose by what you need to make</span>
                </Link>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeMenus}>
                    <i className={`service-dot accent-${service.accent}`} aria-hidden="true" />
                    <span><strong>{service.title}</strong><small>{service.shortTitle}</small></span>
                  </Link>
                ))}
              </div>
            </div>

            {navigation.slice(1).map(([label, href]) => (
              <Link key={href} href={href} className={pathname === href ? "is-active" : ""} onClick={closeMenus}>{label}</Link>
            ))}

            <ButtonLink href="/contact#quote" variant={compact ? "primary" : "secondary"} className="nav-quote" eventName="header_quote">
              Get a quote
            </ButtonLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
