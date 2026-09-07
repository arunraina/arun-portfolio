"use client";

import { industries } from "@/data/industries";
import { IndustryId } from "@/data/types";

interface Props {
  active: IndustryId | null;
  onChange: (id: IndustryId | null) => void;
}

export default function LensSelector({ active, onChange }: Props) {
  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
        View my work through a lens
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange(null)}
          className={`text-sm px-3.5 py-1.5 rounded-full border font-medium transition-colors ${
            active === null
              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
              : "text-[var(--text-secondary)] border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
        >
          All experience
        </button>
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => onChange(ind.id === active ? null : ind.id)}
            className={`text-sm px-3.5 py-1.5 rounded-full border font-medium transition-colors ${
              active === ind.id
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "text-[var(--text-secondary)] border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            {ind.short}
          </button>
        ))}
      </div>
    </div>
  );
}
