import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import QuoteBand from "@/components/QuoteBand";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Printing & Branding Services",
  description: "Explore UV, large format, digital printing, branding and finishing services from Bureau Graphics in Nairobi.",
};

const guide = [
  ["A product or rigid surface", "UV printing"],
  ["A banner, window or large plan", "Large format"],
  ["Business stationery or booklets", "Digital printing"],
  ["A campaign or branded merchandise", "Branding & design"],
  ["A manual, report or protected document", "Print finishing"],
] as const;

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero services-hero">
        <div className="site-shell page-hero-grid">
          <div>
            <p className="section-label">Services</p>
            <h1>From one sticker to a full brand rollout.</h1>
          </div>
          <div className="page-hero-aside">
            <p>Not sure which process fits your job? Tell us the product, quantity, size and deadline. We will help you choose.</p>
            <Link href="/contact#quote" className="inline-link">Ask for production advice <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section services-index">
        <div className="site-shell services-grid services-grid-page">
          {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
        </div>
      </section>

      <section className="section choose-section">
        <div className="site-shell choose-grid">
          <div className="choose-heading">
            <p className="section-label light">Quick guide</p>
            <h2>What are you making?</h2>
            <p>Start with the finished item. The right production process becomes much easier to identify from there.</p>
          </div>
          <div className="choose-list">
            {guide.map(([need, answer], index) => (
              <div key={need}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{need}</p>
                <strong><Check size={16} /> {answer}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand title="Bring the idea. We’ll work out how to produce it." />
    </main>
  );
}
