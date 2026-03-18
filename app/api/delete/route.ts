import { NextRequest, NextResponse } from "next/server";
import passwordEntry from "@/models/PasswordEntry";

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { error: "Missing required field: id" },
      { status: 400 },
    );
  }

  try {
    const deletedEntry = await passwordEntry.findOneAndDelete({ id });

    if (!deletedEntry) {
      return NextResponse.json(
        { error: "Password entry not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Password entry deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting password entry:", error);
    return NextResponse.json("Failed to delete password entry", {
      status: 500,
    });
  }
}
