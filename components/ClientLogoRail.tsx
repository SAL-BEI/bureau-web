import Image from "next/image";
import { featuredClientLogos } from "@/data/site";

export default function ClientLogoRail() {
  return (
    <div className="client-logo-grid" aria-label="Selected client logos">
      {featuredClientLogos.map(([name, file]) => (
        <div className="client-logo" key={name}>
          <Image src={`/clients/logo-${file}.png`} width={221} height={107} alt={name} />
        </div>
      ))}
    </div>
  );
}
