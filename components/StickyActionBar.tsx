"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppUrl, siteFacts } from "@/lib/site-facts";

export default function StickyActionBar() {
  const [visible, setVisible] = useState(false);
  const [nearFinalCta, setNearFinalCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > Math.min(520, window.innerHeight * 0.72));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const elements = document.querySelectorAll("[data-final-cta]");
    const observer = new IntersectionObserver((entries) => setNearFinalCta(entries.some((entry) => entry.isIntersecting)), { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`sticky-action-bar ${visible && !nearFinalCta ? "is-visible" : ""}`} aria-label="Quick contact actions">
      <a href={`tel:${siteFacts.phoneE164}`}><Phone size={18} /><span>Call</span></a>
      <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>WhatsApp</span></a>
      <Link href="/contact#quote"><FileText size={18} /><span>Quote</span></Link>
    </nav>
  );
}
