import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";
import ServiceArt from "@/components/ServiceArt";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card accent-${service.accent} ${service.featured ? "is-featured" : ""}`}>
      <Link href={`/services/${service.slug}`} className="service-card-link" aria-label={`Explore ${service.title}`} />
      <div className="service-card-copy">
        <p className="context-label">{service.shortTitle}</p>
        <h3>{service.title}</h3>
        <p>{service.strapline}</p>
        <span className="service-card-action">Explore service <ArrowRight size={16} /></span>
      </div>
      <ServiceArt art={service.art} />
      <ul className="service-facts" aria-label={`${service.title} examples`}>
        {service.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
    </article>
  );
}
