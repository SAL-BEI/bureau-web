import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, FileCheck2, Layers3, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import LocationCard from "@/components/LocationCard";
import QuoteBand from "@/components/QuoteBand";
import { ButtonLink } from "@/components/ui/Button";
import { aviationItems } from "@/data/site";
import { siteFacts } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "Aviation Printing in Nairobi",
  description: "QRHs, technical logbooks, checklists, manuals, crew cards, aviation maps, placards and merchandise from Wilson Airport, Nairobi.",
  alternates: { canonical: "/aviation-printing" },
};

const aviationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aviation printing",
  description: "Printing and finishing for aviation manuals, logbooks, checklists, cards, maps, placards and merchandise.",
  url: `${siteFacts.siteUrl}/aviation-printing`,
  provider: { "@id": `${siteFacts.siteUrl}/#business` },
  areaServed: "Kenya",
};

export default function AviationPrintingPage() {
  return (
    <main id="main-content" className="aviation-page">
      <JsonLd data={aviationSchema} />
      <section className="aviation-page-hero">
        <div className="site-shell aviation-page-grid">
          <div className="aviation-page-copy">
            <p className="context-label on-dark">Aviation printing</p>
            <h1>Clear on the ground. Ready for the flight deck.</h1>
            <p>Specialised print and finishing for operators, training organisations, engineers and flight crews—from our base at Wilson Airport.</p>
            <div className="hero-actions">
              <ButtonLink href="/contact?service=Aviation%20printing#quote" variant="on-dark" size="lg">Request an aviation quote</ButtonLink>
              <Link href="#capabilities" className="light-link">View the range <ArrowRight size={16} /></Link>
            </div>
            <ul className="aviation-proof">
              <li><MapPin size={16} /> Wilson Airport based</li>
              <li><FileCheck2 size={16} /> Proof before production</li>
              <li><Layers3 size={16} /> Print and finishing together</li>
            </ul>
          </div>
          <figure className="aviation-hero-visual">
            <Image src="/visuals/aviation-range.webp" fill priority sizes="(max-width: 900px) 100vw, 49vw" alt="Illustrative aviation print products including manuals and crew items" />
            <figcaption>Illustrative capability preview</figcaption>
          </figure>
        </div>
      </section>

      <section className="section aviation-capabilities" id="capabilities">
        <div className="site-shell capabilities-grid">
          <div className="sticky-heading">
            <p className="context-label">Publication range</p>
            <h2>For reference, operation, training and the aircraft itself.</h2>
            <p>Provide the approved source content, required format, quantity and finish. We will confirm the production route before printing.</p>
          </div>
          <ul className="aviation-item-list">
            {aviationItems.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section aviation-control-section">
        <div className="site-shell control-grid">
          <div><p className="context-label">Production discipline</p><h2>Approved content in. Carefully finished output out.</h2></div>
          <div className="control-cards">
            <article><span>01</span><h3>Source check</h3><p>Confirm the supplied file, size, page order and version before the job is released.</p></article>
            <article><span>02</span><h3>Proof and finish</h3><p>Review the digital proof and agree the binding, lamination or assembly route.</p></article>
            <article><span>03</span><h3>Production check</h3><p>Print, finish and inspect the physical output before collection or agreed delivery.</p></article>
          </div>
          <p className="aviation-responsibility">The customer remains responsible for approving technical content and revision status. Bureau Graphics produces from the supplied, approved artwork.</p>
        </div>
      </section>

      <section className="section aviation-location"><div className="site-shell"><LocationCard /></div></section>
      <QuoteBand title="Have an aviation publication ready to produce?" context="Aviation printing" />
    </main>
  );
}
