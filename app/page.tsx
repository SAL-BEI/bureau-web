import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import ClientLogoRail from "@/components/ClientLogoRail";
import LocationCard from "@/components/LocationCard";
import QuoteBand from "@/components/QuoteBand";
import ServiceCard from "@/components/ServiceCard";
import { aviationItems, processSteps, services } from "@/data/site";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="site-shell home-hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Nairobi · Wilson Airport · Since 1997</p>
            <h1>We make brands <em>look ready</em> for takeoff.</h1>
            <p className="hero-intro">
              Design, print and branding under one roof, from one urgent business card to specialised aviation manuals and full corporate production.
            </p>
            <div className="hero-actions">
              <Link href="/contact#quote" className="button button-red">Request a quote <ArrowUpRight size={18} /></Link>
              <Link href="/services" className="text-button">Explore services <ArrowDown size={17} /></Link>
            </div>
            <div className="hero-proof" aria-label="Bureau Graphics highlights">
              <div><strong>1997</strong><span>Established</span></div>
              <div><strong>Wilson</strong><span>Airport based</span></div>
              <div><strong>One team</strong><span>Design to finishing</span></div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-image-wrap">
              <Image
                src="/aviation-hero.png"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                alt="Aircraft manuals, cockpit cards and branded aviation products produced by Bureau Graphics"
              />
            </div>
            <div className="hero-note hero-note-top"><span>Precision print</span><strong>For air &amp; ground</strong></div>
            <div className="hero-note hero-note-bottom"><strong>Design</strong><span>Print</span><span>Brand</span></div>
          </div>
        </div>
        <div className="service-ticker" aria-label="Core services">
          <div className="ticker-track">
            {[...services, ...services].map((service, index) => (
              <span key={`${service.slug}-${index}`}>{service.title}<i>✦</i></span>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="site-shell">
          <div className="section-heading heading-split">
            <div>
              <p className="section-label">What we make</p>
              <h2>Serious production.<br /><em>Zero ordinary.</em></h2>
            </div>
            <div>
              <p>Clear advice, the right print process and careful finishing. Pick a service to see what we can produce for you.</p>
              <Link href="/services" className="inline-link">See every service <ArrowRight size={17} /></Link>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="aviation-feature">
        <div className="site-shell aviation-feature-grid">
          <div className="aviation-copy">
            <p className="section-label light">Specialised aviation printing</p>
            <h2>Built around cockpit clarity.</h2>
            <p>
              From QRHs and technical logbooks to crew cards, LOPA books and aircraft placards, we support aviation teams with carefully prepared production.
            </p>
            <Link href="/aviation-printing" className="button button-white">Explore aviation printing <ArrowRight size={18} /></Link>
          </div>
          <div className="aviation-sample">
            <span className="sample-index">BG / AIR / 01</span>
            <div className="sample-window">
              <Image src="/aviation-hero.png" fill sizes="(max-width: 900px) 100vw, 50vw" alt="Aviation printing samples" />
            </div>
            <div className="sample-list">
              {aviationItems.slice(0, 4).map((item) => <span key={item}><Check size={15} /> {item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="site-shell">
          <div className="section-heading heading-split process-heading">
            <div>
              <p className="section-label">How it works</p>
              <h2>From brief to finished.</h2>
            </div>
            <p>A practical process that keeps the job clear before anything goes into production.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article key={number}>
                <div className="process-top"><span>{number}</span><MoveRight size={23} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section client-section">
        <div className="site-shell section-heading client-heading">
          <p className="section-label">Companies we support</p>
          <h2>Trusted across aviation, education and business.</h2>
        </div>
        <ClientLogoRail />
      </section>

      <section className="section home-location">
        <div className="site-shell">
          <LocationCard />
        </div>
      </section>

      <QuoteBand />
    </main>
  );
}
