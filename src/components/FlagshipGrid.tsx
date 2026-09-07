"use client";

import Link from "next/link";
import {
  Phone,
  LineChart,
  Wallet,
  Building2,
  Video,
  Trophy,
  Users,
  Ticket,
  ShoppingCart,
  Layers,
  Camera,
  Megaphone,
  Route,
  Receipt,
  FlaskConical,
  Brain,
  Truck,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import { industryMap } from "@/data/industries";
import { IndustryId } from "@/data/types";

const iconMap: Record<Project["icon"], typeof Phone> = {
  call: Phone,
  chart: LineChart,
  wallet: Wallet,
  building: Building2,
  video: Video,
  trophy: Trophy,
  users: Users,
  ticket: Ticket,
  cart: ShoppingCart,
  layers: Layers,
  camera: Camera,
  megaphone: Megaphone,
  route: Route,
  receipt: Receipt,
  flask: FlaskConical,
  brain: Brain,
  truck: Truck,
};

const gradientMap: Record<Project["icon"], string> = {
  call: "linear-gradient(135deg, #eef2ff, #dbeafe)",
  chart: "linear-gradient(135deg, #ecfeff, #e0f2fe)",
  wallet: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
  building: "linear-gradient(135deg, #fef3c7, #fde68a)",
  video: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
  trophy: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
  users: "linear-gradient(135deg, #fff7ed, #ffedd5)",
  ticket: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
  cart: "linear-gradient(135deg, #fefce8, #fef9c3)",
  layers: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
  camera: "linear-gradient(135deg, #fdf4ff, #fae8ff)",
  megaphone: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
  route: "linear-gradient(135deg, #f7fee7, #ecfccb)",
  receipt: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
  flask: "linear-gradient(135deg, #eff6ff, #dbeafe)",
  brain: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
  truck: "linear-gradient(135deg, #fff7ed, #fed7aa)",
};

export default function FlagshipGrid({ lens }: { lens: IndustryId | null }) {
  const visible = lens ? projects.filter((p) => p.tags.includes(lens)) : projects;

  if (lens && visible.length === 0) return null;

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
                className="p-5 pb-4"
                style={{ background: gradientMap[p.icon] }}
              >
                <div className="w-9 h-9 rounded-lg bg-white/70 flex items-center justify-center mb-3">
                  <Icon className="w-4.5 h-4.5 text-[var(--foreground)]" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground)]/70">
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
    </section>
  );
}
