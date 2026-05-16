export function GridBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
      <div
        className="glow-orb -left-32 top-0 h-[500px] w-[500px] bg-violet-600/20"
        aria-hidden
      />
      <div
        className="glow-orb -right-32 top-1/4 h-[400px] w-[400px] bg-blue-600/15"
        aria-hidden
      />
      <div
        className="glow-orb bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 bg-emerald-600/10"
        aria-hidden
      />
    </>
  );
}
