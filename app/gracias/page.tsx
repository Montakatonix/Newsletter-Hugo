import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bem-vindo ao Almanaque",
  description: "A sua subscrição foi registada.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="min-h-screen flex flex-col justify-center items-center" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
          <div className="max-w-lg mx-auto px-6 md:px-10 text-center">
            <div className="flex justify-center mb-12">
              <div style={{ width: "60px", height: "60px", border: "1px solid rgba(79,91,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#4F5B4A", fontSize: "1.2rem" }}>🜂</span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>Subscrição registada</p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.1, color: "#2C2926", marginBottom: "2rem", letterSpacing: "-0.02em" }}>Agora<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>pousa.</span></h1>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85", marginBottom: "1.5rem" }}>A sua presença aqui foi registada. A primeira carta chegará em breve — nas quartas-feiras, sem pressa.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>Explorar o arquivo</Link>
              <Link href="/comenzar" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A433D", textDecoration: "none", fontWeight: 400, opacity: 0.7 }}>Por onde começar →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
