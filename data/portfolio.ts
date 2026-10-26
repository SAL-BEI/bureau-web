export const portfolioFilters = [
  { value: "all", label: "All work" },
  { value: "branding", label: "Branding & UV" },
  { value: "aviation", label: "Aviation" },
  { value: "display", label: "Displays & signage" },
  { value: "print", label: "Print & finishing" },
] as const;

export type PortfolioCategory = Exclude<(typeof portfolioFilters)[number]["value"], "all">;
export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  shape?: "wide" | "tall";
};

export const portfolioItems: PortfolioItem[] = [
  { id: "brand-kit", title: "Corporate brand collection", category: "branding", image: "/portfolio/bureau-brand-kit.jpg", alt: "Bureau Graphics branded merchandise, flags and display materials", shape: "wide" },
  { id: "aircraft-livery", title: "Aircraft livery", category: "aviation", image: "/portfolio/aircraft-livery.jpg", alt: "Branded Renegade Air aircraft", shape: "wide" },
  { id: "exhibition", title: "Exhibition stand graphics", category: "display", image: "/portfolio/exhibition-stand.jpg", alt: "Completed exhibition stand with printed wall graphics", shape: "tall" },
  { id: "handbooks", title: "Quick reference handbooks", category: "aviation", image: "/portfolio/aviation-handbooks.jpg", alt: "Two spiral-bound aviation quick reference handbooks", shape: "wide" },
  { id: "pens", title: "Branded pens", category: "branding", image: "/portfolio/branded-pens.jpg", alt: "A selection of branded corporate pens" },
  { id: "bottles", title: "Branded bottles", category: "branding", image: "/portfolio/branded-bottles.jpg", alt: "Three branded metal bottles" },
  { id: "notebooks", title: "Corporate notebooks", category: "branding", image: "/portfolio/branded-notebooks.jpg", alt: "Blue corporate notebooks with foil branding" },
  { id: "mugs", title: "Branded mugs", category: "branding", image: "/portfolio/branded-mugs.jpg", alt: "A group of dark branded mugs" },
  { id: "placards", title: "Aircraft placards", category: "aviation", image: "/portfolio/aircraft-placards.jpg", alt: "Aircraft identification placards", shape: "wide" },
  { id: "tail-install", title: "Aircraft tail installation", category: "aviation", image: "/portfolio/aircraft-tail-installation.jpg", alt: "Aircraft tail graphics being installed" },
  { id: "airline-decals", title: "Airline decals", category: "aviation", image: "/portfolio/airline-decals.jpg", alt: "A sheet of printed airline decals" },
  { id: "technical-logbook", title: "Technical logbook", category: "aviation", image: "/portfolio/technical-logbook.jpg", alt: "Blue bound aircraft technical logbook", shape: "tall" },
  { id: "cockpit-layout", title: "Cockpit layout print", category: "aviation", image: "/portfolio/cockpit-layout-print.jpg", alt: "Printed cockpit layout and panel diagram", shape: "wide" },
  { id: "office-sign", title: "Office identification signs", category: "display", image: "/portfolio/office-signage.jpg", alt: "Quality and safety office identification signage", shape: "wide" },
  { id: "roadside-sign", title: "Roadside service sign", category: "display", image: "/portfolio/roadside-service-sign.jpg", alt: "Bureau Graphics roadside service directory sign", shape: "tall" },
  { id: "rollup", title: "Corporate roll-up banner", category: "display", image: "/portfolio/corporate-rollup-banner.jpg", alt: "Corporate roll-up banner in an office", shape: "tall" },
  { id: "retail-sign", title: "Retail signage", category: "display", image: "/portfolio/retail-signage.jpg", alt: "Finished outdoor retail sign", shape: "wide" },
  { id: "vehicle", title: "Vehicle branding", category: "display", image: "/portfolio/vehicle-branding.jpg", alt: "Branded ambulance vehicle", shape: "wide" },
  { id: "photo-print", title: "Personalised photo printing", category: "print", image: "/portfolio/photo-printing.jpg", alt: "Personalised printed photo gifts", shape: "wide" },
  { id: "invitation", title: "Invitation printing", category: "print", image: "/portfolio/invitation-printing.jpg", alt: "Printed invitation and presentation folder" },
  { id: "binding", title: "Document binding", category: "print", image: "/portfolio/binding-equipment.jpg", alt: "Professional document binding machine" },
  { id: "lamination", title: "Large-format lamination", category: "print", image: "/portfolio/lamination-equipment.jpg", alt: "Large-format roll laminating equipment" },
  { id: "nameplate", title: "Acrylic nameplate", category: "branding", image: "/portfolio/acrylic-nameplate.jpg", alt: "Printed acrylic office nameplate", shape: "wide" },
  { id: "coaster", title: "Branded coaster", category: "branding", image: "/portfolio/branded-coaster.jpg", alt: "Square branded corporate coaster" },
  { id: "tote", title: "Branded tote bag", category: "branding", image: "/portfolio/branded-tote-bag.jpg", alt: "Blue branded tote bag" },
  { id: "tumbler", title: "Branded tumbler", category: "branding", image: "/portfolio/branded-tumbler.jpg", alt: "Dark branded travel tumbler", shape: "tall" },
  { id: "lanyards", title: "Pilot and crew lanyards", category: "aviation", image: "/portfolio/aviation-lanyards.jpg", alt: "Pilot and crew role lanyards", shape: "wide" },
];
