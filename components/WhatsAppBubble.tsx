import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-facts";

export default function WhatsAppBubble() {
  return (
    <a className="whatsapp-bubble" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp quotation">
      <MessageCircle size={22} /><span>WhatsApp</span>
    </a>
  );
}
