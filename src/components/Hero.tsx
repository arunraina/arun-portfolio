"use client";

import { Mail, Link2, MapPin, Download, Briefcase } from "lucide-react";
import { profile, highlights } from "@/data/profile";
import { industryMap } from "@/data/industries";
import { IndustryId } from "@/data/types";

export default function Hero({ lens }: { lens: IndustryId | null }) {
  const activeIndustry = lens ? industryMap[lens] : null;

  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            {activeIndustry ? `Product leader · ${activeIndustry.label}` : "Senior Product Manager · Open to product leadership roles"}
          </div>

          <h1
            className={
              activeIndustry
                ? "text-xl md:text-2xl font-bold text-[var(--foreground)] leading-snug max-w-xl"
                : "text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.1] max-w-xl"
            }
          >
            {activeIndustry ? activeIndustry.tagline : "Building scalable products that drive growth, monetization and customer engagement"}
          </h1>

          <p className="mt-5 text-base text-[var(--text-secondary)] max-w-lg leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            >
              <Link2 className="w-3.5 h-3.5" /> {profile.linkedinLabel}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={activeIndustry?.resumeFile ?? "/Arunpal_Singh_Raina_Resume.pdf"}
              download
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              {activeIndustry?.resumeFile
                ? `Resume for ${activeIndustry.short}`
                : "Download resume"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] bg-[var(--card)] hover:bg-[var(--accent-soft)] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Start a conversation
            </a>
          </div>
          {activeIndustry?.resumeFile && (
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Showing the resume version tailored to {activeIndustry.label.toLowerCase()}. Switch
              the lens below for a different version, or clear it for the general resume.
            </p>
          )}
        </div>

        {/* Dashboard mock widget */}
        <div
          className="rounded-2xl border p-5 sm:p-6"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              PM Operating Dashboard
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
              Open to work
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="rounded-xl p-4"
                style={
                  i === 0
                    ? { background: "var(--accent)", color: "#fff" }
                    : { background: "var(--background)", border: "1px solid var(--border)" }
                }
              >
                <p
                  className="text-xl font-bold"
                  style={{ color: i === 0 ? "#fff" : "var(--foreground)" }}
                >
                  {h.metric}
                </p>
                <p
                  className="text-[11px] mt-1 uppercase tracking-wide font-medium"
                  style={{ color: i === 0 ? "rgba(255,255,255,0.85)" : "var(--text-muted)" }}
                >
                  {h.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-3 rounded-xl p-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold"
            style={{ background: "var(--navy)", color: "var(--navy-text)" }}
          >
            <span className="uppercase tracking-wide text-[11px]" style={{ color: "var(--navy-text-secondary)" }}>
              Product loop
            </span>
            <span className="w-full basis-full h-0" />
            <span>Discover</span>
            <span style={{ color: "var(--navy-text-secondary)" }}>→</span>
            <span>Ship</span>
            <span style={{ color: "var(--navy-text-secondary)" }}>→</span>
            <span>Measure</span>
            <span style={{ color: "var(--navy-text-secondary)" }}>→</span>
            <span>Scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
