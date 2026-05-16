"use client";

import { useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type NavbarControlsProps = {
  mobileBar?: boolean;
};

function PreferencesPanel({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { locale, setLocale, m } = useI18n();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const panelShell = compact
    ? "flex flex-row items-stretch gap-0 rounded-xl border border-emerald-500/40 bg-white p-1 shadow-md dark:border-emerald-400/30 dark:bg-zinc-900"
    : "flex items-stretch gap-0 rounded-xl border-2 border-emerald-500/50 bg-white p-1.5 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/20 dark:border-emerald-400/40 dark:bg-zinc-900 dark:shadow-emerald-900/20 dark:ring-emerald-400/25";

  return (
    <div
      className={`${className} ${panelShell}`}
      role="group"
      aria-label={`${m.common.languageLabel} · ${m.common.themeLabel}`}
    >
      <div className="flex flex-col justify-center px-1">
        <span
          className={`px-1.5 font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 ${compact ? "sr-only" : "text-[9px]"}`}
        >
          {m.common.languageLabel}
        </span>
        <div className="mt-1 flex rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-800">
          {(["pt", "en"] as Locale[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLocale(lang)}
              className={`min-w-[2.75rem] rounded-md px-3 py-2 text-xs font-bold uppercase transition ${
                locale === lang
                  ? "bg-emerald-600 text-white shadow-md dark:bg-emerald-500"
                  : "text-zinc-600 hover:bg-white dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
              aria-pressed={locale === lang}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mx-1.5 w-px self-stretch bg-emerald-200/80 dark:bg-emerald-800"
        aria-hidden
      />

      <div className="flex flex-col justify-center px-1">
        <span
          className={`px-1.5 font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 ${compact ? "sr-only" : "text-[9px]"}`}
        >
          {m.common.themeLabel}
        </span>
        <div className="mt-1 flex rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-800">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-semibold transition sm:px-3 ${
              !isDark
                ? "bg-amber-400 text-amber-950 shadow-md ring-1 ring-amber-500/50"
                : "text-zinc-600 hover:bg-white dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
            aria-pressed={!isDark}
            aria-label={m.common.themeLight}
          >
            <span className="text-sm" aria-hidden>
              ☀️
            </span>
            <span className={compact ? "sr-only" : ""}>{m.common.lightShort}</span>
          </button>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-semibold transition sm:px-3 ${
              isDark
                ? "bg-violet-600 text-white shadow-md ring-1 ring-violet-400/50"
                : "text-zinc-600 hover:bg-white dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
            aria-pressed={isDark}
            aria-label={m.common.themeDark}
          >
            <span className="text-sm" aria-hidden>
              🌙
            </span>
            <span className={compact ? "sr-only" : ""}>{m.common.darkShort}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function NavbarControls({ mobileBar = false }: NavbarControlsProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={`h-11 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800 ${
          mobileBar ? "mx-auto w-full max-w-sm md:hidden" : "hidden w-52 md:block"
        }`}
        aria-hidden
      />
    );
  }

  const positionClass = mobileBar
    ? "flex w-full justify-center md:hidden"
    : "hidden md:flex";

  return <PreferencesPanel className={positionClass} compact={mobileBar} />;
}
