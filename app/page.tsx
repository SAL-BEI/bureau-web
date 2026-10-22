import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AviationShowcase from "@/components/AviationShowcase";
import ClientLogoRail from "@/components/ClientLogoRail";
import FaqList from "@/components/FaqList";
import HeroProofSheet from "@/components/HeroProofSheet";
import LocationCard from "@/components/LocationCard";
import PrePrintChecklist from "@/components/PrePrintChecklist";
import ProductIntent from "@/components/ProductIntent";
import QuoteBand from "@/components/QuoteBand";
import ServiceCard from "@/components/ServiceCard";
import { processSteps, services } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/site-facts";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="site-shell home-hero-grid">
          <div className="hero-copy">
            <p className="context-label">Nairobi · Wilson Airport · Your brand starts here</p>
            <h1>Bring your brand to life. We’ll make it hard to miss.</h1>
            <p className="hero-intro">From branded merchandise and signs to digital print and aviation publications, one team handles your job from artwork to finishing at Wilson Airport, Nairobi.</p>
            <div className="hero-actions">
              <ButtonLink href="/contact#quote" size="lg" eventName="hero_quote">Get a quote</ButtonLink>
              <ButtonLink href={buildWhatsAppUrl()} variant="text" size="lg" target="_blank" rel="noreferrer" eventName="hero_whatsapp">Chat on WhatsApp</ButtonLink>
            </div>
            <ul className="hero-proof" aria-label="Why work with Bureau Graphics">
              <li><Check size={15} /> Design to finishing</li>
              <li><Check size={15} /> Built around your brief</li>
              <li><Check size={15} /> Wilson Airport based</li>
            </ul>
          </div>
          <HeroProofSheet />
        </div>
      </section>

      <div className="site-shell product-intent-wrap"><ProductIntent /></div>

      <section className="section services-preview">
        <div className="site-shell">
          <div className="section-heading heading-split">
            <div><p className="context-label">Capabilities</p><h2>A brand partner with production under one roof.</h2></div>
            <div><p>Start with the result you need. We will guide the artwork, material, print method and finishing.</p><Link href="/services" className="inline-link">See all services <ArrowRight size={16} /></Link></div>
          </div>
          <div className="services-grid">
            {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section aviation-feature">
        <div className="site-shell"><AviationShowcase /></div>
      </section>

      <section className="section production-section">
        <div className="site-shell production-grid">
          <figure className="production-image">
            <Image src="/visuals/print-production.webp" fill sizes="(max-width: 900px) 100vw, 50vw" alt="Illustrative close-up of a commercial print production line" />
            <figcaption>Illustrative production visual</figcaption>
          </figure>
          <div className="production-copy">
            <p className="context-label">One practical workflow</p>
            <h2>Clear before the machine runs.</h2>
            <p>The most useful print decisions happen before production: what the item must do, how it will be handled, and what needs approval.</p>
            <ol className="process-list">
              {processSteps.map(([number, title, text, status]) => (
                <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><small>{status}</small></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section checklist-section">
        <div className="site-shell"><PrePrintChecklist /></div>
      </section>

      <section className="section client-section">
        <div className="site-shell">
          <div className="section-heading compact-heading"><p className="context-label">Selected clients</p><h2>Supporting organisations across aviation, education and business.</h2></div>
          <ClientLogoRail />
        </div>
      </section>

      <section className="section home-location">
        <div className="site-shell"><LocationCard /></div>
      </section>

      <section className="section faq-section">
        <div className="site-shell faq-grid">
          <div><p className="context-label">Before you ask</p><h2>Useful answers for a smoother first quote.</h2></div>
          <FaqList />
        </div>
      </section>

      <QuoteBand />
    </main>
  );
}
