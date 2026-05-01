import { NextRequest, NextResponse } from "next/server";
import { subscribe } from "@/app/lib/newsletter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, nome } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const result = await subscribe({ email, nome });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Erro ao subscrever." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: result.message });
  } catch {
    return NextResponse.json(
      { success: false, error: "Pedido inválido." },
      { status: 400 }
    );
  }
}
