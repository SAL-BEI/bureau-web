import { Plus } from "lucide-react";
import { faqs } from "@/data/site";

export default function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary><span>{faq.question}</span><Plus size={18} /></summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
