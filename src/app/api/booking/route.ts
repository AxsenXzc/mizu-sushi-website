import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, ristorante } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    let apiKey = process.env.CALLMEBOT_API_KEY || process.env.NEXT_PUBLIC_CALLMEBOT_API_KEY;
    let phone = process.env.CALLMEBOT_PHONE || process.env.NEXT_PUBLIC_CALLMEBOT_PHONE;

    if (ristorante === "susiyan") {
      const susiyanApiKey = process.env.CALLMEBOT_API_KEY_SUSIYAN || process.env.NEXT_PUBLIC_CALLMEBOT_API_KEY_SUSIYAN;
      const susiyanPhone = process.env.CALLMEBOT_PHONE_SUSIYAN || process.env.NEXT_PUBLIC_CALLMEBOT_PHONE_SUSIYAN;
      
      if (susiyanApiKey && susiyanPhone) {
        apiKey = susiyanApiKey;
        phone = susiyanPhone;
      }
    }

    if (!apiKey || !phone) {
      return NextResponse.json(
        { error: `Chiavi non trovate. API Key: ${apiKey ? "Presente" : "Mancante"}, Phone: ${phone ? "Presente" : "Mancante"}` },
        { status: 500 }
      );
    }

    const endpoint = "https://" + "api.callmebot.com/whatsapp.php";
    const url = endpoint + "?phone=" + encodeURIComponent(phone) + "&text=" + encodeURIComponent(message) + "&apikey=" + apiKey;

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
