import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card accent-${service.accent} ${service.featured ? "is-featured" : ""}`} data-reveal>
      <Link href={`/services/${service.slug}`} className="service-card-link" aria-label={`Explore ${service.title}`} />
      <div className="service-card-copy">
        <p className="context-label">{service.shortTitle}</p>
        <h3>{service.title}</h3>
        <p>{service.strapline}</p>
        <span className="service-card-action">Explore service <ArrowRight size={16} /></span>
      </div>
      <div className="service-card-media" aria-hidden="true">
        <Image src={service.image} alt="" fill quality={90} sizes="(max-width: 650px) 100vw, 28vw" style={{ objectPosition: service.imagePosition ?? "center" }} />
        <span>Real work</span>
      </div>
      <ul className="service-facts" aria-label={`${service.title} examples`}>
        {service.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
    </article>
  );
}
