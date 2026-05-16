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
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
      <div className="mt-10">{children}</div>
    </section>
  );
}
