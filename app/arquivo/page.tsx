"use client";

import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import { cartas } from "@/app/data/cartas";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ArquivoPage() {
  const cartasOrdenadas = [...cartas].reverse();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const { t } = useLanguage();
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
          <div ref={ref} className="mb-16" style={{ borderBottom: "1px solid rgba(44,41,38,0.1)", paddingBottom: "3rem", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
            <div className="flex items-baseline justify-between">
              <div>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1rem" }}>{t("arquivo.label")}</p>
                <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.0, color: "#2C2926", letterSpacing: "-0.02em" }}>{t("arquivo.title1")}<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>{t("arquivo.title2")}</span></h1>
              </div>
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "5rem", fontWeight: 300, color: "#4F5B4A", opacity: 0.15, lineHeight: 1 }}>{cartas.length}</span>
            </div>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.75", marginTop: "1.5rem", maxWidth: "480px" }}>{t("arquivo.desc")}</p>
          </div>
          <div>{cartasOrdenadas.map((carta, i) => (<CartaCard key={carta.slug} carta={carta} variant="list" delay={i * 50} />))}</div>
          <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(44,41,38,0.08)", display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(44,41,38,0.08)" }} />
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem", fontStyle: "italic", color: "#4A433D", opacity: 0.6 }}>{cartas.length} {t("arquivo.footer")}</p>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(44,41,38,0.08)" }} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
