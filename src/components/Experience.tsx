"use client";

import { useI18n } from "@/i18n/context";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

export function Experience() {
  const { m } = useI18n();
  const { experiences, experienceSection } = m.portfolio;

  return (
    <Section
      id="experiencia"
      label={experienceSection.label}
      title={experienceSection.title}
      description={experienceSection.description}
    >
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="card-shine group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 dark:border-white/[0.06] dark:bg-zinc-950/50 dark:hover:border-white/[0.1] md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <Badge variant="outline">{exp.type}</Badge>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.role}
                </p>
              </div>
              <time className="shrink-0 font-mono text-xs text-zinc-500">
                {exp.period}
              </time>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
              {exp.summary}
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {exp.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-500"
                >
                  <span
                    className="mt-2 h-px w-4 shrink-0 bg-zinc-300 dark:bg-zinc-700"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
