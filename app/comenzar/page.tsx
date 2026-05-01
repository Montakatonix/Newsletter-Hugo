import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import { cartas } from "@/app/data/cartas";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Começar por aqui",
  description:
    "Orientação para novos leitores do Almanaque Contemporâneo. Por onde começar.",
};

const cartasEssenciais = cartas.filter((c) =>
  ["oportunidade-revela", "problema-vs-inconveniencia", "o-que-esta-oculto"].includes(c.slug)
);

export default function ComenzarPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
          <div className="mb-16 animate-fade-up" style={{ maxWidth: "680px" }}>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.25rem" }}>Novo aqui?</p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, color: "#2C2926", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>Começar<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>por aqui</span></h1>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "1rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.85" }}>Se acabou de chegar ao Almanaque, estas são as cartas que melhor representam o espírito do projecto. São pontos de entrada — não uma ordem obrigatória, mas uma sugestão de por onde começar.</p>
          </div>
          {/* Como funciona */}
          <div className="mb-20" style={{ borderTop: "1px solid rgba(44,41,38,0.1)", borderBottom: "1px solid rgba(44,41,38,0.1)", backgroundColor: "rgba(79,91,74,0.04)", padding: "3rem 0" }}>
            <div style={{ maxWidth: "680px" }}>
              <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>Como funciona</p>
              <div className="flex flex-col gap-6">
                {[{ num: "01", titulo: "Uma carta por semana", texto: "Às quartas-feiras, uma nova carta chega à sua caixa de entrada. Entre cinco e dez minutos de leitura." }, { num: "02", titulo: "Um tema, uma perspectiva", texto: "Cada carta parte de um padrão humano concreto e oferece uma forma diferente de o ver. Sem fórmulas. Sem receitas." }, { num: "03", titulo: "O arquivo fica aqui", texto: "Todas as cartas anteriores estão disponíveis no arquivo. Pode ler na ordem que quiser." }].map((item) => (
                  <div key={item.num} className="flex items-start gap-5">
                    <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 300, color: "#4F5B4A", opacity: 0.5, flexShrink: 0, lineHeight: 1 }}>{item.num}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", fontWeight: 500, color: "#2C2926", marginBottom: "0.25rem" }}>{item.titulo}</p>
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.7" }}>{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Cartas essenciais */}
          <div className="mb-20">
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1.5rem" }}>Cartas essenciais</p>
            <div>{cartasEssenciais.map((carta) => (<CartaCard key={carta.slug} carta={carta} variant="list" />))}</div>
            <div className="mt-8">
              <Link href="/arquivo" style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F5B4A", textDecoration: "none", borderBottom: "1px solid rgba(79,91,74,0.4)", paddingBottom: "2px", fontWeight: 400 }}>Ver arquivo completo →</Link>
            </div>
          </div>
          {/* CTA */}
          <div style={{ borderTop: "1px solid rgba(44,41,38,0.1)", paddingTop: "3rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontStyle: "italic", color: "#4A433D" }}>Pronto para receber a próxima carta?</p>
            <Link href="/suscribirse" style={{ display: "inline-block", padding: "0.85rem 2rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, textDecoration: "none" }}>Receber o Almanaque</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
