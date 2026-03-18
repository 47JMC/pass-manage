import { decryptPassword } from "@/lib/encrypt";
import passwordEntry from "@/models/PasswordEntry";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id } = await request.json();

  if (!process.env.SECRET_KEY) {
    return NextResponse.json(
      { error: "Secret key is not configured." },
      { status: 500 },
    );
  }

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  try {
    // get data from db using id
    const currentEntry = (await passwordEntry.findOne({ id })) as {
      password: string;
    };

    const decoded = decryptPassword(
      currentEntry.password,
      process.env.SECRET_KEY,
    );

    return NextResponse.json({ decoded }, { status: 200 });
  } catch (error) {
    console.error("Error decoding password:", error);
    return NextResponse.json(
      { error: "Failed to decode password." },
      { status: 500 },
    );
  }
}
