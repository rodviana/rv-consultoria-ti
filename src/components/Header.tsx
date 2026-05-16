"use client";

import { NavbarControls } from "@/components/NavbarControls";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SiteNav } from "@/components/SiteNav";
import { CONTACT } from "@/data/constants";
import { useI18n } from "@/i18n/context";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const { m } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-black/90"
          : "bg-white/70 backdrop-blur-md dark:bg-black/70"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 pb-3 pt-2 sm:px-6 md:pb-2">
        <div className="flex h-12 items-center justify-between gap-2">
          <Link href="/portfolio" className="group flex shrink-0 items-center gap-2.5">
            <ProfilePhoto
              size="header"
              priority
              className="transition group-hover:border-zinc-400 dark:group-hover:border-white/20"
            />
            <span className="hidden text-sm font-medium text-zinc-600 sm:block dark:text-zinc-400">
              {CONTACT.name.split(" ")[0]}{" "}
              <span className="text-zinc-400 dark:text-zinc-600">Viana</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegação portfólio"
          >
            {m.portfolio.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-white/[0.04] dark:hover:text-zinc-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <SiteNav variant="portfolio" className="hidden md:inline-flex" />
            <NavbarControls />
            <a
              href={CONTACT.cvPath}
              download
              className="hidden rounded-lg px-3 py-1.5 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200 lg:block"
            >
              {m.common.cv}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800 sm:px-3 sm:text-sm dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
            >
              {m.common.contact}
            </a>
          </div>
        </div>

        <NavbarControls mobileBar />
      </div>
    </header>
  );
}
