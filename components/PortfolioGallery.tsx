"use client";

import Image from "next/image";
import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioFilters, portfolioItems, type PortfolioItem } from "@/data/portfolio";

export default function PortfolioGallery() {
  const [active, setActive] = useState<(typeof portfolioFilters)[number]["value"]>("all");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const visible = active === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const categoryLabel = (item: PortfolioItem) =>
    portfolioFilters.find((filter) => filter.value === item.category)?.label ?? item.category;

  return (
    <>
      <div className="portfolio-filters" aria-label="Filter portfolio projects">
        {portfolioFilters.map((filter) => (
          <button key={filter.value} type="button" aria-pressed={active === filter.value} onClick={() => setActive(filter.value)}>
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid" aria-live="polite">
        {visible.map((item) => (
          <button
            key={`${active}-${item.id}`}
            type="button"
            className={`portfolio-card ${item.shape ? `is-${item.shape}` : ""}`}
            onClick={() => setSelected(item)}
            aria-label={`View ${item.title}`}
            data-reveal
          >
            <Image src={item.image} alt={item.alt} fill quality={90} sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            <span className="portfolio-card-overlay">
              <small>{categoryLabel(item)}</small>
              <strong>{item.title}</strong>
              <Expand size={18} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={(event) => { if (event.currentTarget === event.target) setSelected(null); }}>
          <div className="portfolio-lightbox-panel">
            <button type="button" className="portfolio-lightbox-close" onClick={() => setSelected(null)} aria-label="Close image">
              <X size={22} />
            </button>
            <div className="portfolio-lightbox-image">
              <Image src={selected.image} alt={selected.alt} fill quality={90} sizes="92vw" />
            </div>
            <div className="portfolio-lightbox-caption"><small>{categoryLabel(selected)}</small><strong>{selected.title}</strong></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
