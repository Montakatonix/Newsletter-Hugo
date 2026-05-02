"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import NewsletterForm from "@/app/components/NewsletterForm";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function HomePage() {
  const ultimasCartas = [...cartas].reverse().slice(0, 3);
  const cartaDestaque = ultimasCartas[0];
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const { ref: statsRef, visible: statsVisible } = useInView(0.3);

  useEffect(() => {
    if (!statsVisible) return;
    let v = 0;
    const target = cartas.length;
    const interval = setInterval(() => {
      v += 1;
      setCount(v);
      if (v >= target) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [statsVisible]);

  return (
    <>
      <NavBar />
      <main style={{ background: "#F2EDE6", minHeight: "100vh" }}>

        {/* HERO */}
        <section style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Left black block */}
          <div style={{
            background: "#1A1A18",
            padding: "clamp(3rem,6vw,7rem) clamp(2rem,4vw,5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
          }}>
            {/* Top label */}
            <div style={{ position: "absolute", top: "clamp(2rem,4vw,4rem)", left: "clamp(2rem,4vw,5rem)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4A853" }} />
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)" }}>Newsletter Editorial</span>
            </div>

            {/* Ghost number */}
            <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(8rem,18vw,18rem)", fontWeight: 300, lineHeight: 0.85, color: "rgba(255,255,255,0.05)", position: "absolute", bottom: "-1.5rem", right: "-0.5rem", userSelect: "none" as const, pointerEvents: "none" }}>
              {String(cartas.length).padStart(2, "0")}
            </div>

            {/* Title */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <h1 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(3.5rem,7vw,7rem)", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.03em", color: "#F2EDE6", marginBottom: "2rem" }}>
                Alma<br /><em style={{ color: "#D4A853", fontStyle: "italic" }}>naque</em>
              </h1>
              <div style={{ width: 40, height: 2, background: "#D4A853", marginBottom: "1.5rem" }} />
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "clamp(0.85rem,1.2vw,1rem)", fontWeight: 300, color: "rgba(242,237,230,0.6)", lineHeight: 1.8, maxWidth: 340 }}>{t("manifesto.body")}</p>
            </div>
          </div>

          {/* Right cream block */}
          <div style={{ background: "#F2EDE6", padding: "clamp(3rem,6vw,7rem) clamp(2rem,4vw,5rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#4F5B4A" }}>Contemporaneo</span>
              <span style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "0.9rem", color: "#9A8F7E", fontStyle: "italic" }}>Vol. I</span>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(1.6rem,3.5vw,3rem)", fontWeight: 400, lineHeight: 1.2, color: "#1A1A18", marginBottom: "3rem", letterSpacing: "-0.02em" }}>{t("hero.quote")}</p>
              <div style={{ maxWidth: 380 }}>
                <NewsletterForm variant="minimal" ctaLabelKey="hero.cta" placeholderKey="hero.placeholder" />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", color: "#9A8F7E", marginTop: "0.75rem", fontWeight: 300 }}>{t("hero.sub")}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#9A8F7E" }}>Scroll</span>
              <div style={{ flex: 1, height: 1, background: "rgba(154,143,126,0.3)" }} />
              <span style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "0.85rem", color: "#9A8F7E", fontStyle: "italic" }}>↓</span>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div style={{ background: "#D4A853", overflow: "hidden", padding: "0.85rem 0" }}>
          <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
          <div style={{ display: "flex", gap: "4rem", animation: "ticker 18s linear infinite", whiteSpace: "nowrap" as const, width: "max-content" }}>
            {[...Array(8)].map((_, i) => (
              <span key={i} style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "0.85rem", fontStyle: "italic", color: "#1A1A18", letterSpacing: "0.05em" }}>
                Almanaque Contemporaneo &nbsp;&middot;&nbsp; Newsletter Editorial &nbsp;&middot;&nbsp; Pensamento Critico &nbsp;&middot;&nbsp; Cultura Portuguesa &nbsp;&middot;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <section ref={statsRef} style={{ background: "#1A1A18", padding: "clamp(4rem,8vw,8rem) clamp(2rem,6vw,8rem)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { n: statsVisible ? count : 0, suffix: "", label: "Cartas publicadas" },
              { n: 7, suffix: "min", label: "Leitura media" },
              { n: statsVisible ? count : 0, suffix: "", label: "Semanas de cultura" },
            ].map((stat, i) => (
              <div key={i} style={{ borderRight: "1px solid rgba(255,255,255,0.08)", padding: "3rem 2.5rem", opacity: statsVisible ? 1 : 0, transform: statsVisible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.8s ease ${i*150}ms, transform 0.8s ease ${i*150}ms` }}>
                <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(4rem,7vw,7rem)", fontWeight: 300, lineHeight: 0.85, color: "#F2EDE6", marginBottom: "0.5rem", letterSpacing: "-0.03em" }}>
                  {stat.n}{stat.suffix && <span style={{ fontSize: "0.4em", color: "#D4A853", marginLeft: "0.2em" }}>{stat.suffix}</span>}
                </div>
                <div style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(242,237,230,0.35)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 2fr", minHeight: "70vh" }}>
          <div style={{ background: "#4F5B4A", padding: "clamp(3rem,5vw,6rem) clamp(2rem,3vw,4rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(242,237,230,0.5)" }}>Ultima Carta</span>
            <div style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(5rem,10vw,12rem)", fontWeight: 300, lineHeight: 0.8, color: "rgba(242,237,230,0.12)", letterSpacing: "-0.04em" }}>
              {String(cartaDestaque?.numero || 1).padStart(2, "0")}
            </div>
          </div>
          <div style={{ background: "#F2EDE6" }}>
            <CartaCard carta={cartaDestaque} variant="featured" delay={100} />
          </div>
        </section>

        {/* MANIFESTO */}
        <section style={{ background: "#F2EDE6", padding: "clamp(5rem,10vw,12rem) clamp(2rem,6vw,8rem)", borderTop: "1px solid rgba(26,26,24,0.1)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(3rem,6vw,8rem)", alignItems: "start" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#4F5B4A", paddingTop: "0.5rem" }}>{t("manifesto.label")}</span>
            <div>
              <p style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, lineHeight: 1.15, color: "#1A1A18", marginBottom: "2.5rem", letterSpacing: "-0.025em" }}>{t("manifesto.heading")}</p>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: 1.9, maxWidth: 560, marginBottom: "3rem" }}>{t("manifesto.body")}</p>
              <Link href="/sobre" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#F2EDE6", textDecoration: "none", background: "#1A1A18", padding: "0.9rem 2rem", fontWeight: 500 }}>
                {t("manifesto.link")} <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ARQUIVO LIST */}
        <section style={{ background: "#1A1A18", padding: "clamp(4rem,8vw,8rem) clamp(2rem,6vw,8rem)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem", marginBottom: "0" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(242,237,230,0.4)" }}>{t("section.arquivo")}</span>
            <Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#D4A853", textDecoration: "none" }}>{t("section.verTodas")} &#8594;</Link>
          </div>
          <div>
            {ultimasCartas.slice(1).map((carta, i) => (
              <CartaCard key={carta.slug} carta={carta} variant="list" delay={i * 100} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }}>
          <div style={{ background: "#D4A853", padding: "clamp(4rem,7vw,8rem) clamp(2rem,4vw,5rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "rgba(26,26,24,0.5)" }}>Subscrever</span>
            <div>
              <div style={{ width: 32, height: 2, background: "#1A1A18", marginBottom: "1.5rem", opacity: 0.3 }} />
              <p style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(0.85rem,1.5vw,1.1rem)", fontStyle: "italic", color: "rgba(26,26,24,0.6)", lineHeight: 1.7 }}>{t("cta.body")}</p>
            </div>
          </div>
          <div style={{ background: "#1A1A18", padding: "clamp(4rem,7vw,8rem) clamp(2rem,4vw,5rem)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant),Georgia,serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", fontWeight: 400, fontStyle: "italic", color: "#F2EDE6", lineHeight: 1.1, letterSpacing: "-0.025em", whiteSpace: "pre-line" as const }}>{t("cta.heading")}</h2>
            <NewsletterForm variant="minimal" ctaLabelKey="cta.btn" placeholderKey="hero.placeholder" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
