import PasswordEntry from "./PasswordEntry";
import { Entry } from "@/lib/types";

type Props = {
  entries: Entry[];
  onDelete: (id: string) => void;
};

function PasswordList({ entries, onDelete }: Props) {
  return (
    <div className="m-4 p-3 rounded-lg flex flex-wrap gap-3">
      {entries.map((entry) => (
        <PasswordEntry key={entry.id} {...entry} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PasswordList;
