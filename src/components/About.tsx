import { Award, Languages as LanguagesIcon, GraduationCap } from "lucide-react";
import { profile, education, certifications, languages, awards } from "@/data/profile";
import SkillsGrid from "./SkillsGrid";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2 block">
          About
        </span>
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Background</h2>
      </div>

      <div className="bg-white rounded-xl border border-[var(--border)] p-6 mb-4" style={{ background: "var(--card)" }}>
        <div className="flex flex-col gap-4 mb-6">
          {profile.longBio.map((p, i) => (
            <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
          The PM operating system
        </h3>
        <SkillsGrid />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl p-5" style={{ background: "var(--navy)", border: "1px solid var(--navy-border)" }}>
          <h4
            className="text-xs font-semibold uppercase tracking-wide mb-3 flex items-center gap-1.5"
            style={{ color: "var(--navy-text-secondary)" }}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Education
          </h4>
          <ul className="flex flex-col gap-3">
            {education.map((e) => (
              <li key={e.program}>
                <p className="text-sm font-semibold" style={{ color: "var(--navy-text)" }}>
                  {e.program}
                </p>
                <p className="text-xs" style={{ color: "var(--navy-text-secondary)" }}>
                  {e.institute} · {e.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-[var(--border)] p-5" style={{ background: "var(--card)" }}>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Certifications & awards
          </h4>
          <ul className="flex flex-col gap-1.5 text-xs text-[var(--text-secondary)]">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
            {awards.map((a) => (
              <li key={a} className="text-[var(--text-muted)]">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-[var(--border)] p-5" style={{ background: "var(--card)" }}>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
            <LanguagesIcon className="w-3.5 h-3.5" /> Languages
          </h4>
          <ul className="flex flex-col gap-1 text-xs text-[var(--text-secondary)]">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
