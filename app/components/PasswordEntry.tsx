"use client";

import { useState } from "react";
import { Entry } from "@/lib/types";

type Props = Entry & {
  onDelete: (id: string) => void;
};

function PasswordEntry({ id, username, domain, onDelete }: Props) {
  const [revealed, setRevealed] = useState(false);
  const [realPassword, setRealPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReveal = async () => {
    if (revealed) {
      // hide again
      setRevealed(false);
      return;
    }

    // already fetched once
    if (realPassword) {
      setRevealed(true);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/decode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        console.error(await res.text());
        return;
      }

      const data = await res.json();
      setRealPassword(data.decoded);
      setRevealed(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-indigo-950 p-4 rounded-2xl border-slate-700 w-64 border-2 hover:border-blue-700 transition-all">
      <h3 className="font-outfit font-semibold">Username: {username}</h3>
      <h3 className="font-outfit font-semibold">Domain: {domain}</h3>

      <div className="mt-2 flex items-center">
        <span className="font-outfit font-semibold">Password: </span>

        <span className="bg-black/40 px-2 py-1 rounded-md ml-2">
          {revealed ? realPassword : "••••••••"}
        </span>

        <button
          onClick={handleReveal}
          className="ml-2 text-sm px-2 py-1 transition-colors bg-emerald-600 rounded hover:bg-emerald-700"
        >
          {loading ? "..." : revealed ? "Hide" : "Show"}
        </button>
      </div>
      <button
        className="ml-2 mt-2 text-sm px-2 py-1 transition-all hover:-translate-y-0.5 font-outfit bg-red-500 rounded hover:bg-red-600"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default PasswordEntry;
