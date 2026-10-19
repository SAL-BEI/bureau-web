import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMAIL, emailUrl, mapsDirectionsUrl, PHONE_DISPLAY, PHONE_E164, whatsappUrl } from "@/lib/contact";

export default function ContactActions({ context }: { context?: string }) {
  const message = context
    ? `Hello Bureau Graphics, I would like a quotation for ${context}. My quantity and specifications are:`
    : "Hello Bureau Graphics, I would like a quotation. My product, quantity and specifications are:";

  const actions = [
    { label: "WhatsApp", detail: "Fastest for quotations", href: whatsappUrl(message), icon: MessageCircle, external: true, className: "whatsapp" },
    { label: "Call us", detail: PHONE_DISPLAY, href: `tel:${PHONE_E164}`, icon: Phone, className: "call" },
    { label: "Email", detail: EMAIL, href: emailUrl(context ? `${context} quotation` : "Quotation request"), icon: Mail, className: "email" },
    { label: "Visit", detail: "Open directions", href: mapsDirectionsUrl, icon: MapPin, external: true, className: "visit" },
  ];

  return (
    <div className="contact-actions">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            className={`contact-action ${action.className}`}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            key={action.label}
          >
            <span className="contact-action-icon"><Icon size={21} /></span>
            <span><strong>{action.label}</strong><small>{action.detail}</small></span>
            <ArrowUpRight size={18} className="contact-action-arrow" />
          </a>
        );
      })}
    </div>
  );
}
