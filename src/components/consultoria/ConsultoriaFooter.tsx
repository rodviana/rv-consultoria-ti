"use client";

import { SiteNav } from "@/components/SiteNav";
import { useI18n } from "@/i18n/context";

export function ConsultoriaFooter() {
  const { m } = useI18n();

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-bold text-zinc-900 dark:text-zinc-100">
            {m.consultoria.brand}
          </p>
          <p className="mt-1 text-sm text-zinc-500">{m.consultoria.footer.tagline}</p>
        </div>
        <SiteNav variant="consultoria" />
      </div>
      <p className="mt-8 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Rodrigo Viana Quirino
      </p>
    </footer>
  );
}
