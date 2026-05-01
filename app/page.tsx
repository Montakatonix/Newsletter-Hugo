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
                <NewsletterForm variant="minimal" placeholder="o seu email" ctaLabel="Receber o Almanaque" />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          <CartaCard carta={cartaDestaque} variant="featured" />
          {ultimasCartas.slice(1).map((c) => (<CartaCard key={c.slug} carta={c} variant="list" />))}
        </section>
      </main>
      <Footer />
    </>
  );
}
