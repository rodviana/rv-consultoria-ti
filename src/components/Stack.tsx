"use client";

import { useI18n } from "@/i18n/context";
import { Section } from "./ui/Section";

export function Stack() {
  const { m, locale } = useI18n();
  const { stackSection } = m.portfolio;
  const allSkills = Object.values(stackSection.skills).flat();

  return (
    <Section
      id="stack"
      label={stackSection.label}
      title={stackSection.title}
      description={stackSection.description}
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 py-4 dark:border-white/[0.06] dark:bg-zinc-950/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-6 font-mono text-sm text-zinc-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackSection.categories.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/[0.06] dark:bg-zinc-950/80"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              {label}
            </h3>
            <ul className="mt-4 space-y-2">
              {stackSection.skills[key].map((skill) => (
                <li key={skill} className="text-sm text-zinc-600 dark:text-zinc-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-600">
        <div>
          <span className="text-zinc-500">
            {locale === "pt" ? "Formação · " : "Education · "}
          </span>
          {stackSection.education}
        </div>
        <div>
          <span className="text-zinc-500">
            {locale === "pt" ? "Idiomas · " : "Languages · "}
          </span>
          {stackSection.languages}
        </div>
      </div>
    </Section>
  );
}
