type ConsultoriaSectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function ConsultoriaSection({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: ConsultoriaSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 sm:scroll-mt-28 ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        {label}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {description}
        </p>
      )}
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
