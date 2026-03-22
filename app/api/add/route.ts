import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PasswordEntry from "@/models/PasswordEntry";
import { encryptPassword } from "@/lib/encrypt";
import { v4 } from "uuid";

export async function POST(request: NextRequest) {
  const { username, domain, password } = await request.json();

  if (!username || !domain || !password) {
    return NextResponse.json(
      { error: "Missing required fields: username, domain, password" },
      { status: 400 },
    );
  }

  await connectDB();

  try {
    const encryptedPassword = encryptPassword(
      password,
      process.env.SECRET_KEY!,
    );

    const generatedId = v4();

    const newEntry = new PasswordEntry({
      id: generatedId,
      username,
      domain,
      password: encryptedPassword,
    });

    await newEntry.save();

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error saving password:", error);
    return NextResponse.json(
      { error: "Failed to encrypt password" },
      { status: 500 },
    );
  }
}
