"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const ano = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="mt-32 pb-12" style={{ borderTop: "1px solid rgba(44,41,38,0.12)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#2C2926", marginBottom: "1rem" }}>Almanaque Contemporâneo</div>
            <p style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "0.8rem", color: "#4A433D", maxWidth: "320px", lineHeight: "1.7", fontWeight: 300 }}>{t("manifesto.body")}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <nav className="flex gap-6">
              {[["/arquivo", "nav.arquivo"],["/sobre", "nav.sobre"],["/comenzar", "nav.comenzar"],["/suscribirse", "nav.receber"]].map(([href, key]) => (
                <Link key={href} href={href} style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", color: "#4A433D", textDecoration: "none" }}>{t(key)}</Link>
              ))}
            </nav>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.6, fontWeight: 300 }}>© {ano} Almanaque Contemporâneo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
