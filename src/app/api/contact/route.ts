import { sendContactEmail } from "@/helper/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (err: unknown) {
    return NextResponse.json(
      { error: `Unable to send mail ${err}` },
      { status: 500 }
    );
  }
}
