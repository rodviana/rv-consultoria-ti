"use client";

import { useI18n } from "@/i18n/context";
import { ConsultoriaSection } from "./ConsultoriaSection";

export function Process() {
  const { m } = useI18n();
  const { process } = m.consultoria;

  return (
    <ConsultoriaSection
      id="como-funciona"
      label={process.label}
      title={process.title}
      description={process.subtitle}
    >
      <ol className="space-y-4">
        {process.steps.map((step) => (
          <li
            key={step.step}
            className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:gap-8 md:p-8"
          >
            <span className="shrink-0 font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {step.step}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ConsultoriaSection>
  );
}
