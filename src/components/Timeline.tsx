import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="py-14 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2 block">
          Roadmap journey
        </span>
        <h2 className="text-2xl font-bold text-[var(--foreground)] max-w-xl">
          A year-by-year view from founder to enterprise product leader
        </h2>
        <p className="text-[var(--text-secondary)] mt-2 text-sm max-w-2xl">
          Each chapter brought more ownership — from a 0→1 marketplace, through scaling a
          150M-ARR consumer platform, to enterprise B2B SaaS for global retailers.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {timeline.map((t, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 bg-white rounded-xl border border-[var(--border)] p-4 sm:p-5"
            style={{ background: "var(--card)" }}
          >
            <div
              className="shrink-0 w-16 h-11 sm:w-20 sm:h-14 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base"
              style={
                i === timeline.length - 1
                  ? { background: "var(--accent)", color: "#fff" }
                  : {
                      background: "var(--background)",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                    }
              }
            >
              {t.year}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {t.title} <span className="text-[var(--text-muted)] font-normal">· {t.company}</span>
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
