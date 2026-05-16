"use client";

import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";
import Image from "next/image";

export function ConsultoriaHero() {
  const { m, locale } = useI18n();
  const { hero, audiences } = m.consultoria;
  const waText = encodeURIComponent(hero.whatsappIntro);

  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-32 lg:pt-36 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            {hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-base font-medium text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
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
          <div className="absolute -bottom-4 -left-4 max-w-[220px] rounded-xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:-left-8">
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
