import type { Metadata } from "next";
import ContactActions from "@/components/ContactActions";
import FaqList from "@/components/FaqList";
import LocationCard from "@/components/LocationCard";
import QuoteBuilder from "@/components/QuoteBuilder";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Request a branding or printing quote from Bureau Graphics by WhatsApp or email, call the team, or get directions to Wilson Airport.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero">
        <div className="site-shell contact-hero-grid">
          <div><p className="context-label on-dark">Contact Bureau Graphics</p><h1>Tell us what you’re making.</h1><p>Start with the product, quantity, size and date. We will help you identify the suitable material and production route.</p></div>
          <ContactActions />
        </div>
      </section>

      <section className="section quote-builder-section" id="quote"><div className="site-shell"><QuoteBuilder /></div></section>

      <section className="section contact-location">
        <div className="site-shell"><div className="section-heading compact-heading"><p className="context-label">Visit the studio</p><h2>Open a route to Wilson Airport.</h2></div><LocationCard /></div>
      </section>

      <section className="section faq-section contact-faq">
        <div className="site-shell faq-grid"><div><p className="context-label">Common questions</p><h2>What to know before you send the brief.</h2></div><FaqList /></div>
      </section>
    </main>
  );
}
