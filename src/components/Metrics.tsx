"use client";

import { useI18n } from "@/i18n/context";

export function Metrics() {
  const { m } = useI18n();

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-white/[0.06] dark:bg-white/[0.06] md:grid-cols-4">
      {m.portfolio.metrics.map((metric) => (
        <div
          key={metric.label}
          className="card-shine bg-white px-4 py-6 transition hover:bg-zinc-50 sm:px-6 sm:py-8 dark:bg-zinc-950 dark:hover:bg-zinc-900/80"
        >
          <p className="text-2xl font-semibold tracking-tight gradient-text-accent sm:text-3xl md:text-4xl">
            {metric.value}
          </p>
          <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm dark:text-zinc-500">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
