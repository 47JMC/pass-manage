import { Entry } from "@/lib/types";

function PasswordEntry({ username, domain, password }: Entry) {
  return (
    <div className="bg-indigo-950 p-5 rounded-xl text-xl gap-6">
      <h3 className="font-outfit font-semibold">Username: {username}</h3>
      <h3 className="font-outfit font-semibold">Domain: {domain}</h3>
      <h3 className="font-outfit font-semibold">Password: {password}</h3>
    </div>
  );
}

export default PasswordEntry;
