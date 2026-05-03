"use client";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--dark3)", borderTop: "1px solid var(--border)", fontFamily: "var(--font-mono)" }}>
      {/* Top bar */}
      <div style={{ height: 2, background: "linear-gradient(to right, transparent, var(--cyan), var(--magenta), transparent)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em", color: "#fff", marginBottom: ".25rem" }}>
                ALMANAQUE
              </div>
              <div style={{ fontSize: ".5rem", letterSpacing: ".15em", color: "var(--cyan)", opacity: .7 }}>
                CONTEMPORANEO
              </div>
            </div>
            <p style={{ fontSize: ".62rem", color: "var(--text-dim)", lineHeight: 1.8, letterSpacing: ".05em" }}>
              {t("footer.tagline") || "Filosofia estrategica. Uma carta por semana. Sem ruido."}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: ".5rem", letterSpacing: ".3em", color: "var(--cyan)", marginBottom: "1.25rem" }}>
              &gt; NAVEGACAO
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: ".75rem" }}>
              {[
                { href: "/arquivo", label: t("nav.arquivo") || "Arquivo" },
                { href: "/sobre", label: t("nav.sobre") || "Sobre" },
                { href: "/#subscribe", label: t("nav.subscribe") || "Subscrever" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ fontSize: ".6rem", letterSpacing: ".12em", color: "var(--text-dim)", textDecoration: "none", transition: "color .2s", textTransform: "uppercase" as const }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-dim)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <div style={{ fontSize: ".5rem", letterSpacing: ".3em", color: "var(--magenta)", marginBottom: "1.25rem" }}>
              &gt; SYS.STATUS
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: ".75rem" }}>
              {[
                { label: "TRANSMISSAO", val: "ATIVA", col: "var(--cyan)" },
                { label: "FREQ", val: "SEMANAL", col: "var(--text-dim)" },
                { label: "MODO", val: "EDITORIAL", col: "var(--text-dim)" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-dim)", paddingBottom: ".5rem" }}>
                  <span style={{ fontSize: ".5rem", letterSpacing: ".15em", color: "var(--text-dim)" }}>{s.label}</span>
                  <span style={{ fontSize: ".5rem", letterSpacing: ".12em", color: s.col }}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--border-dim)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <span style={{ fontSize: ".5rem", letterSpacing: ".15em", color: "var(--text-dim)" }}>
            // (c) {year} ALMANAQUE_CONTEMPORANEO -- ALL_RIGHTS_RESERVED
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "/privacidade", label: "PRIVACIDADE" },
              { href: "/termos", label: "TERMOS" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: ".48rem", letterSpacing: ".12em", color: "var(--text-dim)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-dim)")}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
