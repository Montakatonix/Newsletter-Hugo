import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import NewsletterForm from "@/app/components/NewsletterForm";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";

export default function HomePage() {
  const ultimasCartas = [...cartas].reverse().slice(0, 3);
  const cartaDestaque = ultimasCartas[0];

  return (
    <>
      <NavBar />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center" style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "2rem" }}>Carta semanal · Filosofia estratégica</p>
                <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.02em", color: "#2C2926", marginBottom: "2rem" }}>Almanaque<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>Contemporâneo</span></h1>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "1.0625rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.8", maxWidth: "480px", marginBottom: "1.5rem" }}>Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruído do tempo.</p>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontStyle: "italic", color: "#4F5B4A", marginBottom: "2.5rem" }}>&ldquo;Entra, pousa, respira, lê melhor.&rdquo;</p>
                <div className="max-w-md">
                  <NewsletterForm variant="minimal" placeholder="o seu email" ctaLabel="Receber o Almanaque" />
                  <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.55, marginTop: "0.75rem", fontWeight: 300 }}>Sem spam. Sem algoritmos. Só uma carta, uma vez por semana.</p>
                </div>
              </div>
              <div className="hidden md:flex md:col-span-5 items-center justify-center">
                <div style={{ width: "100%", aspectRatio: "3/4", backgroundColor: "rgba(79,91,74,0.07)", border: "1px solid rgba(79,91,74,0.15)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem", padding: "3rem" }}>
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#2C2926", textAlign: "center", lineHeight: "1.7" }}>Filosofia aplicada<br />à vida real.<br /><br />Não ao sucesso.<br />À clareza.</p>
                  <span style={{ color: "#4F5B4A", opacity: 0.5 }}>🜂</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRACTO EDITORIAL */}
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)", borderBottom: "1px solid rgba(44,41,38,0.1)", backgroundColor: "rgba(79,91,74,0.04)" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "2rem" }}>O que é o Almanaque</p>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 400, lineHeight: "1.55", color: "#2C2926", marginBottom: "1.5rem" }}>Não é coaching. Não é produtividade com outro nome. Não é motivação embalada em citações.</p>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85", marginBottom: "1rem" }}>É uma carta semanal de filosofia estratégica aplicada à vida real. Para quem prefere pensar a reagir.</p>
              <div className="mt-8">
                <Link href="/sobre" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>Saber mais sobre o projecto</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CARTA DESTAQUE */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>Úultima carta</p>
          <CartaCard carta={cartaDestaque} variant="featured" />
        </section>

        {/* ARQUIVO */}
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)" }} className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-baseline justify-between mb-10">
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400 }}>Arquivo</p>
            <Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A433D", opacity: 0.7, textDecoration: "none", fontWeight: 300 }}>Ver todas →</Link>
          </div>
          <div>
            {ultimasCartas.slice(1).map((carta) => (
              <CartaCard key={carta.slug} carta={carta} variant="list" />
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ borderTop: "1px solid rgba(44,41,38,0.1)", backgroundColor: "#4F5B4A" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#F3EFE6", lineHeight: 1.2, marginBottom: "1.5rem" }}>Uma carta por semana.<br />Nada mais, nada menos.</h2>
              <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#F3EFE6", color: "#2C2926", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}>Receber o Almanaque</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
