"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { projects } from "@/data/projects";
import { industryMap } from "@/data/industries";
import { IndustryId } from "@/data/types";
import { iconMap, gradientMap, dotPattern } from "./projectVisuals";

const INITIAL_COUNT = 6;

export default function FlagshipGrid({ lens }: { lens: IndustryId | null }) {
  const [expanded, setExpanded] = useState(false);
  const all = lens ? projects.filter((p) => p.tags.includes(lens)) : projects;
  const visible = expanded ? all : all.slice(0, INITIAL_COUNT);
  const hiddenCount = all.length - visible.length;

  useEffect(() => {
    setExpanded(false);
  }, [lens]);

  if (lens && all.length === 0) return null;

  return (
    <section className="py-6">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2 block">
          Selected product work
        </span>
        <h2 className="text-2xl font-bold text-[var(--foreground)] max-w-xl">
          {lens
            ? `Projects that speak to ${industryMap[lens].label}`
            : "Project deep-dives that explain the problem, my role, and the outcome"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((p) => {
          const Icon = iconMap[p.icon];
          const card = (
            <div
              className="h-full flex flex-col bg-white rounded-xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-colors duration-150"
              style={{ background: "var(--card)" }}
            >
              <div
                className="relative h-28 p-5 pb-4 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage: `${dotPattern}, ${gradientMap[p.icon]}`,
                  backgroundSize: "16px 16px, cover",
                }}
              >
                <Icon
                  className="absolute -right-3 -bottom-3 w-24 h-24 text-white/10"
                  strokeWidth={1.2}
                />
                <div className="relative w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="relative text-[11px] font-semibold uppercase tracking-wide text-white/90">
                  {p.category}
                </p>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wide mb-1">
                  {p.company}
                </p>
                <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {p.description}
                </p>
                <ul className="flex flex-col gap-1 mt-auto pt-2">
                  {p.impact.map((line) => (
                    <li key={line} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>
                {p.slug && (
                  <span className="mt-4 text-[11px] font-semibold inline-flex items-center gap-0.5 text-[var(--accent)]">
                    Read full case study <ArrowUpRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          );
          return p.slug ? (
            <Link key={p.title} href={`/work/${p.slug}`}>
              {card}
            </Link>
          ) : (
            <div key={p.title}>{card}</div>
          );
        })}
      </div>
      {all.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-5 mx-auto flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          {expanded ? "Show fewer projects" : `View ${hiddenCount} more project${hiddenCount === 1 ? "" : "s"}`}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </section>
  );
}
