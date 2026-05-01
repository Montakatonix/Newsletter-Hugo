import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://almanaque-contemporaneo.com"),
  title: {
    default: "Almanaque Contemporâneo — Carta semanal de filosofia estratégica",
    template: "%s — Almanaque Contemporâneo",
  },
  description: "Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruído do tempo.",
  keywords: ["filosofia estratégica", "carta semanal", "pensamento", "newsletter"],
  authors: [{ name: "Almanaque Contemporâneo" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://almanaque-contemporaneo.com",
    siteName: "Almanaque Contemporâneo",
    title: "Almanaque Contemporâneo — Carta semanal de filosofia estratégica",
    description: "Uma carta semanal para pensar melhor, decidir melhor e perder menos para o ruído do tempo.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen"
        style={{
          backgroundColor: "#F3EFE6",
          color: "#2C2926",
          fontFamily: "'Jost', system-ui, sans-serif",
          fontWeight: 300,
        }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
