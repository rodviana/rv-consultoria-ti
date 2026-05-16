"use client";

import { useI18n } from "@/i18n/context";

export function Metrics() {
  const { m } = useI18n();

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-white/[0.06] dark:bg-white/[0.06] md:grid-cols-4">
      {m.portfolio.metrics.map((metric) => (
        <div
          key={metric.label}
          className="card-shine bg-white px-6 py-8 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900/80"
        >
          <p className="text-3xl font-semibold tracking-tight gradient-text-accent md:text-4xl">
            {metric.value}
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
