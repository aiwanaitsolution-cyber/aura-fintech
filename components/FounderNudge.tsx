"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export function FounderNudge() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside className="founder-nudge" aria-label="Founder note">
      <Link href="/founder" className="founder-nudge-link">
        <span className="founder-nudge-photo">
          <Image src="/assets/ankita-garg.png" alt="CA Ankita Garg" width={96} height={96} />
        </span>
        <span>
          <strong>CA Ankita Garg</strong>
          <em>Simplifying complex finance decisions with structure and discipline.</em>
        </span>
      </Link>
      <button type="button" onClick={() => setVisible(false)} aria-label="Close founder note">
        <X size={14} />
      </button>
    </aside>
  );
}
