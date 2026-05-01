"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

interface NewsletterFormProps {
  variant?: "minimal" | "full";
  placeholderKey?: string;
  ctaLabelKey?: string;
}

export default function NewsletterForm({
  variant = "minimal",
  placeholderKey = "form.placeholder",
  ctaLabelKey = "form.cta",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        window.location.href = "/gracias";
      } else {
        setStatus("error");
        setMessage(data.error || "Algo correu mal.");
      }
    } catch {
      setStatus("error");
      setMessage("Erro de ligação.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-2">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t(placeholderKey)} required style={{ flex: 1, padding: "0.75rem 1rem", backgroundColor: "rgba(243,239,230,0.8)", border: "1px solid rgba(44,41,38,0.2)", color: "#2C2926", fontFamily: "var(--font-jost)", fontSize: "0.875rem", outline: "none", minWidth: 0 }} />
        <button type="submit" disabled={status === "loading"} style={{ padding: "0.75rem 1.4rem", backgroundColor: "#4F5B4A", color: "#F3EFE6", fontFamily: "var(--font-jost)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
          {status === "loading" ? t("form.loading") : t(ctaLabelKey)}
        </button>
      </div>
      {status === "error" && <p style={{ fontFamily: "var(--font-jost)", fontSize: "0.75rem", color: "#B06E4F", marginTop: "0.5rem" }}>{message}</p>}
    </form>
  );
}
