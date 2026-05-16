"use client";

import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";

export function ConsultoriaContact() {
  const { m, locale } = useI18n();
  const { cta } = m.consultoria;
  const waText = encodeURIComponent(
    locale === "pt"
      ? "Olá Rodrigo! Quero saber mais sobre consultoria para meu negócio."
      : "Hi Rodrigo! I'd like to learn more about consulting for my business."
  );

  return (
    <section
      id="contato"
      className="scroll-mt-24 rounded-2xl bg-zinc-900 px-5 py-12 text-center sm:scroll-mt-28 sm:rounded-3xl sm:px-8 sm:py-16 dark:bg-zinc-950 md:px-12 md:py-20"
    >
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">{cta.title}</h2>
      <p className="mx-auto mt-4 max-w-lg text-zinc-400">{cta.subtitle}</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-400 sm:w-auto"
        >
          <span aria-hidden>💬</span>
          {cta.button}
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-sm text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
        >
          {cta.emailLabel}: {CONTACT.email}
        </a>
      </div>
      <p className="mt-6 font-mono text-sm text-zinc-500">{CONTACT.phone}</p>
    </section>
  );
}
