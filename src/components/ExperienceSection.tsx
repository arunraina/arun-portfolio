"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/experience";
import { industryMap } from "@/data/industries";
import { IndustryId, Achievement } from "@/data/types";

function AchievementRow({
  achievement,
  match,
}: {
  achievement: Achievement;
  match: boolean;
}) {
  return (
    <li
      className="relative pl-4 py-2.5"
      style={{
        borderLeft: match ? "2px solid var(--accent)" : "2px solid var(--border)",
      }}
    >
      <p className="text-sm text-[var(--foreground)] leading-relaxed">
        {achievement.text}
      </p>
      <div className="mt-1.5 flex flex-wrap items-center gap-2">
        {achievement.metric && (
          <span
            className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid var(--accent-border)",
            }}
          >
            {achievement.metric}
          </span>
        )}
        {achievement.caseStudySlug && (
          <Link
            href={`/work/${achievement.caseStudySlug}`}
            className="text-[11px] font-semibold inline-flex items-center gap-0.5 text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            Read full case study <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </li>
  );
}

export default function ExperienceSection({ lens }: { lens: IndustryId | null }) {
  return (
    <section id="experience" className="py-14 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2 block">
          Work experience
        </span>
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          {lens
            ? `Experience relevant to ${industryMap[lens].label}`
            : "Eleven years, three very different platforms"}
        </h2>
        <p className="text-[var(--text-secondary)] mt-2 text-sm max-w-2xl">
          {lens
            ? "Bullets tied to this lens are highlighted; everything else stays visible for context."
            : "From founding a construction marketplace, to scaling a creator platform to ~150M ARR, to shipping enterprise personalization for global retailers."}
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {companies.map((company) => (
          <div key={company.id}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                {company.initials}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {company.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)]">{company.period}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                  {company.descriptor}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:pl-[52px]">
              {company.roles.map((role) => {
                const sorted = lens
                  ? [...role.achievements].sort((a, b) => {
                      const am = a.tags.includes(lens) ? 0 : 1;
                      const bm = b.tags.includes(lens) ? 0 : 1;
                      return am - bm;
                    })
                  : role.achievements;

                return (
                  <div
                    key={role.title}
                    className="bg-white rounded-xl border border-[var(--border)] p-5 md:p-6"
                    style={{ background: "var(--card)" }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-[var(--foreground)]">
                        {role.title}
                      </h4>
                      <span className="text-xs text-[var(--text-muted)]">{role.period}</span>
                    </div>
                    <ul className="flex flex-col">
                      {sorted.map((a, i) => (
                        <AchievementRow
                          key={i}
                          achievement={a}
                          match={lens ? a.tags.includes(lens) : true}
                        />
                      ))}
                    </ul>
                    {role.keyInitiatives && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {role.keyInitiatives.map((k) => (
                          <span
                            key={k}
                            className="text-[11px] px-2 py-0.5 rounded-full font-medium text-[var(--text-muted)] border border-[var(--border)]"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
