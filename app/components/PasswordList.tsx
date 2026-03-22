import PasswordEntry from "./PasswordEntry";
import { Entry } from "@/lib/types";

type Props = {
  entries: Entry[];
};

function PasswordList({ entries }: Props) {
  return (
    <div className="m-4 p-3 rounded-lg flex flex-wrap gap-3">
      {entries.map((entry) => (
        <PasswordEntry key={entry.id} {...entry} />
      ))}
    </div>
  );
}

export default PasswordList;
