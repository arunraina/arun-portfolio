import { education } from "@/data/profile";

const badges: Record<string, string> = {
  "Indian Institute of Management Calcutta": "IIM-C",
  "Stanford Graduate School of Business": "GSB",
  "Chandigarh Group of Colleges, Landran": "CGC",
};

export default function Pedigree() {
  const featured = education.filter((e) => badges[e.institute]);
  const rest = education.filter((e) => !badges[e.institute]);

  return (
    <section className="py-8 md:py-10">
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{ background: "var(--gold-soft)", border: "1px solid var(--gold-border)" }}
      >
        <span
          className="text-xs font-semibold uppercase tracking-widest mb-2 block"
          style={{ color: "var(--gold)" }}
        >
          Education
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-6">
          IIM Calcutta · Stanford Graduate School of Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featured.map((e) => (
            <div
              key={e.program}
              className="rounded-xl p-5 flex items-start gap-4"
              style={{ background: "var(--card)", border: "1px solid var(--gold-border)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                style={{ background: "var(--gold)", color: "#fff" }}
              >
                {badges[e.institute]}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[var(--foreground)] leading-snug">
                  {e.institute}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">{e.program}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{e.year}</p>
              </div>
            </div>
          ))}
        </div>

        {rest.length > 0 && (
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            Also: {rest.map((e) => `${e.program}, ${e.institute} (${e.year})`).join(" · ")}
          </p>
        )}
      </div>
    </section>
  );
}
