"use client";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";

export default function NavBar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick(v => v + 1), 1200);
    return () => clearInterval(id);
  }, []);

  const blink = tick % 2 === 0;

  const navLinks = [
    { href: "/arquivo", label: t("nav.arquivo") || "ARQUIVO" },
    { href: "/sobre", label: t("nav.sobre") || "SOBRE" },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background .3s, border-color .3s;
        }
        .navbar.scrolled {
          background: rgba(3,7,18,.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 clamp(1.5rem,5vw,5rem);
          height: 64px;
        }
        .nav-logo {
          display: flex; align-items: center; gap: .75rem;
          text-decoration: none;
        }
        .nav-logo-text {
          font-size: .72rem; font-weight: 700;
          letter-spacing: .2em; color: #fff;
          text-transform: uppercase;
        }
        .nav-logo-sub {
          font-size: .5rem; letter-spacing: .15em;
          color: var(--cyan); opacity: .7;
          font-weight: 400;
        }
        .nav-links {
          display: flex; align-items: center; gap: 2.5rem;
        }
        .nav-link {
          font-size: .58rem; letter-spacing: .2em;
          color: rgba(226,232,240,.55);
          text-transform: uppercase; text-decoration: none;
          transition: color .2s; position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: var(--cyan);
          transition: width .3s;
        }
        .nav-link:hover { color: var(--cyan); }
        .nav-link:hover::after { width: 100%; }
        .nav-lang {
          font-size: .55rem; letter-spacing: .18em;
          background: transparent; border: 1px solid var(--border);
          color: rgba(226,232,240,.45); cursor: pointer;
          padding: .3rem .7rem;
          clip-path: polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%);
          transition: all .2s; font-family: var(--font-mono);
        }
        .nav-lang:hover { border-color: var(--cyan); color: var(--cyan); }
        .nav-right { display: flex; align-items: center; gap: 1.5rem; }
        .nav-cta {
          font-size: .58rem; letter-spacing: .18em;
          padding: .45rem 1.2rem;
          background: transparent; border: 1px solid var(--cyan);
          color: var(--cyan); text-decoration: none;
          clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
          transition: all .2s; text-transform: uppercase;
          white-space: nowrap;
        }
        .nav-cta:hover { background: rgba(0,255,229,.1); box-shadow: 0 0 16px rgba(0,255,229,.25); }
        .scan-line {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--cyan), var(--magenta), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .navbar.scrolled .scan-line { opacity: 1; }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 8px;
        }
        .hamburger span {
          display: block; width: 20px; height: 1px;
          background: var(--cyan); transition: all .3s;
        }
        .mobile-menu {
          display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
          background: rgba(3,7,18,.97); backdrop-filter: blur(20px);
          z-index: 99; flex-direction: column; align-items: center;
          justify-content: center; gap: 2.5rem;
          border-top: 1px solid var(--border);
        }
        .mobile-menu.open { display: flex; }
        .mobile-link {
          font-size: 1.2rem; letter-spacing: .25em; color: var(--text);
          text-transform: uppercase; text-decoration: none;
          transition: color .2s;
        }
        .mobile-link:hover { color: var(--cyan); }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`} style={{ position: "fixed" }}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div style={{ display: "flex", flexDirection: "column" as const }}>
              <span className="nav-logo-text">
                ALMANAQUE
              </span>
              <span className="nav-logo-sub">
                CONTEMP.&nbsp;
                <span style={{ display: "inline-block", width: 6, height: 6, background: "var(--cyan)", borderRadius: "50%", verticalAlign: "middle", boxShadow: "0 0 6px var(--cyan)", opacity: blink ? 1 : 0.2, transition: "opacity .1s" }} />
              </span>
            </div>
          </Link>

          <div className="nav-links">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>

          <div className="nav-right">
            <button className="nav-lang" onClick={() => setLanguage(language === "pt" ? "es" : "pt")}>
              {language === "pt" ? "ES" : "PT"}
            </button>
            <Link href="/#subscribe" className="nav-cta">
              {t("nav.subscribe") || "SUBSCREVER"}
            </Link>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </button>
        </div>
        <div className="scan-line" />

        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <button className="nav-lang" onClick={() => setLanguage(language === "pt" ? "es" : "pt")}>
            {language === "pt" ? "ES" : "PT"}
          </button>
          <Link href="/#subscribe" className="hb" onClick={() => setMenuOpen(false)}>
            {t("nav.subscribe") || "SUBSCREVER"}
          </Link>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 64 }} />
    </>
  );
}
