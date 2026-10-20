import type { ServiceArt as ServiceArtName } from "@/data/site";

export default function ServiceArt({ art }: { art: ServiceArtName }) {
  if (art === "swatches") {
    return (
      <div className="service-art art-swatches" aria-hidden="true">
        <span className="swatch swatch-one" /><span className="swatch swatch-two" />
        <span className="swatch swatch-three" /><span className="swatch swatch-four" />
        <span className="type-sample">Aa</span><span className="mini-card" />
      </div>
    );
  }

  if (art === "substrates") {
    return (
      <div className="service-art art-substrates" aria-hidden="true">
        <span data-label="Acrylic" /><span data-label="ABS" /><span data-label="Diary" /><span data-label="UV DTF" />
      </div>
    );
  }

  if (art === "scale") {
    return (
      <div className="service-art art-scale" aria-hidden="true">
        <span className="banner-sheet"><i /></span><span className="scale-person" />
        <span className="scale-ruler">1.8 m</span>
      </div>
    );
  }

  if (art === "registration") {
    return (
      <div className="service-art art-registration" aria-hidden="true">
        <span className="ink-c" /><span className="ink-m" /><span className="ink-y" /><span className="ink-k" />
        <span className="registration-target" /><span className="colour-bar" />
      </div>
    );
  }

  return (
    <div className="service-art art-finishing" aria-hidden="true">
      <span className="paper-layer layer-one" /><span className="paper-layer layer-two" />
      <span className="paper-layer layer-three" /><span className="paper-layer layer-four" />
      <span className="binding-comb" />
    </div>
  );
}
