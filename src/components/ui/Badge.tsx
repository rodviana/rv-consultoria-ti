type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default:
      "border border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400",
    accent:
      "border border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300",
    outline:
      "border border-zinc-300 bg-transparent text-zinc-600 dark:border-white/[0.12] dark:text-zinc-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
