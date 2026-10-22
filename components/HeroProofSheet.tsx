import Image from "next/image";

export default function HeroProofSheet() {
  return (
    <figure className="hero-proof-sheet">
      <div className="hero-image-frame">
        <Image
          src="/visuals/branding-hero.webp"
          fill
          priority
          sizes="(max-width: 820px) 100vw, 52vw"
          alt="Illustrative arrangement of branded stationery, packaging and merchandise"
        />
        <span className="hero-sheet-label label-brand">Identity</span>
        <span className="hero-sheet-label label-print">Print</span>
        <span className="hero-sheet-label label-merch">Merchandise</span>
      </div>
      <figcaption><span>Illustrative product visual</span><strong>Replaceable with your finished work</strong></figcaption>
    </figure>
  );
}
