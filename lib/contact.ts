import { buildEmailUrl, buildWhatsAppUrl, mapsDirectionsUrl, siteFacts } from "@/lib/site-facts";

export const PHONE_DISPLAY = siteFacts.phoneDisplay;
export const PHONE_E164 = siteFacts.phoneE164;
export const SECONDARY_PHONE_DISPLAY = siteFacts.secondaryPhoneDisplay;
export const SECONDARY_PHONE_E164 = siteFacts.secondaryPhoneE164;
export const WHATSAPP_NUMBER = siteFacts.whatsappNumber;
export const EMAIL = siteFacts.email;
export const ADDRESS = siteFacts.address;

export { mapsDirectionsUrl };

export function whatsappUrl(message = "Hello Bureau Graphics, I would like a quotation.") {
  if (message === "Hello Bureau Graphics, I would like a quotation.") return buildWhatsAppUrl();
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function emailUrl(subject = "Quotation request", body = "Hello Bureau Graphics,\n\nI would like a quotation for:\n") {
  if (subject === "Quotation request" && body === "Hello Bureau Graphics,\n\nI would like a quotation for:\n") {
    return buildEmailUrl();
  }
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
