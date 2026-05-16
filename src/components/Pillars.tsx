"use client";

import { useI18n } from "@/i18n/context";
import { Section } from "./ui/Section";

export function Pillars() {
  const { m } = useI18n();
  const { pillars, pillarsSection } = m.portfolio;

  return (
    <Section
      id="expertise"
      label={pillarsSection.label}
      title={pillarsSection.title}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.title}
            className="card-shine group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 backdrop-blur transition hover:border-zinc-300 sm:p-6 dark:border-white/[0.06] dark:bg-zinc-950/80 dark:hover:border-white/[0.12] dark:hover:bg-zinc-900/50"
          >
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              0{i + 1}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {pillar.title}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-violet-600 dark:text-violet-400/80">
              {pillar.titleEn}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {pillar.description}
            </p>
            <ul className="mt-6 space-y-2 border-t border-zinc-200 pt-6 dark:border-white/[0.06]">
              {pillar.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                >
                  <span className="h-px w-3 bg-gradient-to-r from-violet-500 to-emerald-500" />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {pillarsSection.about.map((p) => (
        <p
          key={p.slice(0, 40)}
          className="mt-8 max-w-3xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-600"
        >
          {p}
        </p>
      ))}
    </Section>
  );
}
