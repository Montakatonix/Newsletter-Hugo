import { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CartaCard from "@/app/components/CartaCard";
import { cartas } from "@/app/data/cartas";

export const metadata: Metadata = {
  title: "Arquivo",
  description:
    "Todas as cartas do Almanaque Contemporâneo. Filosofia estratégica aplicada à vida real.",
};

export default function ArquivoPage() {
  const cartasOrdenadas = [...cartas].reverse();

  return (
    <>
      <NavBar />
      <main>
        <div
          className="max-w-5xl mx-auto px-6 md:px-10"
          style={{ paddingTop: "9rem", paddingBottom: "6rem" }}
        >
          <div className="animate-fade-up mb-16" style={{ borderBottom: "1px solid rgba(44,41,38,0.1)", paddingBottom: "3rem" }}>
            <div className="flex items-baseline justify-between">
              <div>
                <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#4F5B4A", fontWeight: 400, marginBottom: "1rem" }}>Almanaque ContemporĢneo</p>
                <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.0, color: "#2C2926", letterSpacing: "-0.02em" }}>Arquivo<br /><span style={{ fontStyle: "italic", fontWeight: 300 }}>vivo</span></h1>
              </div>
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "4rem", fontWeight: 300, color: "#4F5B4A", opacity: 0.2 }}>{cartas.length}</span>
            </div>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.9375rem", fontWeight: 300, color: "#4A433D", lineHeight: "1.75", marginTop: "1.5rem", maxWidth: "480px" }}>Todas as cartas, por ordem cronológica inversa. Cada uma é autônoma — pode começar por qualquer uma.</p>
          </div>
          <div className="animate-fade-up delay-200">
            {cartasOrdenadas.map((carta) => (
              <CartaCard key={carta.slug} carta={carta} variant="list" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
