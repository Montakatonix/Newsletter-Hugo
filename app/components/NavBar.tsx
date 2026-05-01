"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/arquivo", label: "Arquivo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/comenzar", label: "Começar" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(243,239,230,0.92)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group flex flex-col leading-none" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", color: "#4F5B4A", letterSpacing: "0.2em", fontWeight: 400, fontSize: "0.7rem", textTransform: "uppercase" }}>
              Almanaque
            </span>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem", fontWeight: 500, color: "#2C2926", letterSpacing: "-0.01em" }}>
              Contemporâneo
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, color: pathname === link.href ? "#4F5B4A" : "#4A433D", textDecoration: "none", borderBottom: pathname === link.href ? "1px solid #4F5B4A" : "none", paddingBottom: "2px" }}>
                {link.label}
              </Link>
            ))}
            <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.45rem 1.2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>
              Receber
            </Link>
          </nav>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-5 h-px" style={{ backgroundColor: "#2C2926", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none", transition: "all 0.3s" }} />
            <span className="block w-5 h-px" style={{ backgroundColor: "#2C2926", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span className="block w-5 h-px" style={{ backgroundColor: "#2C2926", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none", transition: "all 0.3s" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t" style={{ borderColor: "rgba(44,41,38,0.1)" }}>
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, color: "#4A433D", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
              <Link href="/suscribirse" onClick={() => setMenuOpen(false)} style={{ display: "inline-block", padding: "0.6rem 1.4rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none", alignSelf: "flex-start" }}>
                Receber o Almanaque
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
