import { NextResponse } from "next/server";
import passwordEntry from "@/models/PasswordEntry";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    connectDB();
    const entries = await passwordEntry.find();

    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error fetching password entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch password entries" },
      { status: 500 },
    );
  }
}
