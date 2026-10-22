import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductIntent from "@/components/ProductIntent";
import QuoteBand from "@/components/QuoteBand";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Branding & Printing Services in Nairobi",
  description: "Explore branding, graphic design, UV, large-format and digital printing, plus professional print finishing in Nairobi.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero services-hero">
        <div className="site-shell page-hero-grid">
          <div><p className="context-label">Services</p><h1>Start with what you need to make.</h1></div>
          <div className="page-hero-aside">
            <p>Branding leads our work, backed by the print and finishing capability to carry an identity across real products and spaces.</p>
            <ButtonLink href="/contact#quote" variant="secondary">Ask for production advice</ButtonLink>
          </div>
        </div>
        <div className="site-shell product-intent-wrap"><ProductIntent /></div>
      </section>

      <section className="section services-index">
        <div className="site-shell services-grid services-grid-page">
          {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
        </div>
      </section>

      <section className="section service-decision">
        <div className="site-shell decision-grid">
          <div><p className="context-label">Not sure where it fits?</p><h2>Describe the finished item, not the machine.</h2></div>
          <div><p>Tell us where it will be used, how many you need, the size, and when it is required. We will recommend a sensible production route.</p><Link href="/contact#quote" className="inline-link">Build a useful quote <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <QuoteBand title="Bring the idea. We’ll work out how to produce it." />
    </main>
  );
}
