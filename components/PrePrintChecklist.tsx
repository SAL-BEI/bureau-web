"use client";

import { useState } from "react";
import { Check, FileCheck2 } from "lucide-react";

const checks = [
  ["Content", "Names, numbers, dates and wording are correct."],
  ["Layout", "Size, spacing and image placement look right."],
  ["Production", "Quantity, material and finish are confirmed."],
] as const;

export default function PrePrintChecklist() {
  const [approved, setApproved] = useState<string[]>([]);
  const toggle = (title: string) => setApproved((items) => items.includes(title) ? items.filter((item) => item !== title) : [...items, title]);
  const complete = approved.length === checks.length;

  return (
    <div className={`preprint-checklist ${complete ? "is-approved" : ""}`}>
      <div className="preprint-heading">
        <FileCheck2 size={25} />
        <div><p className="context-label">Before production</p><h2>Three checks. Then we print.</h2></div>
      </div>
      <div className="preprint-steps">
        {checks.map(([title, text], index) => {
          const checked = approved.includes(title);
          return (
            <button type="button" key={title} onClick={() => toggle(title)} aria-pressed={checked}>
              <span>{checked ? <Check size={17} /> : index + 1}</span>
              <strong>{title}</strong>
              <small>{text}</small>
            </button>
          );
        })}
      </div>
      <p className="approval-stamp" aria-live="polite">{complete ? "Ready for production" : `${approved.length} of ${checks.length} checks confirmed`}</p>
    </div>
  );
}
