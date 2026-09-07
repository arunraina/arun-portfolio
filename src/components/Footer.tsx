import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
