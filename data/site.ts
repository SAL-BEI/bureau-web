export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  strapline: string;
  description: string;
  items: string[];
  bestFor: string[];
  accent: "violet" | "orange" | "blue" | "cyan" | "red";
};

export const services: Service[] = [
  {
    slug: "uv-printing",
    number: "01",
    title: "UV Printing",
    shortTitle: "UV",
    strapline: "Print straight onto products, boards and specialty surfaces.",
    description:
      "Vibrant direct printing for flat items, selected cylindrical products and transferable UV DTF graphics, with white ink and varnish options where the artwork and material call for them.",
    items: ["UV flatbed printing", "UV rotary printing", "UV DTF stickers", "Acrylic and ABS branding", "Diary and merchandise branding"],
    bestFor: ["Corporate gifts", "Product labels", "Office signs", "Short custom runs"],
    accent: "violet",
  },
  {
    slug: "large-format-printing",
    number: "02",
    title: "Large Format Printing",
    shortTitle: "Large format",
    strapline: "Big, clear and built to be noticed.",
    description:
      "Large graphics and technical output for indoor, outdoor and presentation use, produced with the material and finishing method that fits the job.",
    items: ["Banners", "Window graphics", "Print and cut", "Reflective stickers", "Architectural drawings", "Photo printing"],
    bestFor: ["Events", "Retail spaces", "Wayfinding", "Plans and drawings"],
    accent: "orange",
  },
  {
    slug: "digital-printing",
    number: "03",
    title: "Digital Printing",
    shortTitle: "Digital",
    strapline: "Sharp everyday print without the everyday look.",
    description:
      "Professional short-run printing for business communication, sales material and operational documents, from one urgent copy to repeat corporate orders.",
    items: ["Business cards", "Flyers and brochures", "Posters", "Manuals and booklets", "Receipt and NCR books"],
    bestFor: ["Business stationery", "Marketing material", "Training documents", "Short print runs"],
    accent: "blue",
  },
  {
    slug: "branding",
    number: "04",
    title: "Branding & Design",
    shortTitle: "Branding",
    strapline: "A consistent look from screen to finished product.",
    description:
      "Graphic design and branded merchandise that help organisations communicate clearly and show up consistently across print, display and promotional products.",
    items: ["Graphic design", "Corporate merchandise", "Artwork preparation", "Campaign print support", "Brand application"],
    bestFor: ["Brand launches", "Staff merchandise", "Customer gifts", "Campaign rollouts"],
    accent: "cyan",
  },
  {
    slug: "finishing",
    number: "05",
    title: "Print Finishing",
    shortTitle: "Finishing",
    strapline: "The final details that make print feel complete.",
    description:
      "Binding, lamination and document finishing that protects printed work and gives it a clean, professional presentation.",
    items: ["Velo binding", "Wire binding", "Spiral binding", "Lamination up to A0", "Document assembly"],
    bestFor: ["Manuals", "Reports", "Reference books", "Display material"],
    accent: "red",
  },
];

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

export const processSteps = [
  ["01", "Share the brief", "Tell us the product, size, quantity, finish and deadline."],
  ["02", "Confirm the route", "We recommend the production method and send a clear quotation."],
  ["03", "Approve artwork", "You review the artwork or digital proof before production starts."],
  ["04", "Print and finish", "We produce, quality-check and prepare the job for collection or delivery."],
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
