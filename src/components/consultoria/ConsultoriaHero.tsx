"use client";

import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";
import Image from "next/image";

export function ConsultoriaHero() {
  const { m, locale } = useI18n();
  const { hero, audiences } = m.consultoria;
  const waText = encodeURIComponent(hero.whatsappIntro);

  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            {hero.badge}
          </span>
          <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.12] tracking-tight text-zinc-900 sm:mt-6 sm:text-4xl dark:text-zinc-50 md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg dark:text-zinc-400 md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 sm:w-auto"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-base font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {audiences.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-100 to-blue-50 opacity-80 dark:from-emerald-950 dark:to-blue-950" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={CONTACT.photoPath}
                alt={CONTACT.name}
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
          <div className="relative mt-4 w-full max-w-[220px] rounded-xl border border-zinc-200 bg-white p-4 shadow-lg sm:absolute sm:-bottom-4 sm:-left-4 sm:mt-0 dark:border-zinc-800 dark:bg-zinc-900 md:-left-8">
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {locale === "pt" ? "Especialidade" : "Specialty"}
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {hero.specialty}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
