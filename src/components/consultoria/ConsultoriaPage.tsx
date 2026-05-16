"use client";

import { ConsultoriaContact } from "./ConsultoriaContact";
import { ConsultoriaFooter } from "./ConsultoriaFooter";
import { ConsultoriaHeader } from "./ConsultoriaHeader";
import { ConsultoriaHero } from "./ConsultoriaHero";
import { ConsultoriaMobileNav } from "./ConsultoriaMobileNav";
import { CRM } from "./CRM";
import { FAQ } from "./FAQ";
import { Pains } from "./Pains";
import { Process } from "./Process";
import { Solutions } from "./Solutions";
import { Trust } from "./Trust";
import "@/app/consultoria.css";

export function ConsultoriaPage() {
  return (
    <div className="consultoria-grid min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <ConsultoriaHeader />
      <main className="relative mx-auto max-w-6xl px-6 pb-28">
        <ConsultoriaHero />
        <div className="space-y-24 md:space-y-32">
          <Pains />
          <Solutions />
          <CRM />
          <Process />
          <Trust />
          <FAQ />
          <ConsultoriaContact />
        </div>
        <ConsultoriaFooter />
      </main>
      <ConsultoriaMobileNav />
    </div>
  );
}
