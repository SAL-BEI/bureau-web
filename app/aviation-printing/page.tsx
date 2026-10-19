import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, FileCheck2, Gauge, Layers3 } from "lucide-react";
import QuoteBand from "@/components/QuoteBand";
import { aviationItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviation Printing",
  description: "Technical logbooks, QRHs, checklists, aviation manuals, crew cards, maps, placards and aviation merchandise in Nairobi.",
};

export default function AviationPrintingPage() {
  return (
    <main id="main-content" className="aviation-page">
      <section className="aviation-page-hero">
        <div className="site-shell aviation-page-grid">
          <div className="aviation-page-copy">
            <p className="section-label light">Aviation printing</p>
            <h1>Precision belongs in every detail.</h1>
            <p>Specialised production for operators, training organisations, engineers and flight crews from our Wilson Airport base.</p>
            <div className="hero-actions">
              <Link href="/contact#quote" className="button button-white">Request aviation quote <ArrowRight size={18} /></Link>
              <a href="#capabilities" className="text-button text-button-light">See capabilities</a>
            </div>
          </div>
          <div className="aviation-page-image">
            <Image src="/aviation-hero.png" fill priority sizes="(max-width: 900px) 100vw, 52vw" alt="Aviation manuals, cockpit cards and branded products" />
            <span>Wilson Airport · Nairobi</span>
          </div>
        </div>
      </section>

      <section className="aviation-principles">
        <div className="site-shell principle-grid">
          <article><FileCheck2 /><span>01</span><h2>Clear artwork</h2><p>Layouts checked carefully before production begins.</p></article>
          <article><Gauge /><span>02</span><h2>Practical materials</h2><p>Material and finish chosen around the document’s use.</p></article>
          <article><Layers3 /><span>03</span><h2>Complete finishing</h2><p>Printing, binding and lamination managed together.</p></article>
        </div>
      </section>

      <section className="section aviation-capabilities" id="capabilities">
        <div className="site-shell capabilities-grid">
          <div className="sticky-heading">
            <p className="section-label">What we produce</p>
            <h2>Made for the people who keep aircraft moving.</h2>
            <p>Share your approved file, required size, quantity and finish. We will confirm the production route before printing.</p>
          </div>
          <div className="aviation-item-list">
            {aviationItems.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3><Check size={18} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section aviation-location-note">
        <div className="site-shell editorial-note">
          <p>Based where aviation happens</p>
          <h2>Wilson Airport is not just our address. It shapes how we understand the work.</h2>
          <Link href="/about" className="inline-link">About Bureau Graphics <ArrowRight size={17} /></Link>
        </div>
      </section>

      <QuoteBand title="Your next aviation print job can start right here." />
    </main>
  );
}
