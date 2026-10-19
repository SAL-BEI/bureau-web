import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Crosshair, Eye, Handshake, Lightbulb } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import QuoteBand from "@/components/QuoteBand";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bureau Graphics, a design, print and branding company serving clients from Wilson Airport, Nairobi since 1997.",
};

const values = [
  { icon: Eye, title: "Quality first", text: "We check artwork, production and finishing before the job leaves our studio." },
  { icon: Lightbulb, title: "Practical advice", text: "We help clients choose a material and process that fits the real use of the job." },
  { icon: Handshake, title: "Dependable service", text: "Clear communication and realistic production expectations matter to us." },
  { icon: Crosshair, title: "Attention to detail", text: "Small production decisions can change how the finished item looks and works." },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <div className="site-shell about-hero-grid">
          <div>
            <p className="section-label">About Bureau Graphics</p>
            <h1>Making ideas tangible since 1997.</h1>
          </div>
          <div className="about-intro">
            <p>Bureau Graphics helps individuals, businesses and aviation organisations turn ideas and information into professional printed products.</p>
            <Link href="/contact" className="inline-link">Talk to our team <ArrowRight size={17} /></Link>
          </div>
        </div>
        <div className="about-year" aria-hidden="true">1997</div>
      </section>

      <section className="section story-section">
        <div className="site-shell story-grid">
          <div><p className="section-label">Our point of view</p><h2>More than a print shop. A production partner.</h2></div>
          <div className="story-copy">
            <p>Our work starts before the machine runs. We look at the purpose, size, quantity, material and finishing so the production route makes sense from the beginning.</p>
            <p>Our Wilson Airport location keeps us close to aviation clients, while our wider capability supports companies, schools, institutions and individuals across Nairobi and Kenya.</p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="site-shell">
          <div className="section-heading"><p className="section-label">What guides the work</p><h2>Simple values. Visible in the finish.</h2></div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-process">
        <div className="site-shell">
          <div className="section-heading heading-split"><div><p className="section-label">How we work</p><h2>Clear at every stage.</h2></div><p>A shared process helps our team and the client know what happens next.</p></div>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => <article key={number}><div className="process-top"><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section home-location about-location"><div className="site-shell"><LocationCard /></div></section>
      <QuoteBand />
    </main>
  );
}
