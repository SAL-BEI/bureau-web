import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientLogoRail from "@/components/ClientLogoRail";
import QuoteBand from "@/components/QuoteBand";
import { services, workPreviews } from "@/data/site";

export const metadata: Metadata = {
  title: "Print & Branding Capabilities",
  description: "Explore Bureau Graphics capabilities across branded products, large-format output, business print and document finishing.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="site-shell page-hero-grid">
          <div><p className="context-label">Capability preview</p><h1>From identity to a finished, useful object.</h1></div>
          <div className="page-hero-aside"><p>These illustrative previews show the type of work we can produce. Ask for relevant physical or recent samples when discussing your project.</p><Link href="/contact#quote" className="inline-link">Ask about your project <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section work-showcase">
        <div className="site-shell work-preview-grid">
          {workPreviews.map((item) => (
            <article className="work-preview" key={item.title}>
              <Link href={item.href} className="work-preview-image">
                <Image src={item.image} fill sizes="(max-width: 760px) 100vw, 34vw" alt={`Illustrative ${item.title.toLowerCase()} capability preview`} />
                <span>Illustrative capability preview</span>
              </Link>
              <div><p className="context-label">{item.service}</p><h2>{item.title}</h2><p>{item.description}</p><Link href={item.href} className="inline-link">Explore service <ArrowRight size={16} /></Link></div>
            </article>
          ))}
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
