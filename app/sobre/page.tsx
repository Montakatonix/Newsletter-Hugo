"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>{children}</div>
  );
}

export default function SobrePage() {
  const { t } = useLanguage();
  const stats = [{l: "sobre.stat1l",v: "sobre.stat1v",d: "sobre.stat1d"},{l: "sobre.stat2l",v: "sobre.stat2v",d: "sobre.stat2d"},{l: "sobre.stat3l",v: "sobre.stat3v",d: "sobre.stat3d"},{l: "sobre.stat4l",v: "sobre.stat4v",d: "sobre.stat4d"},{l: "sobre.stat5l",v: "sobre.stat5v",d: "sobre.stat5d"}];
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
          <Section>
            <div className="mb-16">
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.25rem" }}>{t("sobre.label")}</p>
              <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.0, color: "#2C2926", letterSpacing: "-0.02em" }}>{t("sobre.title1")}<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>{t("sobre.title2")}</span></h1>
            </div>
          </Section>
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <Section delay={100}>
                <div className="prose-editorial">
                  <p>{t("sobre.p1")}</p><p>{t("sobre.p2")}</p>
                  <h2>{t("sobre.h2a")}</h2><p>{t("sobre.pa")}</p>
                  <h2>{t("sobre.h2b")}</h2><p>{t("sobre.pb")}</p>
                  <h2>{t("sobre.h2c")}</h2><p>{t("sobre.pc")}</p>
                  <h2>{t("sobre.h2d")}</h2><p>{t("sobre.pd")}</p>
                </div>
                <div className="mt-12">
                  <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>{t("sobre.cta")}</Link>
                </div>
              </Section>
            </div>
            <div className="md:col-span-5">
              <Section delay={200}>
                <div style={{ position: "sticky", top: "8rem", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {stats.map((item, i) => (
                    <div key={i} style={{ backgroundColor: "rgba(44,41,38,0.03)", border: "1px solid rgba(44,41,38,0.08)", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                      <div><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.6, fontWeight: 400, marginBottom: "0.15rem" }}>{t(item.l)}</p><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", color: "#2C2926", fontWeight: 400 }}>{t(item.v)}</p></div>
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.5, fontWeight: 300, textAlign: "right", flexShrink: 0 }}>{t(item.d)}</p>
                    </div>
                  ))}
                  <div style={{ marginTop: "1.5rem", padding: "1.75rem", backgroundColor: "rgba(79,91,74,0.07)", border: "1px solid rgba(79,91,74,0.15)" }}>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#2C2926", lineHeight: "1.65" }}>&ldquo;{t("sobre.pull")}&rdquo;</p>
                    <span style={{ display: "block", color: "#4F5B4A", marginTop: "1rem", opacity: 0.5 }}>🌿</span>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
