"use client";

import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";

export function Contact() {
  const { m } = useI18n();
  const { contact } = m.portfolio;

  return (
    <section id="contato" className="scroll-mt-24 pb-8 pt-8 sm:scroll-mt-28">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-100 to-white px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-16 dark:border-white/[0.08] dark:from-zinc-900/80 dark:to-zinc-950 md:px-16 md:py-24">
        <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {contact.label}
        </p>
        <h2 className="relative mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50 md:text-5xl">
          {contact.title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-sm text-zinc-600 dark:text-zinc-500">
          {contact.subtitle}
        </p>
        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-zinc-800 sm:w-auto dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
          >
            {contact.cta}
          </a>
          <a
            href={CONTACT.cvPath}
            download
            className="text-sm text-zinc-500 transition hover:text-zinc-800 dark:hover:text-zinc-300"
          >
            {m.common.cv}
          </a>
        </div>
        <p className="relative mt-6 font-mono text-xs text-zinc-500">
          {CONTACT.email}
        </p>
      </div>
    </section>
  );
}
