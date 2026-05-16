"use client";

import { ProfilePhoto } from "@/components/ProfilePhoto";
import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";
import { Badge } from "./ui/Badge";

export function Hero() {
  const { m } = useI18n();
  const p = m.portfolio;

  return (
    <section className="relative flex min-h-0 flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 md:min-h-[85vh] md:pt-28 md:pb-20 lg:min-h-[85vh]">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-16">
        <div>
          <div className="animate-fade-up">
            <Badge variant="accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {p.availability}
            </Badge>
          </div>

          <p className="animate-fade-up-delay-1 mt-8 font-mono text-sm tracking-wide text-zinc-500">
            {p.title} · {p.roleLine}
          </p>

          <h1 className="animate-fade-up-delay-1 mt-4 max-w-4xl text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text">{CONTACT.name}</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-8 sm:text-lg md:text-xl">
            {p.tagline}
          </p>

          <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-600">
            {p.subheadline}
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
            >
              {p.ctaTalk}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={CONTACT.cvPath}
              download
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 sm:w-auto dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20"
            >
              {p.ctaCv}
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 order-first max-w-[280px] mx-auto w-full sm:max-w-xs lg:order-last lg:mx-0 lg:max-w-none">
          <ProfilePhoto size="hero" priority />
        </div>
      </div>
    </section>
  );
}
