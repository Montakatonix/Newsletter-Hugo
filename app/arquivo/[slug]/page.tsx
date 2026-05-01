import { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import NewsletterForm from "@/app/components/NewsletterForm";
import {
  cartas,
  getCartaBySlug,
  getCartasAdjacentesBySlug,
  formatarData,
} from "@/app/data/cartas";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cartas.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const carta = getCartaBySlug(slug);
  if (!carta) return { title: "Carta não encontrada" };

  return {
    title: carta.titulo,
    description: carta.excerpt,
    openGraph: {
      title: `${carta.titulo} — Almanaque Contemporâneo`,
      description: carta.excerpt,
      type: "article",
      publishedTime: carta.data,
    },
  };
}

export default async function CartaPage({ params }: PageProps) {
  const { slug } = await params;
  const carta = getCartaBySlug(slug);
  if (!carta) notFound();

  const { anterior, seguinte } = getCartasAdjacentesBySlug(slug);

  return (
    <>
      <NavBar />
      <main>
        <article>
          {/* Header da carta */}
          <div
            className="max-w-5xl mx-auto px-6 md:px-10 animate-fade-up"
            style={{ paddingTop: "9rem", paddingBottom: "4rem" }}
          >
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              {/* Meta superior */}
              <div
                className="flex items-center gap-3 mb-8"
                style={{ flexWrap: "wrap" }}
              >
                <Link
                  href="/arquivo"
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#4F5B4A",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
                >
                  Arquivo
                </Link>
                <span style={{ color: "rgba(44,41,38,0.3)", fontSize: "0.5rem" }}>
                  /
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#4A433D",
                    opacity: 0.5,
                    fontWeight: 300,
                  }}
                >
                  Nº {String(carta.numero).padStart(2, "0")}
                </span>
              </div>

              {/* Título */}
              <h1
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "#2C2926",
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                {carta.titulo}
              </h1>

              {carta.subtitulo && (
                <p
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    color: "#4A433D",
                    lineHeight: "1.7",
                    marginBottom: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  {carta.subtitulo}
                </p>
              )}

              {/* Meta inferior */}
              <div
                className="flex items-center gap-4"
                style={{
                  borderTop: "1px solid rgba(44,41,38,0.1)",
                  borderBottom: "1px solid rgba(44,41,38,0.1)",
                  padding: "0.85rem 0",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: "0.72rem",
                    color: "#4A433D",
                    opacity: 0.65,
                    fontWeight: 300,
                  }}
                >
                  {formatarData(carta.data)}
                </span>
                <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.5rem" }}>
                  ·
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jost), sans-serif",
                    fontSize: "0.72rem",
                    color: "#4A433D",
                    opacity: 0.65,
                    fontWeight: 300,
                  }}
                >
                  {carta.tempoLeitura} minutos de leitura
                </span>
                {carta.simbolo && (
                  <>
                    <span style={{ color: "rgba(44,41,38,0.2)", fontSize: "0.5rem" }}>
                      ·
                    </span>
                    <span style={{ color: "#4F5B4A", opacity: 0.5, fontSize: "0.8rem" }}>
                      🜂
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className="max-w-5xl mx-auto px-6 md:px-10 animate-fade-up delay-200"
            style={{ paddingBottom: "5rem" }}
          >
            <div
              className="prose-editorial"
              style={{ maxWidth: "680px", margin: "0 auto" }}
              dangerouslySetInnerHTML={{ __html: carta.conteudo }}
            />
          </div>

          {/* Assinatura */}
          <div
            className="max-w-5xl mx-auto px-6 md:px-10"
            style={{ paddingBottom: "4rem" }}
          >
            <div
              style={{
                maxWidth: "680px",
                margin: "0 auto",
                borderTop: "1px solid rgba(44,41,38,0.1)",
                paddingTop: "2.5rem",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgba(44,41,38,0.08)",
                  }}
                />
                <span style={{ color: "#4F5B4A", opacity: 0.4, fontSize: "0.8rem" }}>
                  🜂
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    backgroundColor: "rgba(44,41,38,0.08)",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "#4A433D",
                  textAlign: "center",
                  marginTop: "1.5rem",
                  opacity: 0.7,
                }}
              >
                Almanaque Contemporâneo
              </p>
            </div>
          </div>

          {/* Tags */}
          {carta.tags && carta.tags.length > 0 && (
            <div
              className="max-w-5xl mx-auto px-6 md:px-10"
              style={{ paddingBottom: "3rem" }}
            >
              <div
                style={{ maxWidth: "680px", margin: "0 auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
              >
                {carta.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#4A433D",
                      opacity: 0.5,
                      padding: "0.25rem 0.6rem",
                      border: "1px solid rgba(44,41,38,0.15)",
                      fontWeight: 300,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navegação anterior/seguinte */}
          {(anterior || seguinte) && (
            <div
              className="max-w-5xl mx-auto px-6 md:px-10"
              style={{
                paddingBottom: "5rem",
                borderTop: "1px solid rgba(44,41,38,0.1)",
                paddingTop: "3rem",
              }}
            >
              <div
                style={{ maxWidth: "680px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "2rem" }}
              >
                {anterior ? (
                  <Link
                    href={`/arquivo/${anterior.slug}`}
                    style={{ textDecoration: "none", flex: 1 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#4F5B4A",
                        fontWeight: 400,
                        marginBottom: "0.4rem",
                      }}
                    >
                      ← Anterior
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "1.05rem",
                        color: "#2C2926",
                        lineHeight: 1.3,
                      }}
                    >
                      {anterior.titulo}
                    </p>
                  </Link>
                ) : (
                  <div style={{ flex: 1 }} />
                )}

                {seguinte && (
                  <Link
                    href={`/arquivo/${seguinte.slug}`}
                    style={{ textDecoration: "none", flex: 1, textAlign: "right" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#4F5B4A",
                        fontWeight: 400,
                        marginBottom: "0.4rem",
                      }}
                    >
                      Seguinte →
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "1.05rem",
                        color: "#2C2926",
                        lineHeight: 1.3,
                      }}
                    >
                      {seguinte.titulo}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </article>

        {/* CTA Newsletter */}
        <div
          style={{
            borderTop: "1px solid rgba(44,41,38,0.1)",
            backgroundColor: "rgba(79,91,74,0.04)",
          }}
        >
          <div
            className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20"
          >
            <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#4F5B4A",
                  fontWeight: 400,
                  marginBottom: "1rem",
                }}
              >
                Não quer perder a próxima carta?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.6rem",
                  fontStyle: "italic",
                  color: "#2C2926",
                  lineHeight: 1.3,
                  marginBottom: "2rem",
                }}
              >
                Receba o Almanaque directamente na sua caixa de entrada.
              </p>
              <NewsletterForm
                variant="minimal"
                placeholder="o seu email"
                ctaLabel="Subscrever"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
