"use client";

import { useI18n } from "@/i18n/context";

export function FAQ() {
  const { m } = useI18n();
  const { faq } = m.consultoria;

  return (
    <section className="mt-16 sm:mt-24">
      <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-50 md:text-3xl">
        {faq.title}
      </h2>
      <dl className="mt-8 space-y-4">
        {faq.items.map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
          >
            <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
