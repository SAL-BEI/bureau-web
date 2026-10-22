"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Mail, MessageCircle, Paperclip } from "lucide-react";
import { products, services } from "@/data/site";
import { buildEmailUrl, buildWhatsAppUrl, type QuoteDetails } from "@/lib/site-facts";

const initialDetails: QuoteDetails = {
  topic: "",
  product: "",
  quantity: "",
  size: "",
  deadline: "",
  artwork: "I will send it after this message",
  name: "",
  phone: "",
};

export default function QuoteBuilder() {
  const [details, setDetails] = useState<QuoteDetails>(initialDetails);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      const saved = window.sessionStorage.getItem("bureau-quote");
      const params = new URLSearchParams(window.location.search);
      let next = initialDetails;
      if (saved) {
        try { next = { ...initialDetails, ...JSON.parse(saved) as QuoteDetails }; } catch { window.sessionStorage.removeItem("bureau-quote"); }
      }
      const topic = params.get("service");
      const product = params.get("product");
      if (topic) next = { ...next, topic };
      if (product) next = { ...next, product };
      setDetails(next);
      setReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (ready) window.sessionStorage.setItem("bureau-quote", JSON.stringify(details));
  }, [details, ready]);

  const quoteIsUseful = Boolean(details.product && details.quantity && details.name);
  const whatsapp = useMemo(() => buildWhatsAppUrl(details), [details]);
  const email = useMemo(() => buildEmailUrl(details), [details]);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDetails((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <form className="quote-builder" onSubmit={submit}>
      <div className="quote-builder-heading">
        <p className="context-label">Quote builder</p>
        <h2>Give us the useful details.</h2>
        <p>No account is required. Your answers stay in this browser until you choose WhatsApp or email.</p>
      </div>

      <div className="quote-fields">
        <label>
          <span>Service</span>
          <select name="topic" value={details.topic} onChange={update}>
            <option value="">Not sure yet</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            <option value="Aviation printing">Aviation printing</option>
          </select>
        </label>
        <label>
          <span>What are we making? *</span>
          <input name="product" value={details.product} onChange={update} list="product-options" placeholder="e.g. branded notebooks" required />
          <datalist id="product-options">{products.map((product) => <option value={product.name} key={product.slug} />)}</datalist>
        </label>
        <label>
          <span>Quantity *</span>
          <input name="quantity" value={details.quantity} onChange={update} inputMode="numeric" placeholder="e.g. 100" required />
        </label>
        <label>
          <span>Size or dimensions</span>
          <input name="size" value={details.size} onChange={update} placeholder="e.g. A5 or 2 × 1 m" />
        </label>
        <label>
          <span>Required date</span>
          <input name="deadline" value={details.deadline} onChange={update} type="date" />
        </label>
        <label>
          <span>Artwork</span>
          <select name="artwork" value={details.artwork} onChange={update}>
            <option>I will send it after this message</option>
            <option>I have print-ready artwork</option>
            <option>I need design help</option>
            <option>I only have a reference image</option>
          </select>
        </label>
        <label>
          <span>Your name *</span>
          <input name="name" value={details.name} onChange={update} autoComplete="name" placeholder="Name or company" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" value={details.phone} onChange={update} type="tel" autoComplete="tel" placeholder="Your preferred contact number" />
        </label>
      </div>

      <div className="quote-send">
        <p><Paperclip size={16} /> After the message opens, attach your PDF, AI, PNG or reference photo directly in WhatsApp or email.</p>
        <div>
          <a className={`button button-whatsapp button-lg ${!quoteIsUseful ? "is-muted" : ""}`} href={whatsapp} target="_blank" rel="noreferrer" data-event="quote_whatsapp">
            <MessageCircle size={18} /> Send via WhatsApp
          </a>
          <a className="button button-secondary button-lg" href={email} data-event="quote_email"><Mail size={18} /> Send via email</a>
        </div>
      </div>
    </form>
  );
}
