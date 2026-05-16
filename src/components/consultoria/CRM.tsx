"use client";

import { useI18n } from "@/i18n/context";
import { ConsultoriaSection } from "./ConsultoriaSection";

export function CRM() {
  const { m } = useI18n();
  const { crm } = m.consultoria;

  return (
    <ConsultoriaSection
      id="crm"
      label={crm.label}
      title={crm.title}
      description={crm.subtitle}
      className="rounded-3xl bg-gradient-to-b from-emerald-50 to-transparent px-6 py-12 dark:from-emerald-950/50 md:px-10 md:py-16"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {crm.benefits.map((benefit, i) => (
          <article
            key={benefit.title}
            className={`rounded-xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-emerald-900 dark:bg-zinc-900 ${
              i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              {i + 1}
            </span>
            <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-emerald-200 bg-white p-6 dark:border-emerald-900 dark:bg-zinc-900 md:p-8">
        <p className="text-center text-lg font-medium text-zinc-800 dark:text-zinc-200">
          {crm.highlight}{" "}
          <strong className="text-emerald-700 dark:text-emerald-400">
            {crm.highlightStrong}
          </strong>
          {crm.highlightEnd}
        </p>
      </div>
    </ConsultoriaSection>
  );
}
