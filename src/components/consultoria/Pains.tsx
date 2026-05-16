"use client";

import { useI18n } from "@/i18n/context";
import { ConsultoriaSection } from "./ConsultoriaSection";

export function Pains() {
  const { m } = useI18n();
  const { pains, painsSection } = m.consultoria;

  return (
    <ConsultoriaSection
      id="desafios"
      label={painsSection.label}
      title={painsSection.title}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {pains.map((pain) => (
          <article
            key={pain.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-red-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-red-900"
          >
            <span className="text-2xl" aria-hidden>
              ⚠️
            </span>
            <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {pain.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {pain.description}
            </p>
          </article>
        ))}
      </div>
    </ConsultoriaSection>
  );
}
