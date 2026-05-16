export function GridBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" aria-hidden />
      <div
        className="glow-orb -left-16 top-0 h-[280px] w-[280px] bg-violet-600/20 sm:-left-32 sm:h-[500px] sm:w-[500px]"
        aria-hidden
      />
      <div
        className="glow-orb -right-16 top-1/4 h-[220px] w-[220px] bg-blue-600/15 sm:-right-32 sm:h-[400px] sm:w-[400px]"
        aria-hidden
      />
      <div
        className="glow-orb bottom-0 left-1/2 h-[200px] w-[min(100%,360px)] -translate-x-1/2 bg-emerald-600/10 sm:h-[300px] sm:w-[600px]"
        aria-hidden
      />
    </>
  );
}
