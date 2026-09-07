"use client";

import { Mail, Link2, AtSign, Calendar, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { industryMap } from "@/data/industries";
import { IndustryId } from "@/data/types";

export default function Contact({ lens }: { lens: IndustryId | null }) {
  const resumeFile = (lens && industryMap[lens].resumeFile) || "/Arunpal_Singh_Raina_Resume.pdf";
  return (
    <section id="contact" className="py-14 md:py-16">
      <div
        className="rounded-2xl p-8 md:p-12 text-center"
        style={{ background: "var(--navy)", border: "1px solid var(--navy-border)" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: "var(--accent-hover)" }}>
          Get in touch
        </span>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--navy-text)" }}>
          Let&apos;s talk about your product
        </h3>
        <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: "var(--navy-text-secondary)" }}>
          Open to product leadership roles across B2B SaaS, marketplaces, retail media, payments
          and consumer platforms — and happy to talk shop even if you&apos;re not hiring.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4" /> Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors border"
            style={{ borderColor: "var(--navy-border)", color: "var(--navy-text)" }}
          >
            <Link2 className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={profile.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors border"
            style={{ borderColor: "var(--navy-border)", color: "var(--navy-text)" }}
          >
            <Calendar className="w-4 h-4" /> Book a call
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-sm px-2 py-2.5 transition-colors"
            style={{ color: "var(--navy-text-secondary)" }}
          >
            <AtSign className="w-4 h-4" /> Twitter
          </a>
          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-2 font-medium text-sm px-2 py-2.5 transition-colors"
            style={{ color: "var(--navy-text-secondary)" }}
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
