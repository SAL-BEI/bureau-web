import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className={`service-card accent-${service.accent}`}>
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span className="service-arrow"><ArrowUpRight size={22} /></span>
      </div>
      <div>
        <p className="service-short">{service.shortTitle}</p>
        <h3>{service.title}</h3>
        <p>{service.strapline}</p>
      </div>
    </Link>
  );
}
