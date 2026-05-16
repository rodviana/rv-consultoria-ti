"use client";

import { SiteNav } from "@/components/SiteNav";
import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";

export function ConsultoriaMobileNav() {
  const { m } = useI18n();

  return (
    <nav
      className="mobile-dock no-print fixed left-3 right-3 z-50 flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white/95 px-2 py-2 shadow-lg backdrop-blur sm:left-4 sm:right-4 dark:border-zinc-800 dark:bg-zinc-950/95 lg:hidden"
      aria-label="Navegação mobile consultoria"
    >
      <div className="scrollbar-none flex min-w-0 flex-1 snap-x snap-mandatory gap-0.5 overflow-x-auto">
        {m.consultoria.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 snap-start rounded-lg px-2.5 py-2 text-[11px] font-medium text-zinc-600 active:bg-zinc-100 dark:text-zinc-400 dark:active:bg-white/5"
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700"
        aria-label={m.common.whatsapp}
      >
        <span aria-hidden>💬</span>
      </a>
      <SiteNav variant="consultoria" className="hidden shrink-0 px-2 py-1 text-[10px] min-[400px]:inline-flex" />
    </nav>
  );
}
