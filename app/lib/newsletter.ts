export type NewsletterProvider = "beehiiv" | "resend" | "convertkit" | "mailchimp" | "custom";
export interface SubscribePayload { email: string; nome?: string; }
export interface SubscribeResult { success: boolean; message: string; error?: string; }
const PROVIDER = (process.env.NEWSLETTER_PROVIDER as NewsletterProvider) || "beehiiv";
async function subscribeBeehiiv(payload: SubscribePayload): Promise<SubscribeResult> {
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!publicationId || !apiKey) {
    if (process.env.NODE_ENV === "development") return { success: true, message: "Dev mode." };
    return { success: false, error: "Newsletter not configured.", message: "" };
  }
  const res = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ email: payload.email, reactivate_existing: false, send_welcome_email: true }),
  });
  if (!res.ok) { const error = await res.text(); return { success: false, error, message: "" }; }
  return { success: true, message: "Subscribed." };
}
async function subscribeResend(payload: SubscribePayload): Promise<SubscribeResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return { success: false, error: "Not configured.", message: "" };
  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ email: payload.email, first_name: payload.nome?.split(" ")[0] || "", unsubscribed: false }),
  });
  if (!res.ok) { const error = await res.text(); return { success: false, error, message: "" }; }
  return { success: true, message: "Subscribed." };
}
async function subscribeCustom(payload: SubscribePayload): Promise<SubscribeResult> {
  const endpoint = process.env.CUSTOM_NEWSLETTER_ENDPOINT;
  if (!endpoint) return { success: false, error: "Not configured.", message: "" };
  const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!res.ok) return { success: false, error: "Error.", message: "" };
  return { success: true, message: "Subscribed." };
}
export async function subscribe(payload: SubscribePayload): Promise<SubscribeResult> {
  try {
    switch (PROVIDER) {
      case "beehiiv": return await subscribeBeehiiv(payload);
      case "resend": return await subscribeResend(payload);
      case "custom": return await subscribeCustom(payload);
      default: return await subscribeBeehiiv(payload);
    }
  } catch (err) {
    console.error("Newsletter error:", err);
    return { success: false, error: "Unexpected error.", message: "" };
  }
}