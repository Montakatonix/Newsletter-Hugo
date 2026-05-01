"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
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
        backgroundColor: scrolled ? "rgba(243,239,230,0.97)" : "rgba(243,239,230,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(44,41,38,0.1)" : "1px solid transparent",
        transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        boxShadow: scrolled ? "0 2px 24px rgba(44,41,38,0.06)" : "none",
      }}
    >
      {/* Progress bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        height: "1.5px",
        width: `${scrollProgress}%`,
        backgroundColor: "#4F5B4A",
        transition: "width 0.15s ease",
        opacity: 0.6,
      }} />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", flexDirection: "column", lineHeight: 1,
              transform: scrolled ? "scale(0.95)" : "scale(1)",
              transformOrigin: "left center",
              transition: "transform 0.4s ease",
            }}>
              <span style={{ fontFamily: "var(--font-jost)", color: "#4F5B4A", letterSpacing: "0.22em", fontWeight: 400, fontSize: "0.62rem", textTransform: "uppercase" }}>Almanaque</span>
              <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.1rem", fontWeight: 500, color: "#2C2926" }}>Contemporâneo</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="anim-underline" style={{ fontFamily: "var(--font-jost)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: pathname === l.href ? "#4F5B4A" : "#4A433D", textDecoration: "none", fontWeight: 400, opacity: pathname === l.href ? 1 : 0.75, transition: "opacity 0.2s ease, color 0.2s ease" }}>
                {t(l.labelKey)}
              </Link>
            ))}
            <Link href="/suscribirse" className="btn-animated" style={{ padding: "0.45rem 1.25rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", fontWeight: 400 }}>
              {t("nav.receber")}
            </Link>
            <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.55, background: "none", border: "1px solid rgba(44,41,38,0.2)", padding: "0.28rem 0.6rem", cursor: "pointer", transition: "opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease" }} onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.backgroundColor = "rgba(79,91,74,0.06)"; }} onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "0.55"; (e.target as HTMLElement).style.backgroundColor = "transparent"; }}>
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.6, background: "none", border: "1px solid rgba(44,41,38,0.2)", padding: "0.25rem 0.5rem", cursor: "pointer" }}>{lang === "pt" ? "EN" : "PT"}</button>
            <button className="flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "#2C2926", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "#2C2926", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s ease" }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "#2C2926", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-2" style={{ borderTop: "1px solid rgba(44,41,38,0.1)", animation: "fadeUp 0.3s cubic-bezier(.22,1,.36,1) both" }}>
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "#4A433D", textDecoration: "none", fontFamily: "var(--font-jost)", fontSize: "0.9rem" }}>{t(l.labelKey)}</Link>
              ))}
              <Link href="/suscribirse" onClick={() => setMenuOpen(false)} style={{ padding: "0.65rem 1.4rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", textDecoration: "none", alignSelf: "flex-start", fontFamily: "var(--font-jost)", fontSize: "0.8rem" }}>{t("nav.receber")}</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
