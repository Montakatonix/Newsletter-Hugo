import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://almanaque-contemporaneo.com"),
  title: { default: "Almanaque Contemporaneo — Carta semanal de filosofia estrategica", template: "%s — Almanaque Contemporaneo" },
  description: "Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruido do tempo.",
  openGraph: { type: "website", locale: "pt_PT", url: "https://almanaque-contemporaneo.com", siteName: "Almanaque Contemporaneo", title: "Almanaque Contemporaneo", description: "Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruido do tempo." },
  twitter: { card: "summary_large_image", title: "Almanaque Contemporaneo", description: "Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruido do tempo." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: "#F3EFE6", color: "#2C2926", fontFamily: "'Jost', system-ui, sans-serif", fontWeight: 300 }}>
        {children}
      </body>
    </html>
  );
}