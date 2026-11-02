import Image from "next/image";

export default function HeroProofSheet() {
  return (
    <figure className="hero-proof-sheet" data-reveal>
      <div className="hero-work-collage">
        <div className="hero-work-card hero-work-main">
          <Image
            src="/portfolio/bureau-brand-kit.jpg"
            fill
            priority
            quality={90}
            sizes="(max-width: 820px) 72vw, 38vw"
            alt="Bureau Graphics branded merchandise, flags and event display materials"
          />
        </div>
        <div className="hero-work-card hero-work-flag">
          <Image
            src="/portfolio/bureau-feather-flag.jpg"
            fill
            priority
            quality={90}
            sizes="(max-width: 820px) 27vw, 12vw"
            alt="Bureau Graphics branded feather flag"
          />
        </div>
        <div className="hero-work-card hero-work-rollup">
          <Image
            src="/portfolio/bureau-rollup-banner.jpg"
            fill
            priority
            quality={90}
            sizes="(max-width: 820px) 27vw, 12vw"
            alt="Bureau Graphics branded roll-up banner"
          />
        </div>
        <span className="hero-work-note"><small>Real work</small><strong>Made by Bureau</strong></span>
      </div>
      <figcaption><span>Selected Bureau Graphics work</span><strong>Branding · print · display</strong></figcaption>
    </figure>
  );
}
