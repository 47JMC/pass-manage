import PasswordEntry from "./PasswordEntry";
import { Entry } from "@/lib/types";

type Props = {
  entries: Entry[];
};

function PasswordList({ entries }: Props) {
  return (
    <div className="m-4 p-3 rounded-lg flex gap-3">
      {entries.map((entry) => (
        <PasswordEntry
          key={entry.id}
          id={entry.id}
          username={entry.username}
          domain={entry.domain}
          password={entry.password}
          createdAt={entry.createdAt}
          updatedAt={entry.updatedAt}
        />
      ))}
    </div>
  );
}

export default PasswordList;
