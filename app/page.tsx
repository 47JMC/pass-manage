"use client";

import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import PasswordList from "./components/PasswordList";
import Title from "./components/Title";
import { Entry } from "@/lib/types";

function Page() {
  const [entriesData, setEntriesData] = useState<Entry[]>([]);

  const addEntry = async (formData: FormData) => {
    const username = formData.get("usernameInput") as string;
    const domain = formData.get("domainInput") as string;
    const password = formData.get("passInput") as string;

    const payload = {
      username,
      domain,
      password,
    };

    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Failed to save password:", await res.text());
    }

    const newEntry = await res.json();
    setEntriesData((prev) => [...prev, newEntry]);
  };

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch("/api/entries");

      if (!res.ok) {
        console.error("Failed to fetch entries:", await res.text());
        return;
      }

      const data = await res.json();
      setEntriesData(data);
    };
    fetchEntries();
  }, []);

  return (
    <div className="text-center p-3 gap-4 m-2">
      <Title />
      <InputForm action={addEntry} />
      <PasswordList entries={entriesData} />
    </div>
  );
}

export default Page;
