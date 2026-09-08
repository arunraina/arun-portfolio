import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { caseStudyMap, caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import { industryMap } from "@/data/industries";
import { profile } from "@/data/profile";
import { iconMap, gradientMap, dotPattern } from "@/components/projectVisuals";

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

  const project = projects.find((p) => p.slug === slug);
  const icon = project?.icon ?? "layers";
  const Icon = iconMap[icon];

  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {profile.displayName}&apos;s portfolio
        </Link>
      </div>

      <div
        className="relative h-48 md:h-56 mt-6 mb-10 overflow-hidden flex items-end"
        style={{
          backgroundImage: `${dotPattern}, ${gradientMap[icon]}`,
          backgroundSize: "20px 20px, cover",
        }}
      >
        <Icon className="absolute -right-6 -bottom-6 w-48 h-48 text-white/10" strokeWidth={1} />
        <div className="max-w-3xl mx-auto px-4 pb-6 w-full relative">
          <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
            {cs.company} · Case study
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16">
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

        {cs.platform && cs.platform.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">Platform</h2>
            <div className="flex flex-wrap gap-2">
              {cs.platform.map((p) => (
                <span
                  key={p}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </>
        )}

        {cs.flow && cs.flow.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">How it works</h2>
            <div
              className="rounded-xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              {cs.flow.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                      style={{ background: "var(--accent)" }}
                    >
                      {i + 1}
                    </div>
                    {i < cs.flow!.length - 1 && (
                      <div className="w-px flex-1 mt-1" style={{ background: "var(--border)" }} />
                    )}
                  </div>
                  <div className={i < cs.flow!.length - 1 ? "pb-5" : ""}>
                    <p className="text-sm font-bold text-[var(--foreground)] leading-snug">
                      {f.step.replace(/^\d+\.\s*/, "")}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {cs.guardrails && cs.guardrails.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">Guardrails</h2>
            <div
              className="rounded-xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <ul className="flex flex-col gap-3">
                {cs.guardrails.map((g, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ShieldCheck
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

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

        {cs.successMetrics && cs.successMetrics.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">
              How success is measured
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.successMetrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-sm font-bold text-[var(--foreground)] mb-1.5">{m.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {cs.customerInsights && cs.customerInsights.length > 0 && (
          <>
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
          </>
        )}

        {cs.artifacts && cs.artifacts.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[var(--foreground)] mt-12 mb-5">
              Design artifacts
            </h2>
            <Link
              href={`/work/${cs.slug}/designs`}
              className="block rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-150"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="text-sm font-semibold text-[var(--accent)] inline-flex items-center gap-1">
                View design gallery <ImageIcon className="w-4 h-4" />
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {cs.artifacts.map((a) => (
                  <li key={a.label} className="text-sm text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--foreground)]">{a.label}</span>
                    {" — "}
                    {a.description}
                  </li>
                ))}
              </ul>
            </Link>
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
