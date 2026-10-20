import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, ScanLine } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import QuoteBand from "@/components/QuoteBand";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About Bureau Graphics",
  description: "Bureau Graphics is a branding and print company serving business and aviation clients from Wilson Airport, Nairobi since 1997.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Eye, title: "Look closely", text: "Review the artwork, production and finishing before the job leaves the studio." },
  { icon: Lightbulb, title: "Advise practically", text: "Choose materials and methods around where and how the finished item will be used." },
  { icon: Handshake, title: "Keep it clear", text: "Agree the brief, proof and production route so everyone knows what happens next." },
  { icon: ScanLine, title: "Finish properly", text: "Treat binding, lamination and assembly as part of the job, not an afterthought." },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero">
        <div className="site-shell about-hero-grid">
          <div><p className="context-label">About Bureau Graphics</p><h1>Making brands and information tangible since 1997.</h1></div>
          <div className="about-intro"><p>Bureau Graphics helps businesses, institutions and aviation organisations move from an idea or approved file to a finished printed result.</p><div className="year-block"><strong>1997</strong><span>Established in Nairobi</span></div></div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-shell story-grid">
          <div><p className="context-label">Our point of view</p><h2>Good production starts before the machine runs.</h2></div>
          <div className="story-copy"><p>The job is not simply ink on a surface. It starts with the purpose, quantity, size, material and finish—then continues through artwork and proof approval.</p><p>Our Wilson Airport location keeps us close to aviation clients. The wider studio supports brand, business print, signage, merchandise and finished documents for clients across Nairobi and beyond.</p></div>
        </div>
      </section>

      <section className="section values-section">
        <div className="site-shell">
          <div className="section-heading compact-heading"><p className="context-label">How we approach the work</p><h2>Useful principles, visible in the result.</h2></div>
          <div className="values-grid">{values.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-process">
        <div className="site-shell">
          <div className="section-heading heading-split"><div><p className="context-label">A clear route</p><h2>From brief to finished.</h2></div><p>Each stage answers a practical question before the next begins.</p></div>
          <ol className="process-cards">{processSteps.map(([number, title, text, status]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><small>{status}</small></li>)}</ol>
        </div>
      </section>

      <section className="section about-location"><div className="site-shell"><LocationCard /></div></section>
      <QuoteBand />
    </main>
  );
}
