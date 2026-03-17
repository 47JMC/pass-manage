import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PasswordEntry from "@/models/PasswordEntry";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { name, domain, password } = await request.json();

  if (!name || !domain || !password) {
    return NextResponse.json(
      { error: "Missing required fields: name, domain, password" },
      { status: 400 },
    );
  }

  await connectDB();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEntry = new PasswordEntry({
      name,
      domain,
      password: hashedPassword,
    });

    await newEntry.save();

    return NextResponse.json(
      { message: "Password saved successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving password:", error);
    return NextResponse.json(
      { error: "Failed to encrypt password" },
      { status: 500 },
    );
  }
}
