type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ id, label, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 sm:scroll-mt-28">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-600 sm:mb-6 sm:gap-3 sm:text-sm dark:text-[var(--color-accent-from)]">
        <span
          className="h-px flex-1 bg-zinc-200 dark:bg-[var(--color-border)]"
          aria-hidden
        />
        {label}
        <span
          className="h-px w-8 bg-violet-500 dark:bg-[var(--color-accent-from)]"
          aria-hidden
        />
      </h2>
      <p className="mb-5 text-2xl font-semibold tracking-tight text-zinc-900 sm:mb-6 sm:text-3xl dark:text-zinc-50 md:text-4xl">
        {title}
      </p>
      {description && (
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:mb-10 sm:text-base dark:text-zinc-500">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
