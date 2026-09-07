import { profile } from "@/data/profile";

export default function Nav() {
  return (
    <header className="flex items-center justify-between py-5">
      <a href="/" className="font-bold text-[var(--foreground)] text-sm tracking-tight">
        {profile.displayName}
      </a>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
        <a href="#experience" className="hover:text-[var(--accent)] transition-colors">
          Experience
        </a>
        <a href="#about" className="hover:text-[var(--accent)] transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
