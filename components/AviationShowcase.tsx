"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { aviationHighlights } from "@/data/site";

export default function AviationShowcase() {
  const [activeId, setActiveId] = useState<(typeof aviationHighlights)[number]["id"]>(aviationHighlights[0].id);
  const active = aviationHighlights.find((item) => item.id === activeId) ?? aviationHighlights[0];

  return (
    <div className="aviation-showcase">
      <div className="aviation-showcase-media">
        <Image
          src="/visuals/aviation-publications.webp"
          fill
          sizes="(max-width: 900px) 100vw, 52vw"
          alt="Illustrative aviation manuals, logbook, checklist, lanyard and tumbler"
        />
        <span>Illustrative capability preview</span>
      </div>
      <div className="aviation-showcase-panel">
        <p className="context-label on-dark">Aviation specialism</p>
        <h2>Documents built around cockpit clarity.</h2>
        <div className="aviation-tabs" role="tablist" aria-label="Aviation print examples">
          {aviationHighlights.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active.id}
              aria-controls="aviation-tab-panel"
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div id="aviation-tab-panel" className="aviation-tab-panel" role="tabpanel">
          <h3>{active.title}</h3>
          <p>{active.detail}</p>
        </div>
        <Link href="/aviation-printing" className="light-link">Explore aviation printing <ArrowRight size={16} /></Link>
      </div>
    </div>
  );
}
