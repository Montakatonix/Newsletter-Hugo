"use client";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useLanguage } from "@/app/context/LanguageContext";

const cartasEssenciais = cartas.filter((c) => ["oportunidade-revela","problema-vs-inconveniencia","o-que-esta-oculto"].includes(c.slug));

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>{children}</div>;
}

export default function ComenzarPage() {
  const { t } = useLanguage();
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
          <Section>
            <div className="mb-16" style={{ maxWidth: "680px" }}>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.25rem" }}>{t("comenzar.label")}</p>
              <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, color: "#2C2926", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>{t("comenzar.title1")}<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>{t("comenzar.title2")}</span></h1>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85" }}>{t("comenzar.desc")}</p>
            </div>
          </Section>
          <Section delay={100}>
            <div className="mb-20" style={{ borderTop: "1px solid rgba(44,41,38,0.1)", borderBottom: "1px solid rgba(44,41,38,0.1)", backgroundColor: "rgba(79,91,74,0.04)", padding: "3rem 0" }}>
              <div style={{ maxWidth: "680px" }}>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>{t("comenzar.how")}</p>
                <div className="flex flex-col gap-6">
                  {[{num: "01",t: "comenzar.step1t",b: "comenzar.step1b"},{num: "02",t: "comenzar.step2t",b: "comenzar.step2b"},{num: "03",t: "comenzar.step3t",b: "comenzar.step3b"}].map((item) => (
                    <div key={item.num} className="flex items-start gap-5">
                      <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 300, color: "#4F5B4A", opacity: 0.5, flexShrink: 0, lineHeight: 1 }}>{item.num}</span>
                      <div><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", fontWeight: 500, color: "#2C2926", marginBottom: "0.25rem" }}>{t(item.t)}</p><p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.7" }}>{t(item.b)}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
          <Section delay={200}>
            <div className="mb-20">
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>{t("comenzar.essential")}</p>
              <div>{cartasEssenciais.map((carta, i) => (<CartaCard key={carta.slug} carta={carta} variant="list" delay={i * 80} />))}</div>
              <div className="mt-8"><Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>{t("comenzar.verArquivo")}</Link></div>
            </div>
          </Section>
          <Section delay={300}>
            <div style={{ borderTop: "1px solid rgba(44,41,38,0.1)", paddingTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontStyle: "italic", color: "#4A433D" }}>{t("comenzar.ready")}</p>
              <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>{t("comenzar.cta")}</Link>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
