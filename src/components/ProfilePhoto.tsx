import { CONTACT } from "@/data/constants";
import Image from "next/image";

type ProfilePhotoProps = {
  size?: "header" | "hero";
  className?: string;
  priority?: boolean;
};

export function ProfilePhoto({
  size = "hero",
  className = "",
  priority = false,
}: ProfilePhotoProps) {
  if (size === "header") {
    return (
      <span
        className={`relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-zinc-300 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 ${className}`}
      >
        <Image
          src={CONTACT.photoPath}
          alt={CONTACT.name}
          width={32}
          height={32}
          className="h-full w-full object-cover object-[center_15%]"
          priority={priority}
        />
      </span>
    );
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-emerald-500/30 opacity-60 blur-sm dark:from-violet-500/40 dark:via-blue-500/20 dark:to-emerald-500/30"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1 shadow-2xl shadow-zinc-300/50 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/50">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={CONTACT.photoPath}
            alt={`Foto de ${CONTACT.name}`}
            fill
            sizes="(max-width: 1024px) 320px, 400px"
            className="object-cover object-[center_12%] saturate-[0.92] contrast-[1.02]"
            priority={priority}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-100/80 via-transparent to-transparent dark:from-zinc-950/80"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
