"use client";

import { SiteNav } from "@/components/SiteNav";
import { useI18n } from "@/i18n/context";

export function MobileNav() {
  const { m } = useI18n();

  return (
    <nav
      className="mobile-dock no-print fixed left-3 right-3 z-50 flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white/95 px-2 py-2 shadow-lg backdrop-blur-xl sm:left-4 sm:right-4 dark:border-white/[0.08] dark:bg-zinc-950/90 md:hidden"
      aria-label="Navegação mobile portfólio"
    >
      <div className="scrollbar-none flex min-w-0 flex-1 snap-x snap-mandatory gap-0.5 overflow-x-auto">
        {m.portfolio.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 snap-start rounded-lg px-2.5 py-2 text-[11px] font-medium text-zinc-600 active:bg-zinc-100 dark:text-zinc-400 dark:active:bg-white/5"
          >
            {item.label}
          </a>
        ))}
      </div>
      <SiteNav variant="portfolio" className="shrink-0 px-2 py-1 text-[10px]" />
    </nav>
  );
}
