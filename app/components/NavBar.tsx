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
            <span style={{ fontFamily: "var(--font-jost), sans-serif", color: "#4F5B4A", letterSpacing: "0.2em", fontWeight: 400 }}>Almanaque</span>
            <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem", fontWeight: 500, color: "#2C2926" }}>Contemporâneo</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (<Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-jost)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: pathname === l.href ? "#4F5B4A" : "#4A433D", textDecoration: "none" }}>{l.label}</Link>))}
            <Link href="/suscribirse" style={{ padding: "0.45rem 1.2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>Receber</Link>
          </nav>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926" }} />
            <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1px", backgroundColor: "#2C2926" }} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t" style={{ borderColor: "rgba(44,41,38,0.1)" }}>
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((l) => (<Link href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "#4A433D", textDecoration: "none", fontFamily: "var(--font-jost)" }}>{l.label}</Link>))}
              <Link href="/suscribirse" onClick={() => setMenuOpen(false)} style={{ padding: "0.6rem 1.4rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", textDecoration: "none", alignSelf: "flex-start", fontFamily: "var(--font-jost)" }}>Receber o Almanaque</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
