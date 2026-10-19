export const PHONE_DISPLAY = "0763 333 311";
export const PHONE_E164 = "+254763333311";
export const WHATSAPP_NUMBER = "254763333311";
export const EMAIL = "bureaugraphicslimited@gmail.com";
export const ADDRESS = "Wilson Airport, Exit Lane, KAA Building No. 49, Nairobi";

export const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Wilson%20Airport%2C%20Exit%20Lane%2C%20KAA%20Building%20No.%2049%2C%20Nairobi%2C%20Kenya";

export function whatsappUrl(message = "Hello Bureau Graphics, I would like a quotation.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function emailUrl(subject = "Quotation request", body = "Hello Bureau Graphics,\n\nI would like a quotation for:\n") {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
