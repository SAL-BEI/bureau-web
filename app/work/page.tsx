import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ClientLogoRail from "@/components/ClientLogoRail";
import QuoteBand from "@/components/QuoteBand";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore the types of aviation, UV, corporate, large-format and document production handled by Bureau Graphics.",
};

const workTypes = [
  { number: "01", title: "Aviation documents", text: "QRHs, checklists, logbooks, manuals, crew cards and technical reference material.", className: "work-blue" },
  { number: "02", title: "UV branded products", text: "Acrylic, ABS, diaries, selected merchandise and UV DTF applications.", className: "work-violet" },
  { number: "03", title: "Corporate print", text: "Business stationery, booklets, brochures, NCR books and campaign material.", className: "work-red" },
  { number: "04", title: "Large-format output", text: "Banners, window graphics, plans, technical drawings and display print.", className: "work-orange" },
  { number: "05", title: "Signs & graphics", text: "Brand graphics, office signs, stickers, placards and visual communication.", className: "work-cyan" },
  { number: "06", title: "Document finishing", text: "Velo, wire and spiral binding, lamination and complete document assembly.", className: "work-dark" },
] as const;

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero work-hero">
        <div className="site-shell work-hero-grid">
          <div>
            <p className="section-label">Our work</p>
            <h1>Useful things.<br /><em>Made beautifully.</em></h1>
          </div>
          <div className="work-hero-image">
            <Image src="/aviation-hero.png" fill priority sizes="(max-width: 900px) 100vw, 44vw" alt="Selection of Bureau Graphics aviation print work" />
          </div>
        </div>
      </section>

      <section className="section work-index">
        <div className="site-shell">
          <div className="section-heading heading-split">
            <div><p className="section-label">What leaves our studio</p><h2>One team. Many formats.</h2></div>
            <p>This page shows the kinds of work we produce. Ask us for relevant samples when discussing your specific project.</p>
          </div>
          <div className="work-grid">
            {workTypes.map((item) => (
              <article className={item.className} key={item.title}>
                <span>{item.number}</span>
                <div><h2>{item.title}</h2><p>{item.text}</p></div>
                <ArrowUpRight size={24} />
              </article>
            ))}
          </div>
          <Link href="/contact#quote" className="work-enquiry">Ask for samples for your job <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="section client-section work-clients">
        <div className="site-shell section-heading client-heading">
          <p className="section-label">Organisations we support</p>
          <h2>Work that travels across teams, schools and skies.</h2>
        </div>
        <ClientLogoRail />
      </section>

      <QuoteBand />
    </main>
  );
}
