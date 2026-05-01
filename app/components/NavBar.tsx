"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/arquivo", labelKey: "nav.arquivo" },
    { href: "/sobre", labelKey: "nav.sobre" },
    { href: "/comenzar", labelKey: "nav.comenzar" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(243,239,230,0.96)" : "rgba(243,239,230,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(44,41,38,0.1)" : "1px solid transparent",
        transition: "background-color 0.4s, border-color 0.4s",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group flex flex-col leading-none" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-jost)", color: "#4F5B4A", letterSpacing: "0.2em", fontWeight: 400, fontSize: "0.65rem", textTransform: "uppercase" }}>Almanaque</span>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem", fontWeight: 500, color: "#2C2926" }}>Contemporâneo</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-jost)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: pathname === l.href ? "#4F5B4A" : "#4A433D", textDecoration: "none" }}>
                {t(l.labelKey)}
              </Link>
            ))}
            <Link href="/suscribirse" style={{ padding: "0.45rem 1.2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
              {t("nav.receber")}
            </Link>
            <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.65, background: "none", border: "1px solid rgba(44,41,38,0.25)", padding: "0.3rem 0.6rem", cursor: "pointer" }}>
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.65, background: "none", border: "1px solid rgba(44,41,38,0.25)", padding: "0.25rem 0.5rem", cursor: "pointer" }}>{lang === "pt" ? "EN" : "PT"}</button>
            <button className="flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
              <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
              <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-6 pt-2" style={{ borderTop: "1px solid rgba(44,41,38,0.1)" }}>
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((l) => (<Link className="md:hidden" key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "#4A433D", textDecoration: "none", fontFamily: "var(--font-jost)" }}>{t(l.labelKey)}</Link>))}
              <Link href="/suscribirse" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 1.4rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", textDecoration: "none", alignSelf: "flex-start", fontFamily: "var(--font-jost)" }}>{t("nav.receber")}</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
