import LogoRow from "@/components/LogoRow";
import { clientLogos } from "@/data/site";

export default function ClientLogoRail() {
  const splitAt = Math.ceil(clientLogos.length / 2);

  return (
    <div className="client-logo-stage">
      <LogoRow logos={clientLogos.slice(0, splitAt)} />
      <LogoRow logos={clientLogos.slice(splitAt)} reverse />
    </div>
  );
}
