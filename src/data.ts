export type Service = {
  icon: string;
  title: string;
  text: string;
  items: string[];
  color: "purple" | "orange" | "blue" | "cyan" | "red";
};

export const services: Service[] = [
  {
    icon: "UV",
    title: "UV Printing",
    text: "Durable, vibrant printing for flat products, cylindrical items and transferable graphics.",
    items: [
      "UV Flatbed Printing",
      "UV Rotary Printing",
      "UV DTF (Direct-to-Film) Printing",
    ],
    color: "purple",
  },
  {
    icon: "LF",
    title: "Large Format Printing",
    text: "High-impact graphics and technical prints produced in large sizes.",
    items: [
      "Banners",
      "Window Graphics",
      "Print and Cut",
      "Reflective Stickers",
      "Architectural Drawings",
      "Photo Printing",
    ],
    color: "orange",
  },
  {
    icon: "DP",
    title: "Digital Printing",
    text: "Professional short-run and everyday printing for businesses and individuals.",
    items: [
      "Business Cards",
      "Flyers and Brochures",
      "Posters",
      "Manuals and Booklets",
      "Receipt and NCR Booklets",
    ],
    color: "blue",
  },
  {
    icon: "BR",
    title: "Branding",
    text: "Consistent design and branded products that make your organisation recognisable.",
    items: ["Graphic Design", "Corporate Merchandise"],
    color: "cyan",
  },
  {
    icon: "FN",
    title: "Finishing",
    text: "Professional document protection and presentation, with emphasis on secure Velo Binding.",
    items: ["Binding: Velo, Wire & Spiral", "Lamination up to A0 Size"],
    color: "red",
  },
];

export const aviationItems = [
  "Aviation Merchandise",
  "Technical Logbooks",
  "Quick Reference Handbooks (QRH)",
  "Pilot & Cabin Crew Checklists",
  "Aircraft Flight Manuals (AFM)",
  "Pilot Operating Handbooks (POH)",
  "Crew Cards & Briefing Cards",
  "Journey, Engine & Propeller Logbooks",
  "LOPA & Emergency Equipment Books",
  "Aircraft Decals & Placards",
  "Aviation Map Printing & Lamination",
];

export const processSteps = [
  ["01", "Tell us what you need", "Share your specifications, quantity, size and deadline."],
  ["02", "Approve your quotation", "We confirm the best production method and provide a clear quote."],
  ["03", "Review the artwork", "Our designers prepare or check your file before production."],
  ["04", "We print & finish", "Your job is produced, quality-checked and prepared for collection."],
];

export const clientLogos = [
  ["Renegade Air", "000"],
  ["Think Aviation Training", "001"],
  ["Penial Air", "002"],
  ["Kenya Airports Authority", "003"],
  ["Aberdair Aviation", "004"],
  ["Twinstar Aviation", "005"],
  ["REREC", "006"],
  ["Sunshine Schools", "007"],
  ["Crawford International School", "008"],
  ["Capital Connect Aviation", "009"],
  ["Aero Instrument Service", "010"],
  ["Weston Hotel", "011"],
  ["Red Baron Aviation", "012"],
  ["Yellow Wings Air Services", "013"],
  ["Kenya School of Flying", "014"],
  ["AMREF Flying Doctors", "015"],
  ["Safarilink", "016"],
  ["Airvan", "017"],
  ["Scenic Air Safaris", "018"],
  ["Luca Safari", "019"],
  ["Tennoli", "020"],
  ["Fly ALS", "021"],
  ["Ramani Maps", "022"],
  ["Prime Aviation", "023"],
  ["Tropic Air", "024"],
  ["Pro Flight", "025"],
  ["Standards Aviation", "026"],
  ["Ninety Nines", "027"],
  ["Nairobi Flight Training", "028"],
  ["Young Aviators Club of Africa", "029"],
  ["Helint", "030"],
  ["Skypath Aviation College", "031"],
  ["Balloon Safaris", "032"],
] as const;
