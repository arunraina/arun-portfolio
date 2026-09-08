import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ImageOff } from "lucide-react";
import { caseStudyMap, caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { iconMap, gradientMap, dotPattern } from "@/components/projectVisuals";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function DesignGalleryPage({
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
  const artifacts = cs.artifacts ?? [];

  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href={`/work/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {cs.title}
        </Link>
      </div>

      <div
        className="relative h-36 md:h-40 mt-6 mb-10 overflow-hidden flex items-end"
        style={{
          backgroundImage: `${dotPattern}, ${gradientMap[icon]}`,
          backgroundSize: "20px 20px, cover",
        }}
      >
        <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10" strokeWidth={1} />
        <div className="max-w-4xl mx-auto px-4 pb-5 w-full relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-1">
            {cs.company} · Design gallery
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{cs.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {artifacts.length === 0 ? (
          <div className="text-center py-16">
            <ImageOff className="w-10 h-10 mx-auto mb-3 text-[var(--text-muted)]" />
            <p className="font-medium text-[var(--text-secondary)]">No design artifacts yet</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Screenshots for this project haven&apos;t been added.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {artifacts.map((a) => (
              <div key={a.label}>
                <h2 className="text-lg font-bold text-[var(--foreground)]">{a.label}</h2>
                <p className="text-sm text-[var(--text-secondary)] mt-1 mb-5 max-w-2xl">
                  {a.description}
                </p>
                {a.images && a.images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {a.images.map((src) => (
                      <div
                        key={src}
                        className="rounded-xl overflow-hidden border"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <Image
                          src={src}
                          alt={a.label}
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="rounded-xl p-10 text-center"
                    style={{ background: "var(--card)", border: "1px dashed var(--border)" }}
                  >
                    <ImageOff className="w-7 h-7 mx-auto mb-2 text-[var(--text-muted)]" />
                    <p className="text-sm text-[var(--text-muted)]">
                      Screenshots for &quot;{a.label}&quot; coming soon.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {profile.displayName}&apos;s portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
