"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div className="faq-item" key={item.q}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{item.q}</span>
            <ChevronDown size={18} />
          </button>
          {open === index && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
