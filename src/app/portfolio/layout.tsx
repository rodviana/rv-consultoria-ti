import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio Técnico — Rodrigo Viana Quirino",
  description:
    "Software Architect & Technical Lead. Portfólio para recrutadores, CTOs e times de engenharia.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
