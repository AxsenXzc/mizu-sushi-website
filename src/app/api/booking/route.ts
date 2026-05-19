import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.CALLMEBOT_API_KEY || process.env.NEXT_PUBLIC_CALLMEBOT_API_KEY;
    const phone = process.env.CALLMEBOT_PHONE || process.env.NEXT_PUBLIC_CALLMEBOT_PHONE;

    if (!apiKey || !phone) {
      return NextResponse.json(
        { error: `Chiavi non trovate. API Key: ${apiKey ? "Presente" : "Mancante"}, Phone: ${phone ? "Presente" : "Mancante"}` },
        { status: 500 }
      );
    }

    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    const res = await fetch(url);
    const text = await res.text();

    if (!res.ok || (!text.includes("Message queued") && !text.includes("OK"))) {
      return NextResponse.json(
        { error: `CallMeBot error: ${text}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
