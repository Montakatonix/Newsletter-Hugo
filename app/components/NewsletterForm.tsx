"use client";

import { useState, FormEvent } from "react";

interface NewsletterFormProps {
  variant?: "minimal" | "full";
  placeholder?: string;
  ctaLabel?: string;
}

export default function NewsletterForm({ variant = "minimal", placeholder = "o seu email", ctaLabel = "Receber o Almanaque" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, nome: nome || undefined }) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setEmail(""); setNome(""); window.location.href = "/gracias"; }
      else { setStatus("error"); setMessage(data.error || "Algo correu mal."); }
    } catch { setStatus("error"); setMessage("Erro de ligação."); }
  }

  if (status === "success") return <div style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", fontStyle: "italic", color: "#4F5B4A" }}>A sua subscrição foi registada.</div>;

  if (variant === "full") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="o seu nome (opcional)" style={{ width: "100%", padding: "0.85rem 1.1rem", backgroundColor: "rgba(243,239,230,0.6)", border: "1px solid rgba(44,41,38,0.2)", color: "#2C2926", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.875rem", fontWeight: 300, outline: "none" }} />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="o seu email" required style={{ width: "100%", padding: "0.85rem 1.1rem", backgroundColor: "rgba(243,239,230,0.6)", border: "1px solid rgba(44,41,38,0.2)", color: "#2C2926", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.875rem", fontWeight: 300, outline: "none" }} />
          <button type="submit" disabled={status === "loading"} style={{ width: "100%", padding: "0.9rem", backgroundColor: status === "loading" ? "#6B7966" : "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400, border: "none", cursor: status === "loading" ? "wait" : "pointer" }}>
            {status === "loading" ? "A processar…" : ctaLabel}
          </button>
          {status === "error" && <p style={{ fontSize: "0.8rem", color: "#B06E4F", fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}>{message}</p>}
          <p style={{ fontSize: "0.72rem", color: "#4A433D", opacity: 0.6, fontFamily: "var(--font-jost), sans-serif", fontWeight: 300, textAlign: "center" }}>Sem spam. Sem algoritmos. Só uma carta, uma vez por semana.</p>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={placeholder} required style={{ flex: 1, padding: "0.75rem 1rem", backgroundColor: "rgba(243,239,230,0.8)", border: "1px solid rgba(44,41,38,0.2)", color: "#2C2926", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.875rem", fontWeight: 300, outline: "none", minWidth: 0 }} />
        <button type="submit" disabled={status === "loading"} style={{ padding: "0.75rem 1.4rem", backgroundColor: status === "loading" ? "#6B7966" : "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost), sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 400, border: "none", cursor: status === "loading" ? "wait" : "pointer", whiteSpace: "nowrap" }}>
          {status === "loading" ? "…" : ctaLabel}
        </button>
      </div>
      {status === "error" && <p style={{ fontSize: "0.78rem", color: "#B06E4F", fontFamily: "var(--font-jost), sans-serif", fontWeight: 300, marginTop: "0.5rem" }}>{message}</p>}
    </form>
  );
}
