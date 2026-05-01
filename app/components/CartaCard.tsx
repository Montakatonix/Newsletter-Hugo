"use client";

import Link from "next/link";
import { Carta, formatarData } from "@/app/data/cartas";

interface CartaCardProps {
  carta: Carta;
  variant?: "list" | "featured";
}

export default function CartaCard({ carta, variant = "list" }: CartaCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/arquivo/${carta.slug}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <article className="group" style={{ padding: "2.5rem", backgroundColor: "rgba(44,41,38,0.03)", border: "1px solid rgba(44,41,38,0.1)", transition: "border-color 0.3s" }}>
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>Nº {String(carta.numero).padStart(2,"0")}</span>
            <span style={{ color: "rgba(44,41,38,0.2)" }}>—</span>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", color: "#4A433D", opacity: 0.7, fontWeight: 300 }}>{formatarData(carta.data)}</span>
            {carta.simbolo && <span style={{ color: "#4F5B4A", opacity: 0.6, marginLeft: "auto" }}>🜂</span>}
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 500, color: "#2C2926", lineHeight: 1.2, marginBottom: "0.75rem" }}>{carta.titulo}</h2>
          <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", color: "#4A433D", lineHeight: "1.75", fontWeight: 300 }}>{carta.excerpt}</p>
          <div className="flex items-center gap-2 mt-5" style={{ color: "#4F5B4A" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400 }}>Ler carta</span>
            <span style={{ fontSize: "0.7rem" }}>→</span>
          </div>
        </article>
      </Link>
    );
  }
  return (
    <Link href={`/arquivo/${carta.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article className="group py-6" style={{ borderBottom: "1px solid rgba(44,41,38,0.1)" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>N² {String(carta.numero).padStart(2,"0")}</span>
              <span style={{ color: "rgba(44,41,38,0.2)" }}>—</span>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", color: "#4A433D", opacity: 0.6, fontWeight: 300 }}>{formatarData(carta.data)} · {carta.tempoLeitura} min</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 500, color: "#2C2926", lineHeight: 1.25, marginBottom: "0.35rem" }}>{carta.titulo}</h3>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", color: "#4A433D", lineHeight: "1.6", fontWeight: 300 }}>{carta.excerpt}</p>
          </div>
          <span style={{ color: "#4F5B4A", fontSize: "0.9rem", flexShrink: 0 }}>→</span>
        </div>
      </article>
    </Link>
  );
}
