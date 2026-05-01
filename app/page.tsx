"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import NewsletterForm from "@/app/components/NewsletterForm";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";
import { useScrollReveal, useParallax } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>{children}</div>
  );
}

export default function HomePage() {
  const ultimasCartas = [...cartas].reverse().slice(0, 3);
  const cartaDestaque = ultimasCartas[0];
  const parallaxRef = useParallax(0.15);
  const { t } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05, rootMargin: "0px" });

  return (
    <>
      <NavBar />
      <main>
        <section className="min-h-screen flex flex-col justify-center overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "6rem", position: "relative" }}>
          <div ref={parallaxRef} style={{ position: "absolute", top: "10%", right: "-5%", width: "55vw", height: "55vw", maxWidth: "600px", maxHeight: "600px", borderRadius: "50%", background: "radial-gradient(ellipse at 40% 40%, rgba(79,91,74,0.06) 0%, rgba(79,91,74,0.02) 60%, transparent 80%)", pointerEvents: "none" }} />
          <div className="max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p ref={heroRef� className="mb-8" style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.8s ease 100ms, transform 0.8s ease 100ms" }}>{t("hero.label")}</p>
                <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#2C2926", marginBottom: "2rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms" }}>Almanaque<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>Contemporâneo</span></h1>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "1.0625rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.8", maxWidth: "480px", marginBottom: "1.5rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 300ms, transform 0.9s ease 300ms" }}>{t("manifesto.body")}</p>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontStyle: "italic", color: "#4F5B4A", marginBottom: "2.5rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 400ms, transform 0.9s ease 400ms" }}>{t("hero.quote")}</p>
                <div style={{ maxWidth: "440px", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 500ms, transform 0.9s ease 500ms" }}>
                  <NewsletterForm variant="minimal" ctaLabelKey="hero.cta" placeholderKey="hero.placeholder" />
                  <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.55, marginTop: "0.75rem", fontWeight: 300 }}>{t("hero.sub")}</p>
                </div>
              </div>
              <div className="hidden md:flex md:col-span-5 items-center justify-center" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "perspective(1000px) rotateY(0deg)" : "perspective(1000px) rotateY(-12deg)", transition: "opacity 1.2s ease 600ms, transform 1.2s ease 600ms" }}>
                <div style={{ width: "100%", aspectRatio: "3/4", backgroundColor: "rgba(79,91,74,0.07)", border: "1px solid rgba(79,91,74,0.15)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", padding: "3rem", position: "relative", transformStyle: "preserve-3d" }}>
                  <div style={{ position: "absolute", inset: "8px", border: "1px solid rgba(79,91,74,0.08)", pointerEvents: "none" }} />
                  <div style={{ width: "40px", height: "1px", backgroundColor: "#4F5B4A", opacity: 0.4 }} />
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#2C2926", textAlign: "center", lineHeight: "1.7" }}>{t("hero.visual1")}<br />{t("hero.visual2")}<br /><br />{t("hero.visual3")}<br />{t("hero.visual4")}</p>
                  <div style={{ width: "40px", height: "1px", backgroundColor: "#4F5B4A", opacity: 0.4 }} />
                  <span style={{ color: "#4F5B4A", opacity: 0.5, fontSize: "0.9rem" }}>🌿</pnan>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)", borderBottom: "1px solid rgba(44,41,38,0.1)", backgroundColor: "rgba(79,91,74,0.04)" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <Section>
              <div style={{ maxWidth: "680px", margin: "0 auto" }}>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "2rem" }}>{t("manifesto.label")}</p>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 400, lineHeight: "1.55", color: "#2C2926", marginBottom: "1.5rem" }}>{t("manifesto.heading")}</p>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85", marginBottom: "1rem" }}>{t("manifesto.body")}</p>
                <div className="mt-8"><Link href="/sobre" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>{t("manifesto.link")}</Link></div>
              </div>
            </Section>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Section><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>{t("section.ultimaCarta")}</p></Section>
          <CartaCard carta={cartaDestaque} variant="featured" delay={100} />
        </section>
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)" }} className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Section><div className="flex items-baseline justify-between mb-10"><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>{t("section.arquivo")}</p><Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A433D", opacity: 0.7, textDecoration: "none", fontWeight: 300 }}>{t("section.verTodas")}</Link></div></Section>
          <div>{ultimasCartas.slice(1).map((carta, i) => (<CartaCard key={carta.slug} carta={carta} variant="list" delay={i * 80} />))}</div>
        </section>
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)", backgroundColor: "#4F5B4A" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <Section>
              <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(243,239,230,0.6)", fontWeight: 400, marginBottom: "1.5rem" }}>Subscrever</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#F3EFE6", lineHeight: 1.2, marginBottom: "1.5rem", whiteSpace: "pre-line" }}>{t("cta.heading")}</h2>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9rem", fontWeight: 300, color: "rgba(243,239,230,0.75)", lineHeight: "1.75", marginBottom: "2.5rem" }}>{t("cta.body")}</p>
                <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#F3EFE6", color: "#2C2926", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>{t("cta.btn")}</Link>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
