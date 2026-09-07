import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { caseStudyMap, caseStudies } from "@/data/caseStudies";
import { industryMap } from "@/data/industries";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudyMap[slug];
  if (!cs) return notFound();

  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {profile.displayName}&apos;s portfolio
        </Link>

        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
          {cs.company} · Case study
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-tight">
          {cs.title}
        </h1>
        <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {cs.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                border: "1px solid var(--accent-border)",
              }}
            >
              {industryMap[t].short}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-4"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="text-lg font-bold text-[var(--foreground)]">{m.value}</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wide">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-6 mt-10"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--accent)] mb-3">
            {cs.context.heading}
          </h2>
          {cs.context.body.map((p, i) => (
            <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2 last:mb-0">
              {p}
            </p>
          ))}
        </div>

        <div
          className="rounded-xl p-6 mt-4"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--accent)] mb-3">
            {cs.product.heading}
          </h2>
          {cs.product.body.map((p, i) => (
            <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2 last:mb-0">
              {p}
            </p>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">
          Notable product decisions
        </h2>
        <div className="flex flex-col gap-4">
          {cs.decisions.map((d, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">{d.heading}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{d.body}</p>
              {d.insight && (
                <p
                  className="mt-3 text-xs font-semibold px-3 py-2 rounded-lg inline-flex items-center gap-1.5"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Lightbulb className="w-3.5 h-3.5 shrink-0" /> {d.insight}
                </p>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">
          Insights from customer conversations
        </h2>
        <div className="flex flex-col gap-4">
          {cs.customerInsights.map((ci, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{ background: "var(--navy)", border: "1px solid var(--navy-border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--navy-text-secondary)" }}>
                Finding
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--navy-text)" }}>
                {ci.finding}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent-hover)" }}>
                Response
              </p>
              <p className="text-sm" style={{ color: "var(--navy-text-secondary)" }}>
                {ci.response}
              </p>
            </div>
          ))}
        </div>

        {cs.artifacts.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">
              Design artifacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.artifacts.map((a) => (
                <div
                  key={a.label}
                  className="rounded-xl p-5"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{a.label}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to full portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
