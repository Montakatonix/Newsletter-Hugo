"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import NewsletterForm from "@/app/components/NewsletterForm";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";
import { useScrollReveal, useParallax } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useState } from "react";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

function Particles() {
  const ps = [
    { s: 6, l: "12%", d: "0s", dur: "9s", top: "70%" },
    { s: 4, l: "25%", d: "2s", dur: "12s", top: "60%" },
    { s: 8, l: "68%", d: "1s", dur: "10s", top: "75%" },
    { s: 5, l: "80%", d: "3.5s", dur: "8s", top: "65%" },
    { s: 3, l: "45%", d: "0.5s", dur: "11s", top: "80%" },
    { s: 7, l: "90%", d: "4s", dur: "14s", top: "55%" },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {ps.map((p, i) => (
        <div key={i} className="particle" style={{ width: p.s, height: p.s, left: p.l, top: p.top, animationDelay: p.d, animationDuration: p.dur }} />
      ))}
    </div>
  );
}

function AnimatedNumber({ target, visible }: { target: number; visible: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let v = 0;
    const inc = target / 75;
    const t = setInterval(() => {
      v += inc;
      if (v >= target) { setN(target); clearInterval(t); } else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [visible, target]);
  return <>{n}</>;
}

export default function HomePage() {
  const ultimasCartas = [...cartas].reverse().slice(0, 3);
  const cartaDestaque = ultimasCartas[0];
  const parallaxRef = useParallax(0.12);
  const { t } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: "0px" });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [showScroll, setShowScroll] = useState(true);
  useEffect(() => {
    const fn = () => setShowScroll(window.scrollY < 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const hv = heroVisible;
  return (
    <>
      <NavBar />
      <main>
        <section className="min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "6rem", position: "relative" }}>
          <div ref={parallaxRef} className="anim-orb" style={{ position: "absolute", top: "8%", right: "-8%", width: "62vw", height: "62vw", maxWidth: "680px", maxHeight: "680px", borderRadius: "50%", background: "radial-gradient(ellipse at 40% 40%, rgba(79,91,74,0.08) 0%, rgba(79,91,74,0.03) 60%, transparent 80%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: "40vw", height: "40vw", maxWidth: "400px", maxHeight: "400px", borderRadius: "50%", background: "radial-gradient(ellipse at 60% 60%, rgba(176,110,79,0.05) 0%, transparent 70%)", pointerEvents: "none", animation: "orbPulse 8s ease-in-out infinite reverse" }} />
          <Particles />
          <div className="max-w-5xl mx-auto px-6 md:px-10 w-full" style={{ position: "relative", zIndex: 1 }}>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div ref={heroRef} className="pill-anim inline-flex items-center gap-2 mb-8" style={{ opacity: hv ? 1 : 0, border: "1px solid rgba(79,91,74,0.25)", padding: "0.3rem 0.9rem", display: "inline-flex", transition: "opacity 0.6s ease 100ms" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4F5B4A", animation: "pulse-soft 2s ease-in-out infinite", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>{t("hero.label")}</span>
                </div>
                <h1 className="shimmer-text" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3.2rem, 8vw, 6rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.025em", marginBottom: "0.5rem", opacity: hv ? 1 : 0, transform: hv ? "translateY(0)" : "translateY(30px)", transition: "opacity 1s cubic-bezier(.22,1,.36,1) 200ms, transform 1s cubic-bezier(.22,1,.36,1) 200ms" }}>Almanaque</h1>
                <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(3.2rem, 8vw, 6rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.025em", fontStyle: "italic", color: "#4F5B4A", marginBottom: "2rem", opacity: hv ? 1 : 0, transform: hv ? "translateY(0)" : "translateY(30px)", transition: "opacity 1s cubic-bezier(.22,1,.36,1) 320ms, transform 1s cubic-bezier(.22,1,.36,1) 320ms" }}>Contemporâneo</h1>
                <div style={{ width: "48px", height: "2px", backgroundColor: "#4F5B4A", marginBottom: "1.75rem", opacity: hv ? 1 : 0, transformOrigin: "left", transform: hv ? "scaleX(1)" : "scaleX(0)", transition: "transform 1s cubic-bezier(.22,1,.36,1) 450ms, opacity 0.5s ease 450ms" }} />
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "1.0625rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85", maxWidth: "460px", marginBottom: "1.5rem", opacity: hv ? 1 : 0, transform: hv ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 500ms, transform 0.9s ease 500ms" }}>{t("manifesto.body")}</p>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontStyle: "italic", color: "#4F5B4A", marginBottom: "2.5rem", opacity: hv ? 1 : 0, transform: hv ? "translateX(0)" : "translateX(-16px)", transition: "opacity 0.9s ease 620ms, transform 0.9s ease 620ms" }}>{t("hero.quote")}</p>
                <div style={{ maxWidth: "440px", opacity: hv ? 1 : 0, transform: hv ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 740ms, transform 0.9s ease 740ms" }}><NewsletterForm variant="minimal" ctaLabelKey="hero.cta" placeholderKey="hero.placeholder" /><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.5, marginTop: "0.75rem", fontWeight: 300 }}>{t("hero.sub")}</p></div>
              </div>
              <div className="hidden md:flex md:col-span-5 items-center justify-center" style={{ opacity: hv ? 1 : 0, transform: hv ? "perspective(1000px) rotateY(0deg) translateY(0)" : "perspective(1000px) rotateY(-18deg) translateY(30px)", transition: "opacity 1.4s cubic-bezier(.22,1,.36,1) 800ms, transform 1.4s cubic-bezier(.22,1,.36,1) 800ms" }}><div className="anim-float-slow" style={{ width: "100%", aspectRatio: "3/4", backgroundColor: "rgba(79,91,74,0.06)", border: "1px solid rgba(79,91,74,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.75rem", padding: "3rem", position: "relative", transformStyle: "preserve-3d" }}><div style={{ position: "absolute", inset: "8px", border: "1px solid rgba(79,91,74,0.1)", pointerEvents: "none" }} /><div style={{ position: "absolute", inset: "16px", border: "1px solid rgba(79,91,74,0.05)", pointerEvents: "none" }} /><div style={{ width: "32px", height: "1px", backgroundColor: "#4F5B4A", opacity: 0.5 }} /><p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontStyle: "italic", color: "#2C2926", textAlign: "center", lineHeight: "1.75" }}>{t("hero.visual1")}<br />{t("hero.visual2")}<br /><br />{t("hero.visual3")}<br />{t("hero.visual4")}</p><div style={{ width: "32px", height: "1px", backgroundColor: "#4F5B4A", opacity: 0.5 }} /></div></div>
            </div>
          </div>
          {showScroll && (<div className="scroll-indicator" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: 0.4 }}><div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(44,41,38,0), rgba(44,41,38,0.6))" }} /><div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#2C2926" }} /></div>)}
        </section>
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.08)", borderBottom: "1px solid rgba(44,41,38,0.08)", backgroundColor: "rgba(79,91,74,0.03)" }}><div ref={statsRef} className="max-w-5xl mx-auto px-6 md:px-10 py-8"><div className="grid grid-cols-3 gap-6 md:gap-12" style={{ textAlign: "center" }}>{[{ label: "Cartas", value: cartas.length }, { label: "Min leitura", value: 7 }, { label: "Semanas", value: cartas.length }].map((stat, i) => (<div key={i} style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms` }}><div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#2C2926", lineHeight: 1, marginBottom: "0.35rem" }}><AnimatedNumber target={stat.value} visible={statsVisible} /></div><div style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, opacity: 0.7 }}>{stat.label}</div></div>))}</div></div></section><section style={{ borderBottom: "1px solid rgba(44,41,38,0.08)", backgroundColor: "rgba(79,91,74,0.025)" }}><div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"><Section><div style={{ maxWidth: "680px", margin: "0 auto" }}><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "2.5rem" }}>{t("manifesto.label")}</p><p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)", fontWeight: 400, lineHeight: "1.5", color: "#2C2926", marginBottom: "1.5rem" }}>{t("manifesto.heading")}</p><p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.9", marginBottom: "2rem" }}>{t("manifesto.body")}</p><div className="divider-anim" style={{ marginBottom: "1.75rem" }} /><Link href="/sobre" className="anim-underline btn-animated" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", fontWeight: 400, padding: "0.5rem 1.25rem", border: "1px solid rgba(79,91,74,0.3)" }}>{t("manifesto.link")}<span style={{ fontSize: "0.8rem" }}>→</span></Link></div></Section></div></section><section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"><Section><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.75rem" }}>{t("section.ultimaCarta")}</p></Section><CartaCard carta={cartaDestaque} variant="featured" delay={100} /></section><section style={{ borderTop: "1px solid rgba(44,41,38,0.08)" }} className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28"><Section><div className="flex items-baseline justify-between mb-10"><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>{t("section.arquivo")}</p><Link href="/arquivo" className="anim-underline" style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A433D", opacity: 0.65, textDecoration: "none", fontWeight: 300 }}>{t("section.verTodas")}</Link></div></Section><div>{ultimasCartas.slice(1).map((carta, i) => (<CartaCard key={carta.slug} carta={carta} variant="list" delay={i * 100} />))}</div></section><section style={{ borderTop: "1px solid rgba(44,41,38,0.08)", backgroundColor: "#4F5B4A", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", top: "-30%", right: "-10%", width: "60%", height: "200%", background: "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} /><div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32" style={{ position: "relative" }}><Section><div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}><div style={{ width: "40px", height: "1px", backgroundColor: "rgba(243,239,230,0.3)", margin: "0 auto 2rem" }} /><h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 400, fontStyle: "italic", color: "#F3EFE6", lineHeight: 1.15, marginBottom: "1.5rem", whiteSpace: "pre-line" }}>{t("cta.heading")}</h2><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", fontWeight: 300, color: "rgba(243,239,230,0.7)", lineHeight: "1.85", marginBottom: "2.5rem" }}>{t("cta.body")}</p><Link href="/suscribirse" className="btn-animated anim-pulse-soft" style={{ display: "inline-block", padding: "0.95rem 2.5rem", backgroundColor: "#F3EFE6", color: "#2C2926", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>{t("cta.btn")}</Link><div style={{ width: "40px", height: "1px", backgroundColor: "rgba(243,239,230,0.3)", margin: "2rem auto 0" }} /></div></Section></div></section></main><Footer /></>
  );
}
