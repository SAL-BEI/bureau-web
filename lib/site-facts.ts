export type QuoteDetails = {
  topic?: string;
  product?: string;
  quantity?: string;
  size?: string;
  deadline?: string;
  artwork?: string;
  name?: string;
  phone?: string;
};

export const siteFacts = {
  name: "Bureau Graphics",
  legalName: "Bureau Graphics Limited",
  established: 1997,
  siteUrl: "https://bureau-web-blond.vercel.app",
  phoneDisplay: "0745 117 558",
  phoneE164: "+254745117558",
  secondaryPhoneDisplay: "0117 524 040",
  secondaryPhoneE164: "+254117524040",
  whatsappNumber: "254745117558",
  email: "bureaugraphicslimited@gmail.com",
  address: "Wilson Airport, Exit Lane, KAA Building No. 49, Nairobi",
  locality: "Nairobi",
  country: "Kenya",
  // TODO(owner): Confirm the production domain before replacing the preview URL.
  productionDomain: null as string | null,
  // TODO(owner): Create and confirm the domain mailbox before replacing Gmail.
  domainEmail: null as string | null,
  // TODO(owner): Confirm weekly hours before enabling the open-now display.
  openingHours: [] as Array<{ day: string; opens: string; closes: string }>,
  // TODO(owner): Confirm the normal WhatsApp reply target before publishing a promise.
  responseTime: null as string | null,
  // TODO(owner): Confirm public payment methods and any Till or Paybill details.
  paymentMethods: [] as string[],
  // TODO(owner): Add exact Facebook, Instagram and Google Business URLs.
  socialLinks: [] as Array<{ label: string; href: string }>,
} as const;

export const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Wilson%20Airport%2C%20Exit%20Lane%2C%20KAA%20Building%20No.%2049%2C%20Nairobi%2C%20Kenya";

export const wazeDirectionsUrl =
  "https://www.waze.com/ul?q=Wilson%20Airport%20Exit%20Lane%20KAA%20Building%2049%20Nairobi&navigate=yes";

export function buildWhatsAppUrl(details: QuoteDetails = {}) {
  const lines = [
    `Hello ${siteFacts.name}, I would like a quotation.`,
    details.topic ? `Service: ${details.topic}` : "",
    details.product ? `Product: ${details.product}` : "",
    details.quantity ? `Quantity: ${details.quantity}` : "",
    details.size ? `Size: ${details.size}` : "",
    details.deadline ? `Required date: ${details.deadline}` : "",
    details.artwork ? `Artwork: ${details.artwork}` : "",
    details.name ? `Name: ${details.name}` : "",
    details.phone ? `Phone: ${details.phone}` : "",
  ].filter(Boolean);

  return `https://wa.me/${siteFacts.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildEmailUrl(details: QuoteDetails = {}) {
  const subject = details.topic ? `${details.topic} quotation` : "Quotation request";
  const body = [
    `Hello ${siteFacts.name},`,
    "",
    "I would like a quotation.",
    details.topic ? `Service: ${details.topic}` : "",
    details.product ? `Product: ${details.product}` : "",
    details.quantity ? `Quantity: ${details.quantity}` : "",
    details.size ? `Size: ${details.size}` : "",
    details.deadline ? `Required date: ${details.deadline}` : "",
    details.artwork ? `Artwork: ${details.artwork}` : "",
    details.name ? `Name: ${details.name}` : "",
    details.phone ? `Phone: ${details.phone}` : "",
  ].filter((line, index, values) => line || (index === 1 && values[0]));

  return `mailto:${siteFacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join("\n"))}`;
}
