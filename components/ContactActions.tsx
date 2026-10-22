import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildEmailUrl, buildWhatsAppUrl, mapsDirectionsUrl, siteFacts } from "@/lib/site-facts";

export default function ContactActions({ context }: { context?: string }) {
  const details = context ? { topic: context } : {};
  const actions = [
    { label: "WhatsApp", detail: siteFacts.phoneDisplay, href: buildWhatsAppUrl(details), icon: MessageCircle, external: true, className: "whatsapp" },
    { label: "Call primary", detail: siteFacts.phoneDisplay, href: `tel:${siteFacts.phoneE164}`, icon: Phone, className: "call" },
    { label: "Call alternate", detail: siteFacts.secondaryPhoneDisplay, href: `tel:${siteFacts.secondaryPhoneE164}`, icon: Phone, className: "call" },
    { label: "Email", detail: siteFacts.email, href: buildEmailUrl(details), icon: Mail, className: "email" },
    { label: "Directions", detail: "Wilson Airport", href: mapsDirectionsUrl, icon: MapPin, external: true, className: "visit" },
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
            <Icon size={20} />
            <span><strong>{action.label}</strong><small>{action.detail}</small></span>
          </a>
        );
      })}
    </div>
  );
}
