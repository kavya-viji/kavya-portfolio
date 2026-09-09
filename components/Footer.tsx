import { Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-surface-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#home" className="font-mono text-base font-semibold">
          <span className="gradient-text">Kavya</span>
          <span className="text-foreground">.dev</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent-via/60 hover:text-foreground"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent-via/60 hover:text-foreground"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-accent-via/60 hover:text-foreground"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
