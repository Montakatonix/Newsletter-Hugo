import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import NewsletterForm from "@/app/components/NewsletterForm";

export const metadata: Metadata = { title: "Receber o Almanaque", description: "Subscreva o Almanaque Contemporâneo. Uma carta semanal de filosofia estratégica aplicada à vida real." };

export default function SuscribirsePage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="min-h-screen flex flex-col justify-center" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div style={{ backgroundColor: "rgba(79,91,74,0.07)", border: "1px solid rgba(79,91,74,0.15)", padding: "3rem 2.5rem", marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "0.95rem", fontStyle: "italic", color: "#4F5B4A", marginBottom: "2rem", opacity: 0.8 }}>— I —</p>
                  <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.45rem", fontWeight: 400, lineHeight: "1.6", color: "#2C2926" }}>&ldquo;Uma carta para quem prefere pensar a reagir.&rdquo;</p>
                </div>
                <div className="flex flex-col gap-4">
                  {["Uma carta por semana, às quartas-feiras","Filosofia estratégica aplicada à vida real","Sem publicidade. Sem algoritmos.","Pode cancelar quando quiser"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3" style={{ opacity: 0.85 }}>
                      <div style={{ width: "4px", height: "4px", backgroundColor: "#4F5B4A", borderRadius: "50%", flexShrink: 0 }} />
                      <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.875rem", color: "#4A433D", fontWeight: 300 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1rem" }}>Almanaque Contemporâneo</p>
                <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, color: "#2C2926", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                  Receber<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>o Almanaque</span>
                </h1>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.75", marginBottom: "2rem" }}>
                  Carta semanal de filosofia estratégica aplicada à vida real. Para pensar melhor, decidir melhor e perder menos para o ruído do tempo.
                </p>
                <NewsletterForm variant="full" ctaLabel="Receber o Almanaque" />
                <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem", fontStyle: "italic", color: "#4F5B4A", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(44,41,38,0.1)" }}>
                  &ldquo;Entra, pousa, respira, lê melhor.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}