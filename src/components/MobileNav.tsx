"use client";

import { SiteNav } from "@/components/SiteNav";
import { useI18n } from "@/i18n/context";

export function MobileNav() {
  const { m } = useI18n();

  return (
    <nav
      className="no-print fixed bottom-4 left-4 right-4 z-50 flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white/95 px-2 py-2 backdrop-blur-xl dark:border-white/[0.08] dark:bg-zinc-950/90 md:hidden"
      aria-label="Navegação mobile portfólio"
    >
      <div className="flex flex-1 justify-around overflow-x-auto">
        {m.portfolio.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-lg px-2 py-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-500"
          >
            {item.label}
          </a>
        ))}
      </div>
      <SiteNav variant="portfolio" className="shrink-0 text-[10px]" />
    </nav>
  );
}
