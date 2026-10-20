export type ServiceAccent = "violet" | "orange" | "blue" | "cyan" | "red";
export type ServiceArt = "substrates" | "scale" | "registration" | "swatches" | "finishing";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  strapline: string;
  description: string;
  items: string[];
  bestFor: string[];
  accent: ServiceAccent;
  art: ServiceArt;
  facts: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "branding",
    number: "04",
    title: "Branding & Design",
    shortTitle: "Branding",
    strapline: "Graphic design and branded products that keep every touchpoint consistent.",
    description:
      "Graphic design and branded merchandise for organisations that need a clear, consistent presence across stationery, displays, events and promotional products.",
    items: ["Graphic design", "Corporate merchandise", "Artwork preparation", "Campaign print support", "Brand application"],
    bestFor: ["Brand launches", "Staff merchandise", "Customer gifts", "Campaign rollouts"],
    facts: ["Graphic design", "Corporate merchandise", "Print-ready artwork"],
    accent: "cyan",
    art: "swatches",
    featured: true,
  },
  {
    slug: "uv-printing",
    number: "01",
    title: "UV Printing",
    shortTitle: "UV",
    strapline: "Direct printing for products, rigid boards and specialty surfaces.",
    description:
      "Direct-to-surface printing for flat items, selected cylindrical products and transferable UV DTF graphics, with white ink and varnish options when the artwork and material require them.",
    items: ["UV flatbed printing", "UV rotary printing", "UV DTF stickers", "Acrylic and ABS branding", "Diary and merchandise branding"],
    bestFor: ["Corporate gifts", "Product labels", "Office signs", "Short custom runs"],
    facts: ["Acrylic and ABS", "Diaries and merchandise", "UV DTF stickers"],
    accent: "violet",
    art: "substrates",
  },
  {
    slug: "large-format-printing",
    number: "02",
    title: "Large Format Printing",
    shortTitle: "Large format",
    strapline: "Banners, displays, graphics and technical output at useful scale.",
    description:
      "Large graphics and technical output for indoor, outdoor and presentation use, produced with the material and finishing method that suits the job.",
    items: ["Banners", "Window graphics", "Print and cut", "Reflective stickers", "Architectural drawings", "Photo printing"],
    bestFor: ["Events", "Retail spaces", "Wayfinding", "Plans and drawings"],
    facts: ["Banners and displays", "Window graphics", "Plans and drawings"],
    accent: "orange",
    art: "scale",
  },
  {
    slug: "digital-printing",
    number: "03",
    title: "Digital Printing",
    shortTitle: "Digital",
    strapline: "Professional short-run print for everyday business communication.",
    description:
      "Short-run printing for business communication, marketing material and operational documents, from one urgent copy to repeat corporate orders.",
    items: ["Business cards", "Flyers and brochures", "Posters", "Manuals and booklets", "Receipt and NCR books"],
    bestFor: ["Business stationery", "Marketing material", "Training documents", "Short print runs"],
    facts: ["Business stationery", "Brochures and booklets", "Receipt and NCR books"],
    accent: "blue",
    art: "registration",
  },
  {
    slug: "finishing",
    number: "05",
    title: "Print Finishing",
    shortTitle: "Finishing",
    strapline: "Binding, lamination and document assembly for a complete result.",
    description:
      "Binding, lamination and document finishing that protects printed work and gives it a clean, professional presentation.",
    items: ["Velo binding", "Wire binding", "Spiral binding", "Lamination up to A0", "Document assembly"],
    bestFor: ["Manuals", "Reports", "Reference books", "Display material"],
    facts: ["Velo, wire and spiral", "Lamination up to A0", "Document assembly"],
    accent: "red",
    art: "finishing",
  },
];

export const products = [
  { slug: "business-cards", name: "Business cards", service: "digital-printing" },
  { slug: "brochures-profiles", name: "Brochures & profiles", service: "digital-printing" },
  { slug: "banners-signage", name: "Banners & signage", service: "large-format-printing" },
  { slug: "stickers-labels", name: "Stickers & labels", service: "uv-printing" },
  { slug: "branded-merchandise", name: "Branded merchandise", service: "branding" },
  { slug: "notebooks-diaries", name: "Notebooks & diaries", service: "branding" },
  { slug: "aviation-manuals", name: "Aviation manuals & checklists", service: "aviation-printing" },
] as const;

export const aviationItems = [
  "Technical logbooks",
  "Quick Reference Handbooks (QRH)",
  "Pilot and cabin crew checklists",
  "Aircraft Flight Manuals (AFM)",
  "Pilot Operating Handbooks (POH)",
  "Crew and briefing cards",
  "Journey, engine and propeller logbooks",
  "LOPA and emergency equipment books",
  "Aircraft decals and placards",
  "Aviation map printing and lamination",
  "Aviation merchandise",
];

export const aviationHighlights = [
  { id: "qrh", label: "QRHs", title: "Quick reference handbooks", detail: "Compact reference documents prepared around the supplied approved content." },
  { id: "logbooks", label: "Logbooks", title: "Technical logbooks", detail: "Bound operational records with the layout and finishing agreed before production." },
  { id: "checklists", label: "Checklists", title: "Flight and crew checklists", detail: "Clear, usable checklist formats for cockpit, cabin and training use." },
  { id: "lopa", label: "LOPA", title: "LOPA and equipment books", detail: "Structured books for cabin layout and emergency equipment information." },
  { id: "placards", label: "Placards", title: "Aircraft placards and decals", detail: "Printed labels, markings and graphics produced from approved artwork." },
  { id: "maps", label: "Maps", title: "Aviation maps", detail: "Map printing and lamination for reference, briefing and display." },
] as const;

export const clientLogos = [
  ["Renegade Air", "000"], ["Think Aviation Training", "001"], ["Penial Air", "002"],
  ["Kenya Airports Authority", "003"], ["Aberdair Aviation", "004"], ["Twinstar Aviation", "005"],
  ["REREC", "006"], ["Sunshine Schools", "007"], ["Crawford International School", "008"],
  ["Capital Connect Aviation", "009"], ["Aero Instrument Service", "010"], ["Weston Hotel", "011"],
  ["Red Baron Aviation", "012"], ["Yellow Wings Air Services", "013"], ["Kenya School of Flying", "014"],
  ["AMREF Flying Doctors", "015"], ["Safarilink", "016"], ["Airvan", "017"],
  ["Scenic Air Safaris", "018"], ["Luca Safari", "019"], ["Tennoli", "020"],
  ["Fly ALS", "021"], ["Ramani Maps", "022"], ["Prime Aviation", "023"],
  ["Tropic Air", "024"], ["Pro Flight", "025"], ["Standards Aviation", "026"],
  ["Ninety Nines", "027"], ["Nairobi Flight Training", "028"], ["Young Aviators Club of Africa", "029"],
  ["Helint", "030"], ["Skypath Aviation College", "031"], ["Balloon Safaris", "032"],
] as const;

const featuredClientNames = new Set([
  "Renegade Air",
  "Kenya Airports Authority",
  "Sunshine Schools",
  "Kenya School of Flying",
  "AMREF Flying Doctors",
  "Safarilink",
  "Fly ALS",
  "Ninety Nines",
]);

export const featuredClientLogos = clientLogos.filter(([name]) => featuredClientNames.has(name));

export const processSteps = [
  ["01", "Share the brief", "Tell us the product, size, quantity, finish and required date.", "Received"],
  ["02", "Confirm the route", "We recommend the production method and prepare the quotation.", "Confirmed"],
  ["03", "Approve artwork", "You review the artwork or digital proof before production starts.", "Approved"],
  ["04", "Print and finish", "We produce, quality-check and prepare the job for collection or agreed delivery.", "Ready"],
] as const;

export const faqs = [
  {
    question: "What should I send for a quotation?",
    answer: "Send the product, size, quantity, preferred finish, required date and any artwork or reference image you already have.",
  },
  {
    question: "Can Bureau Graphics help with the design?",
    answer: "Yes. Graphic design and artwork preparation are part of our branding and design service.",
  },
  {
    question: "Will I approve the artwork before printing?",
    answer: "Yes. The agreed artwork or digital proof is reviewed before production begins.",
  },
  {
    question: "Is there a minimum quantity?",
    answer: "Minimum quantities depend on the product and production method. Share the quantity you need and we will advise the practical route.",
  },
  {
    question: "Can I collect from the studio?",
    answer: "Yes. Collection is available from Wilson Airport, Exit Lane, KAA Building No. 49. Ask about delivery when requesting the quotation.",
  },
] as const;

export const workPreviews = [
  {
    title: "UV-branded products",
    service: "UV Printing",
    description: "Acrylic, ABS, diaries, tumblers and transferable UV graphics.",
    image: "/visuals/uv-products.webp",
    href: "/services/uv-printing",
  },
  {
    title: "Large-format displays",
    service: "Large Format",
    description: "Roll-up banners, window graphics, mounted signs and display print.",
    image: "/visuals/large-format.webp",
    href: "/services/large-format-printing",
  },
  {
    title: "Finished documents",
    service: "Print Finishing",
    description: "Velo, wire and spiral binding with lamination and document assembly.",
    image: "/visuals/finishing.webp",
    href: "/services/finishing",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
