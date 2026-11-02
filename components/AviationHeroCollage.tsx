import Image from "next/image";

export default function AviationHeroCollage() {
  return (
    <figure className="aviation-hero-visual aviation-real-collage" data-reveal>
      <div className="aviation-collage-plane">
        <Image src="/portfolio/aircraft-livery.jpg" fill priority quality={90} sizes="(max-width: 900px) 100vw, 48vw" alt="Branded aircraft livery produced by Bureau Graphics" />
      </div>
      <div className="aviation-collage-book">
        <Image src="/portfolio/aviation-handbooks.jpg" fill quality={90} sizes="(max-width: 900px) 50vw, 23vw" alt="Quick reference handbooks printed by Bureau Graphics" />
      </div>
      <div className="aviation-collage-logbook">
        <Image src="/portfolio/technical-logbook.jpg" fill quality={90} sizes="(max-width: 900px) 50vw, 23vw" alt="Bound aircraft technical logbook produced by Bureau Graphics" />
      </div>
      <figcaption>Real aviation work by Bureau Graphics</figcaption>
    </figure>
  );
}
