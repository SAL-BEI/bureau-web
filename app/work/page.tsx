import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientLogoRail from "@/components/ClientLogoRail";
import PortfolioGallery from "@/components/PortfolioGallery";
import QuoteBand from "@/components/QuoteBand";
import { services, workPreviews } from "@/data/site";

export const metadata: Metadata = {
  title: "Real Print & Branding Work",
  description: "Explore real Bureau Graphics work across branded products, aviation, large-format output, business print and document finishing.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="site-shell page-hero-grid">
          <div><p className="context-label">Selected real work</p><h1>Made here. Used out there.</h1></div>
          <div className="page-hero-aside"><p>A selection of real branding, aviation, print and display projects produced by Bureau Graphics.</p><Link href="/contact#quote" className="inline-link">Ask about your project <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section work-showcase">
        <div className="site-shell work-preview-grid">
          {workPreviews.map((item) => (
            <article className="work-preview" key={item.title} data-reveal>
              <Link href={item.href} className="work-preview-image">
                <Image src={item.image} fill quality={90} sizes="(max-width: 760px) 100vw, 34vw" alt={item.alt} />
                <span>Real Bureau Graphics work</span>
              </Link>
              <div><p className="context-label">{item.service}</p><h2>{item.title}</h2><p>{item.description}</p><Link href={item.href} className="inline-link">Explore service <ArrowRight size={16} /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="site-shell">
          <div className="section-heading heading-split" data-reveal>
            <div><p className="context-label">Project gallery</p><h2>Explore the work by category.</h2></div>
            <p>Select a category, then open any project for a closer look. Every image in this gallery comes from completed Bureau Graphics work.</p>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      <section className="section capability-matrix-section">
        <div className="site-shell capability-matrix-grid">
          <div><p className="context-label">The wider range</p><h2>One brief can cross several formats.</h2><p>A launch might need an identity, stationery, merchandise, event graphics and finishing. Keeping those decisions with one production team helps the result stay consistent.</p></div>
          <div className="capability-matrix">
            {services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><span className={`matrix-mark accent-${service.accent}`} /><strong>{service.title}</strong><small>{service.facts.join(" · ")}</small><ArrowRight size={17} /></Link>)}
          </div>
        </div>
      </section>

      <section className="section client-section work-clients">
        <div className="site-shell"><div className="section-heading compact-heading"><p className="context-label">Selected clients</p><h2>Organisations we have supported.</h2></div><ClientLogoRail /></div>
      </section>

      <QuoteBand title="Let’s turn the brief into something people can hold, see or use." />
    </main>
  );
}
