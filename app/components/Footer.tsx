import Link from "next/link";
export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="mt-32 pb-12" style={{ borderTop: "1px solid rgba(44,41,38,0.12)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 500, color: "#2C2926" }}>Almanaque Contemporâneo</div>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.8rem", color: "#4A433D", maxWidth: "320px", lineHeight: "1.7", fontWeight: 300 }}>Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruído do tempo.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <nav className="flex gap-6">
              {[{href:"/arquivo",label:"Arquivo"},{href:"/sobre",label:"Sobre"},{href:"/comenzar",label:"Começar"},{href:"/suscribirse",label:"Receber"}].map((link) => (
                <Link key={link.href} href={link.href} style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A433D", textDecoration: "none", fontWeight: 400 }}>{link.label}</Link>
              ))}
            </nav>
            <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.72rem", color: "#4A433D", opacity: 0.6, fontWeight: 300 }}>© {ano} Almanaque Contemporâneo</p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(44,41,38,0.08)" }} />
          <span style={{ color: "#4F5B4A", fontSize: "0.75rem", opacity: 0.6 }}>🜂</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(44,41,38,0.08)" }} />
        </div>
      </div>
    </footer>
  );
}