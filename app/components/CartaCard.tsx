"use client";

import Link from "next/link";
import { Carta, formatarData } from "@/app/data/cartas";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

interface CartaCardProps {
  carta: Carta;
  variant?: "list" | "featured";
  delay?: number;
}

export default function CartaCard({ carta, variant = "list", delay = 0 }: CartaCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [tiltStyle, setTiltStyle] = useState({});
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltStyle({
      transform: `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateZ(4px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
      transition: "transform 0.5s ease-out",
    });
  };

  const revealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };

  if (variant === "featured") {
    return (
      <div ref={ref} style={revealStyle}>
        <Link href={`/arquivo/${carta.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <article className="group" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ padding: "2.5rem", backgroundColor: "rgba(44,41,38,0.03)", border: "1px solid rgba(44,41,38,0.1)", cursor: "pointer", willChange: "transform", ...tiltStyle }}>
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>Nº {String(carta.numero).padStart(2, "0")}</span>
              <span style={{ color: "rgba(44,41,38,0.2)" }}>—</span>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", color: "#4A433D", opacity: 0.7, fontWeight: 300 }}>{formatarData(carta.data)}</span>
              {carta.simbolo && <span style={{ color: "#4F5B4A", opacity: 0.6, marginLeft: "auto" }}>🌿</span>}
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 500, color: "#2C2926", lineHeight: 1.2, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{carta.titulo}</h2>
            {carta.subtitulo && <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", color: "#4A433D", opacity: 0.8, fontWeight: 300, marginBottom: "1rem" }}>{carta.subtitulo}</p>}
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", color: "#4A433D", lineHeight: "1.75", fontWeight: 300 }}>{carta.excerpt}</p>
            <div className="flex items-center gap-2 mt-5" style={{ color: "#4F5B4A" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400 }}>{t("section.lerCarta")}</span>
              <span>→</span>
            </div>
          </article>
        </Link>
      </div>
    );
  }

  return (
    <div ref={ref} style={revealStyle}>
      <Link href={`/arquivo/${carta.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <article className="group py-6" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ borderBottom: "1px solid rgba(44,41,38,0.1)", willChange: "transform", ...tiltStyle }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>Nº {String(carta.numero).padStart(2, "0")}</span>
                <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.5rem" }}>—</span>
                <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", color: "#4A433D", opacity: 0.6, fontWeight: 300 }}>{formatarData(carta.data)} · {carta.tempoLeitura} {t("min")}</span>
                {carta.simbolo && <span style={{ color: "#4F5B4A", opacity: 0.5 }}>🌿</span>}
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 500, color: "#2C2926", lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: "0.35rem" }}>{carta.titulo}</h3>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.85rem", color: "#4A433D", lineHeight: "1.6", fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{carta.excerpt}</p>
            </div>
            <span style={{ color: "#4F5B4A", fontSize: "0.9rem", flexShrink: 0, marginTop: "0.25rem" }}>→</span>
          </div>
        </article>
      </Link>
    </div>
  );
}
