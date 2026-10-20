import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-facts";
import { ButtonLink } from "@/components/ui/Button";

export default function QuoteBand({ title = "Ready to put your brand into the world?", context }: { title?: string; context?: string }) {
  return (
    <section className="quote-band" data-final-cta>
      <div className="site-shell quote-band-inner">
        <div>
          <p className="context-label on-dark">Start a project</p>
          <h2>{title}</h2>
          <p>Send the product, quantity, size and required date. We will help with the rest.</p>
        </div>
        <div className="quote-band-actions">
          <ButtonLink href="/contact#quote" variant="on-dark" size="lg" eventName="quote_band_form">Build your quote</ButtonLink>
          <ButtonLink href={buildWhatsAppUrl({ topic: context })} variant="on-dark-outline" size="lg" target="_blank" rel="noreferrer" eventName="quote_band_whatsapp">
            <MessageCircle size={18} /> WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
