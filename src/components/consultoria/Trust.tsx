"use client";

import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";
import Image from "next/image";

export function Trust() {
  const { m } = useI18n();
  const { trust } = m.consultoria;

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl sm:p-8 md:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[200px_1fr]">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 lg:mx-0">
          <Image
            src={CONTACT.photoPath}
            alt={CONTACT.name}
            fill
            className="object-cover object-[center_12%]"
            sizes="200px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {trust.label}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50 md:text-3xl">
            {trust.title}
          </h2>
          {trust.paragraphs.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {p}
            </p>
          ))}
          <p className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">
            {CONTACT.name}
          </p>
          <p className="text-sm text-zinc-500">{trust.role}</p>
        </div>
      </div>
    </section>
  );
}
