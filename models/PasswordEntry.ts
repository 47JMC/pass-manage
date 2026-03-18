import mongoose from "mongoose";

const passwordEntrySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    domain: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const passwordEntry = mongoose.model("PasswordEntry", passwordEntrySchema);

export default passwordEntry || mongoose.models.PasswordEntry;
