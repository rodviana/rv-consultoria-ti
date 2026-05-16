"use client";

import { useI18n } from "@/i18n/context";
import { ConsultoriaSection } from "./ConsultoriaSection";

const icons: Record<string, string> = {
  map: "🗺️",
  users: "👥",
  zap: "⚡",
  chart: "📊",
};

export function Solutions() {
  const { m } = useI18n();
  const { solutions, solutionsSection, featuredBadge } = m.consultoria;

  return (
    <ConsultoriaSection
      id="solucoes"
      label={solutionsSection.label}
      title={solutionsSection.title}
      description={solutionsSection.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {solutions.map((item) => (
          <article
            key={item.title}
            className={`rounded-2xl border p-6 transition ${
              item.featured
                ? "border-emerald-300 bg-gradient-to-br from-emerald-50 to-white shadow-md ring-1 ring-emerald-200 md:col-span-2 md:flex md:items-start md:gap-8 md:p-8 dark:border-emerald-800 dark:from-emerald-950 dark:to-zinc-900 dark:ring-emerald-900"
                : "border-zinc-200 bg-white shadow-sm hover:border-emerald-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
            }`}
          >
            <span className="text-3xl" aria-hidden>
              {icons[item.icon]}
            </span>
            <div className={item.featured ? "md:flex-1" : ""}>
              {item.featured && (
                <span className="mt-3 inline-block rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-semibold text-white">
                  {featuredBadge}
                </span>
              )}
              <h3
                className={`font-semibold text-zinc-900 dark:text-zinc-100 ${item.featured ? "mt-3 text-2xl" : "mt-3 text-lg"}`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400 ${item.featured ? "text-base" : "text-sm"}`}
              >
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </ConsultoriaSection>
  );
}
