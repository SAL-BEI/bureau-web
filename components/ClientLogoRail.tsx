import Image from "next/image";
import { clientLogos } from "@/data/site";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return clientLogos.map(([name, file]) => (
    <div className="client-logo" key={`${name}-${hidden ? "copy" : "main"}`} aria-hidden={hidden || undefined}>
      <Image src={`/clients/logo-${file}.png`} width={221} height={107} alt={hidden ? "" : name} />
    </div>
  ));
}

export default function ClientLogoRail() {
  return (
    <div className="logo-rail" aria-label="Client logos">
      <div className="logo-track">
        <LogoSet />
        <LogoSet hidden />
      </div>
    </div>
  );
}
