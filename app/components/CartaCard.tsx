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
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltStyle({
      transform: `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateZ(6px) translateY(-4px)`,
      transition: "transform 0.08s ease-out",
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px) translateY(0)",
      transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
    });
  };

  const revealStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.8s cubic-bezier(.22,1,.36,1) ${delay}ms`,
  };

  if (variant === "featured") {
    return (
      <div ref={ref} style={revealStyle}>
        <Link href={`/arquivo/${carta.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <article className="glow-border" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ padding: "2.75rem", backgroundColor: isHovered ? "rgba(79,91,74,0.04)" : "rgba(44,41,38,0.02)", border: `1px solid ${isHovered ? "rgba(79,91,74,0.2)" : "rgba(44,41,38,0.1)"}`, cursor: "pointer", willChange: "transform", transition: "background-color 0.35s ease, border-color 0.35s ease", ...tiltStyle }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="numero-stamp" style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, padding: "0.2rem 0.6rem", border: "1px solid rgba(79,91,74,0.25)", transition: "background-color 0.3s ease, color 0.3s ease", backgroundColor: isHovered ? "rgba(79,91,74,0.06)" : "transparent" }}>Nº {String(carta.numero).padStart(2, "0")}</span>
              <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.5rem" }}>—</span>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", color: "#4A433D", opacity: 0.65, fontWeight: 300 }}>{formatarData(carta.data)}</span>
              {carta.simbolo && <span style={{ color: "#4F5B4A", opacity: 0.5, marginLeft: "auto" }}>🌿</span>}
            </div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.7rem, 3vw, 2.2rem)", fontWeight: 500, color: "#2C2926", lineHeight: 1.2, marginBottom: "0.85rem", letterSpacing: "-0.015em", transition: "color 0.3s ease" }}>{carta.titulo}</h2>
            {carta.subtitulo && <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", color: "#4A433D", opacity: 0.75, fontWeight: 300, marginBottom: "1rem", fontStyle: "italic" }}>{carta.subtitulo}</p>}
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", color: "#4A433D", lineHeight: "1.8", fontWeight: 300 }}>{carta.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.75rem", color: "#4F5B4A", transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.35s cubic-bezier(.22,1,.36,1)" }}><span style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400 }}>{t("section.lerCarta")}</span><span style={{ fontSize: "0.8rem", transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.35s cubic-bezier(.22,1,.36,1)" }}>→</span></div>
          </article>
        </Link>
      </div>
    );
  }

  return (
    <div ref={ref} style={revealStyle}>
      <Link href={`/arquivo/${carta.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <article className="carta-card-hover glow-border" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ borderBottom: `1px solid ${isHovered ? "rgba(79,91,74,0.15)" : "rgba(44,41,38,0.1)"}`, paddingTop: "1.5rem", paddingBottom: "1.5rem", willChange: "transform", transition: "border-color 0.3s ease", ...tiltStyle }}>
          <div className="flex items-start justify-between gap-4">
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="numero-stamp" style={{ fontFamily: "var(--font-jost)", fontSize: "0.63rem", letterSpacing: "0.22em", textTransform: "uppercase", color: isHovered ? "#4F5B4A" : "#4A433D", fontWeight: 400, opacity: isHovered ? 1 : 0.8, transition: "color 0.3s ease, opacity 0.3s ease" }}>Nº {String(carta.numero).padStart(2, "0")}</span>
                <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.5rem" }}>—</span>
                <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", color: "#4A433D", opacity: 0.55, fontWeight: 300 }}>{formatarData(carta.data)} · {carta.tempoLeitura} {t("min")}</span>
                {carta.simbolo && <span style={{ color: "#4F5B4A", opacity: 0.4 }}>🌿</span>}
              </div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontWeight: 500, color: "#2C2926", lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: "0.4rem", transition: "color 0.3s ease" }}>{carta.titulo}</h3>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", color: "#4A433D", lineHeight: "1.65", fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", opacity: isHovered ? 0.85 : 0.65, transition: "opacity 0.3s ease" }}>{carta.excerpt}</p>
            </div>
            <div style={{ color: "#4F5B4A", opacity: isHovered ? 1 : 0.35, transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(.22,1,.36,1)", flexShrink: 0, marginTop: "0.25rem", fontSize: "1rem" }}>→</div>
          </div>
        </article>
      </Link>
    </div>
  );
}
