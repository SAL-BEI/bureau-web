import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { aviationItems, services } from "../data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aviationOpen, setAviationOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAviationOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setAviationOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href="tel:+254763333311"><Phone size={13} /> 0763 333 311</a>
          <a href="#contact"><MapPin size={13} /> Wilson Airport, Exit Lane, KAA Building No. 49</a>
          <a href="mailto:bureaugraphicslimited@gmail.com"><Mail size={13} /> bureaugraphicslimited@gmail.com</a>
        </div>
      </div>

      <header className="header" ref={headerRef}>
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Bureau Graphics home">
            <img src="/bureau-graphics-logo.png" alt="Bureau Graphics - Design. Print. Brand." />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav id="main-navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            <a href="#home" onClick={closeMenus}>Home</a>

            <div className="nav-dropdown">
              <button
                type="button"
                onClick={() => {
                  setServicesOpen((open) => !open);
                  setAviationOpen(false);
                }}
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown size={16} />
              </button>
              <div className={`dropdown services-dropdown ${servicesOpen ? "open" : ""}`}>
                {services.map((service) => (
                  <div className="service-menu-group" key={service.title}>
                    <a className="service-menu-heading" href="#services" onClick={closeMenus}>{service.title}</a>
                    {service.items.map((item) => (
                      <a key={item} href="#services" onClick={closeMenus}>{item}</a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-dropdown">
              <button
                type="button"
                onClick={() => {
                  setAviationOpen((open) => !open);
                  setServicesOpen(false);
                }}
                aria-expanded={aviationOpen}
              >
                Aviation Printing <ChevronDown size={16} />
              </button>
              <div className={`dropdown ${aviationOpen ? "open" : ""}`}>
                {aviationItems.map((item) => (
                  <a key={item} href="#aviation" onClick={closeMenus}>{item}</a>
                ))}
              </div>
            </div>

            <a href="#about" onClick={closeMenus}>About</a>
            <a href="#contact" onClick={closeMenus}>Contact</a>
            <a className="nav-quote" href="#quote" onClick={closeMenus}>Request a Quote</a>
          </nav>
        </div>
      </header>
    </>
  );
}
