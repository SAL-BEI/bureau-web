import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import ContactActions from "@/components/ContactActions";
import QuoteBand from "@/components/QuoteBand";
import { getService, services } from "@/data/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description} Available from Bureau Graphics at Wilson Airport, Nairobi.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="main-content">
      <section className={`service-detail-hero accent-${service.accent}`}>
        <div className="site-shell">
          <Link href="/services" className="back-link"><ArrowLeft size={17} /> All services</Link>
          <div className="service-detail-grid">
            <div>
              <p className="section-label">Service {service.number}</p>
              <h1>{service.title}</h1>
            </div>
            <div>
              <p className="service-detail-lead">{service.strapline}</p>
              <p>{service.description}</p>
            </div>
          </div>
          <span className="service-detail-mark" aria-hidden="true">{service.shortTitle}</span>
        </div>
      </section>

      <section className="section service-capabilities">
        <div className="site-shell capabilities-grid">
          <div>
            <p className="section-label">What we produce</p>
            <h2>Made for the job in front of you.</h2>
          </div>
          <div className="capability-list">
            {service.items.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3><Sparkles size={18} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section best-for-section">
        <div className="site-shell best-for-grid">
          <div>
            <p className="section-label">A good fit for</p>
            <h2>Where this process works best.</h2>
          </div>
          <div className="best-for-list">
            {service.bestFor.map((item) => <span key={item}><Check size={17} /> {item}</span>)}
          </div>
          <div className="service-contact-panel" id="quote">
            <p>Get a faster quote by including your quantity, size, material, artwork and deadline.</p>
            <ContactActions context={service.title} />
          </div>
        </div>
      </section>

      <section className="section other-services">
        <div className="site-shell">
          <div className="section-heading heading-split compact-heading">
            <div><p className="section-label">Keep exploring</p><h2>More ways to make it.</h2></div>
            <Link href="/services" className="inline-link">View all services <ArrowRight size={17} /></Link>
          </div>
          <div className="other-services-grid">
            {otherServices.map((item) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <span>{item.number}</span><h3>{item.title}</h3><ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand title={`Need a ${service.title.toLowerCase()} quote? Let’s talk details.`} />
    </main>
  );
}
