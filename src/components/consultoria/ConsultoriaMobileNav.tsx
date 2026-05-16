"use client";

import { SiteNav } from "@/components/SiteNav";
import { useI18n } from "@/i18n/context";

export function ConsultoriaMobileNav() {
  const { m } = useI18n();

  return (
    <nav
      className="no-print fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between gap-1 rounded-2xl border border-zinc-200 bg-white/95 px-2 py-2 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95 lg:hidden"
      aria-label="Navegação mobile consultoria"
    >
      <div className="flex flex-1 justify-around overflow-x-auto">
        {m.consultoria.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-lg px-2 py-1.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-400"
          >
            {item.label}
          </a>
        ))}
      </div>
      <SiteNav variant="consultoria" className="shrink-0 text-xs" />
    </nav>
  );
}
