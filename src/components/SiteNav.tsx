"use client";

import { useI18n } from "@/i18n/context";
import Link from "next/link";

type SiteNavProps = {
  variant: "consultoria" | "portfolio";
  className?: string;
};

export function SiteNav({ variant, className = "" }: SiteNavProps) {
  const { m } = useI18n();
  const isConsultoria = variant === "consultoria";
  const href = isConsultoria ? "/portfolio" : "/";
  const label = isConsultoria
    ? m.common.portfolioLink
    : m.common.businessLink;

  return (
    <Link
      href={href}
      prefetch
      className={`relative z-10 inline-flex shrink-0 items-center rounded-lg border px-3 py-1.5 text-sm font-medium transition ${className} border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/10`}
    >
      {label}
    </Link>
  );
}
