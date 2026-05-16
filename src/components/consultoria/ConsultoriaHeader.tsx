"use client";

import { NavbarControls } from "@/components/NavbarControls";
import { SiteNav } from "@/components/SiteNav";
import { useI18n } from "@/i18n/context";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ConsultoriaHeader() {
  const { m } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/95"
          : "bg-white/80 backdrop-blur-md dark:bg-zinc-950/80"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 pb-3 pt-2 sm:px-6 md:pb-2">
        <div className="flex h-12 items-center justify-between gap-2">
          <Link
            href="/"
            className="shrink-0 text-sm font-bold text-zinc-900 dark:text-zinc-50"
          >
            RV
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}
              Consultoria
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegação consultoria"
          >
            {m.consultoria.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <SiteNav variant="consultoria" className="hidden lg:inline-flex" />
            <NavbarControls />
            <a
              href={`https://wa.me/5562999768895`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:block"
            >
              {m.common.whatsapp}
            </a>
          </div>
        </div>

        <NavbarControls mobileBar />
      </div>
    </header>
  );
}
