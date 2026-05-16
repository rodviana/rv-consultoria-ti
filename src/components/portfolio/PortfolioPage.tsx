"use client";

import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { MobileNav } from "@/components/MobileNav";
import { Pillars } from "@/components/Pillars";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { GridBackground } from "@/components/ui/GridBackground";

export function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-900 dark:bg-[#030303] dark:text-zinc-50">
      <GridBackground />
      <Header />
      <main className="safe-bottom relative mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <div className="mb-16 sm:mb-24">
          <Metrics />
        </div>
        <div className="space-y-20 pb-4 sm:space-y-28 md:space-y-32 md:pb-8">
          <Pillars />
          <Experience />
          <Work />
          <Stack />
          <Contact />
        </div>
        <Footer />
      </main>
      <MobileNav />
    </div>
  );
}
