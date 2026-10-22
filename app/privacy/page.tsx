import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Bureau Graphics website handles quote details and external contact links.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="page-hero legal-hero"><div className="site-shell"><p className="context-label">Privacy</p><h1>A simple contact flow, without an on-site account.</h1></div></section>
      <section className="section legal-section">
        <div className="site-shell legal-copy">
          <h2>Quote details</h2><p>The quote builder does not submit information to a Bureau Graphics database. It keeps your draft in this browser’s session storage, then prepares a WhatsApp message or email when you choose one of those actions.</p>
          <h2>WhatsApp and email</h2><p>Once you continue to WhatsApp or your email application, the information is handled by that service and by Bureau Graphics as part of responding to your enquiry.</p>
          <h2>Technical information</h2><p>The website host may process standard technical information such as IP address, browser type and request logs for delivery, reliability and security. This website does not currently provide customer accounts or online payments.</p>
          <h2>Your choices</h2><p>You can clear the draft by closing the browser session or clearing site data. You can also contact Bureau Graphics to ask about personal information shared through an enquiry.</p>
          <p><Link href="/contact" className="inline-link">Contact Bureau Graphics</Link></p>
        </div>
      </section>
    </main>
  );
}
