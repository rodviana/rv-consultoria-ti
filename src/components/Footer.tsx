"use client";

import { SiteNav } from "@/components/SiteNav";
import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { m } = useI18n();

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-white/[0.06]">
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-zinc-600 sm:flex-row dark:text-zinc-600">
        <p>
          © {new Date().getFullYear()} {CONTACT.name}. {m.portfolio.title}.
        </p>
        <div className="flex items-center gap-4">
          <SiteNav variant="portfolio" />
          <p className="font-mono">{m.portfolio.footer.line}</p>
        </div>
      </div>
    </footer>
  );
}
