"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";

export default function GraciasPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const { t } = useLanguage();
  return (
    <>
      <NavBar />
      <main>
        <div className="min-h-screen flex flex-col justify-center items-center" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
          <div ref={ref} className="max-w-lg mx-auto px-6 md:px-10 text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)", transition: "opacity 0.9s ease, transform 0.9s ease" }}>
            <div className="flex justify-center mb-12"><div style={{ width: "60px", height: "60px", border: "1px solid rgba(79,91,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#4F5B4A", fontSize: "1.2rem" }}>🌿</span></div></div>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>{t("gracias.label")}</p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#2C2926", marginBottom: "2rem", letterSpacing: "-0.02em" }}>{t("gracias.title1")}<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>{t("gracias.title2")}</span></h1>
            <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(79,91,74,0.4)", margin: "0 auto 2rem" }} />
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85", marginBottom: "1.5rem" }}>{t("gracias.body1")}</p>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#4F5B4A", lineHeight: "1.7", marginBottom: "3rem" }}>{t("gracias.body2")}</p>
            <div style={{ backgroundColor: "rgba(79,91,74,0.06)", border: "1px solid rgba(79,91,74,0.15)", padding: "1.75rem 2rem", marginBottom: "3rem" }}><p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#2C2926", lineHeight: "1.65" }}>&ldquo;{t("gracias.note")}&rdquo;</p></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>{t("gracias.link1")}</Link>
              <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.6rem" }}>—</span>
              <Link href="/comenzar" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A433D", textDecoration: "none", fontWeight: 400, opacity: 0.7 }}>{t("gracias.link2")}</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
