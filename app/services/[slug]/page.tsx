import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import JsonLd from "@/components/JsonLd";
import QuoteBand from "@/components/QuoteBand";
import ServiceArt from "@/components/ServiceArt";
import { getService, services } from "@/data/site";
import { siteFacts } from "@/lib/site-facts";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Nairobi`,
    description: `${service.description} Available from Bureau Graphics at Wilson Airport, Nairobi.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteFacts.siteUrl}/services/${service.slug}`,
    provider: { "@id": `${siteFacts.siteUrl}/#business` },
    areaServed: "Kenya",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteFacts.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteFacts.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteFacts.siteUrl}/services/${service.slug}` },
    ],
  };

  return (
    <main id="main-content">
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <section className={`service-detail-hero accent-${service.accent}`}>
        <div className="site-shell">
          <Link href="/services" className="back-link"><ArrowLeft size={16} /> All services</Link>
          <div className="service-detail-grid">
            <div><p className="context-label">{service.shortTitle}</p><h1>{service.title}</h1><p className="service-detail-lead">{service.strapline}</p></div>
            <ServiceArt art={service.art} />
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="site-shell overview-grid">
          <div><p className="context-label">What it covers</p><h2>Made for the job in front of you.</h2><p>{service.description}</p></div>
          <ul className="capability-list">
            {service.items.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section service-fit-section">
        <div className="site-shell service-fit-grid">
          <div><p className="context-label">A good fit for</p><h2>Where this service is most useful.</h2></div>
          <div className="best-for-list">{service.bestFor.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="service-contact-panel" id="quote">
            <div><h3>Ask about {service.title.toLowerCase()}</h3><p>Include quantity, size, artwork status and required date for a more useful answer.</p></div>
            <ContactActions context={service.title} />
          </div>
        </div>
      </section>

      <section className="section other-services">
        <div className="site-shell">
          <div className="section-heading heading-split compact-heading"><div><p className="context-label">Keep exploring</p><h2>Other ways to make it.</h2></div><Link href="/services" className="inline-link">All services <ArrowRight size={16} /></Link></div>
          <div className="other-services-grid">
            {otherServices.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.shortTitle}</span><h3>{item.title}</h3><ArrowRight size={19} /></Link>)}
          </div>
        </div>
      </section>

      <QuoteBand title={`Ready to discuss ${service.shortTitle.toLowerCase()}?`} context={service.title} />
    </main>
  );
}
