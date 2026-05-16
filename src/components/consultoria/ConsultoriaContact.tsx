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
      className="scroll-mt-28 rounded-3xl bg-zinc-900 px-8 py-16 text-center dark:bg-zinc-950 md:px-12 md:py-20"
    >
      <h2 className="text-3xl font-bold text-white md:text-4xl">{cta.title}</h2>
      <p className="mx-auto mt-4 max-w-lg text-zinc-400">{cta.subtitle}</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-400"
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
