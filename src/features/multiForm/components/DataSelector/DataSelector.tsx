import { SecondaryData } from "../../models/SecondaryData";

export default function DataSelector({
  options,
  selectedOptions,
  toggleSelection,
}: {
  options: SecondaryData[];
  selectedOptions: number[];
  toggleSelection: (id: number) => void;
}) {
  const textSelected = (id: number) => {
    return selectedOptions.includes(id) ? "SELECTED - " : "";
  };

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {options.map((data) => (
          <li key={data.id}>
            <div
              onClick={() => toggleSelection(data.id)}
              style={{ backgroundColor: "#ddd" }}
            >
              {textSelected(data.id)}
              {data.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
