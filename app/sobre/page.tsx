import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata: Metadata = { title: "Sobre", description: "O que é o Almanaque Contemporâneo, para quem existe e por que existe." };

export default function SobrePage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
          <div className="mb-16 animate-fade-up">
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.25rem" }}>Sobre o projecto</p>
            <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.0, color: "#2C2926", letterSpacing: "-0.02em" }}>
              Almanaque<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>Contemporâneo</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-7 animate-fade-up delay-200">
              <div className="prose-editorial">
                <p>O Almanaque Contemporâneo é uma carta semanal de filosofia estratégica aplicada à vida real. Não ao sucesso. À clareza.</p>
                <p>Cada edição parte de uma observação concreta — um padrão humano, uma tensão que reconhecemos mas raramente nomeamos — e oferece uma forma diferente de o ver. Não uma solução. Uma perspectiva.</p>
                <h2>O que não é</h2>
                <p>Não é coaching. Não é produtividade com outro nome. Não é autoajuda embalada em linguagem filosófica. Não é motivação. Não é uma lista de hábitos.</p>
                <p>É uma carta. Escrita para ser lida com calma, uma vez por semana, sem pressa.</p>
                <h2>Para quem existe</h2>
                <p>Para quem prefere pensar a reagir. Para quem sente que a maior parte do ruído não tem resposta — tem apenas melhor distância.</p>
                <h2>Por que existe</h2>
                <p>Porque a maioria dos conteúdos sobre pensamento é, na prática, sobre velocidade. O Almanaque vai na direcção contrária. Mais lento. Mais fundo. Mais útil, por isso.</p>
                <h2>O que pode esperar</h2>
                <p>Uma carta por semana, às quartas-feiras. Entre cinco e dez minutos de leitura. Um tema, uma observação, uma forma diferente de ver.</p>
                <p>Nada mais. Nada menos.</p>
              </div>
              <div className="mt-12">
                <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>Receber o Almanaque</Link>
              </div>
            </div>
            <div className="md:col-span-5 animate-fade-up delay-300">
              <div style={{ position: "sticky", top: "8rem", display: "flex", flexDirection: "column", gap: "2px" }}>
                {[{label:"Frequência",value:"Uma carta por semana",detail:"Às quartas-feiras"},{label:"Duração",value:"5 a 10 minutos",detail:"Por edição"},{label:"Formato",value:"Carta editorial",detail:"Texto longo"},{label:"Custo",value:"Gratuito",detail:"Sem publicidade"},{label:"Cancelamento",value:"Quando quiser",detail:"Sem fricção"}].map((item, i) => (
                  <div key={i} style={{ backgroundColor: "rgba(44,41,38,0.03)", border: "1px solid rgba(44,41,38,0.08)", padding: "1.1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A433D", opacity: 0.6, fontWeight: 400, marginBottom: "0.15rem" }}>{item.label}</p>
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", color: "#2C2926", fontWeight: 400 }}>{item.value}</p>
                    </div>
                    <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.5, fontWeight: 300, textAlign: "right", flexShrink: 0 }}>{item.detail}</p>
                  </div>
                ))}
                <div style={{ marginTop: "1.5rem", padding: "1.75rem", backgroundColor: "rgba(79,91,74,0.07)", border: "1px solid rgba(79,91,74,0.15)" }}>
                  <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", color: "#2C2926", lineHeight: "1.65" }}>&ldquo;Entra, pousa, respira, lê melhor.&rdquo;</p>
                  <span style={{ display: "block", color: "#4F5B4A", marginTop: "1rem", opacity: 0.5 }}>🜂</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}