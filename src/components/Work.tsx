"use client";

import { useI18n } from "@/i18n/context";
import { Section } from "./ui/Section";

export function Work() {
  const { m, locale } = useI18n();
  const { projects, workSection } = m.portfolio;
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section
      id="trabalho"
      label={workSection.label}
      title={workSection.title}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, i) => (
          <article
            key={project.title}
            className={`card-shine relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 sm:p-8 dark:border-white/[0.06] dark:bg-zinc-950/80 dark:hover:border-white/[0.12] ${
              i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:p-10" : ""
            }`}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl"
              aria-hidden
            />
            <div>
              <p className="font-mono text-xs text-zinc-500">{project.context}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
                {locale === "pt" ? project.titlePt : project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-500 dark:border-white/[0.06] dark:bg-white/[0.02]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      {other.length > 0 && (
        <article className="card-shine mt-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.06] dark:bg-zinc-950/50 md:p-8">
          {other.map((project) => (
            <div key={project.title} className="mt-4 first:mt-0">
              <p className="font-mono text-xs text-zinc-500">{project.context}</p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                {locale === "pt" ? project.titlePt : project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-500">
                {project.description}
              </p>
            </div>
          ))}
        </article>
      )}
    </Section>
  );
}
