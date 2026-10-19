import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export default function QuoteBand({ title = "Have something to print? Let’s make it real." }: { title?: string }) {
  return (
    <section className="quote-band">
      <div className="site-shell quote-band-inner">
        <div>
          <p className="section-label light">Start a project</p>
          <h2>{title}</h2>
        </div>
        <div className="quote-band-actions">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="button button-white">
            <MessageCircle size={18} /> WhatsApp us
          </a>
          <Link href="/contact#quote" className="button button-ghost-light">Contact options <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
