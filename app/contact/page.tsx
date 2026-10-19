import type { Metadata } from "next";
import ContactActions from "@/components/ContactActions";
import LocationCard from "@/components/LocationCard";

export const metadata: Metadata = {
  title: "Contact & Quotations",
  description: "Contact Bureau Graphics by WhatsApp, phone or email, or get directions to our Wilson Airport office in Nairobi.",
};

const quoteDetails = ["Product or service", "Size or dimensions", "Quantity", "Preferred material or finish", "Artwork or reference image", "Required date"];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="contact-hero" id="quote">
        <div className="site-shell contact-hero-grid">
          <div>
            <p className="section-label light">Contact us</p>
            <h1>Tell us what you’re making.</h1>
            <p>WhatsApp is the fastest way to begin a quotation. You can also call, email or visit us at Wilson Airport.</p>
          </div>
          <div className="contact-actions-wrap"><ContactActions /></div>
        </div>
      </section>

      <section className="section quote-guide">
        <div className="site-shell quote-guide-grid">
          <div>
            <p className="section-label">Get a faster answer</p>
            <h2>Six details make a useful quote.</h2>
            <p>Send what you already know. If you are unsure about material or finishing, we can recommend an option.</p>
          </div>
          <ol>
            {quoteDetails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ol>
        </div>
      </section>

      <section className="section contact-location">
        <div className="site-shell">
          <div className="section-heading"><p className="section-label">Visit the studio</p><h2>Open the card. Follow the directions.</h2></div>
          <LocationCard />
        </div>
      </section>
    </main>
  );
}
