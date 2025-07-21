"use client";

type Item = {
  id: number;
  name: string;
};

type ToggleAction = (id: number) => void;

interface CustomerFilterCheckboxGroupProps {
  items: Item[];
  name: "location" | "brand" | "category";
  selectedItems: number[];
  onToggle: ToggleAction;
}

export default function CustomerFilterCheckboxGroup({
  items,
  name,
  selectedItems,
  onToggle,
}: CustomerFilterCheckboxGroupProps) {
  return items.map(item => (
    <label className="flex items-center gap-3 font-semibold" htmlFor={`${name}-${item.id}`} key={item.id}>
      <input
        type="checkbox"
        id={`${name}-${item.id}`}
        name={name}
        className="flex h-6 w-6 shrink-0 appearance-none rounded-md ring-1 ring-[#0D5CD7] checked:border-[3px] checked:border-solid checked:border-white checked:bg-[#0D5CD7]"
        value={item.id}
        checked={selectedItems.includes(item.id)}
        onChange={() => onToggle(item.id)}
      />
      <span>{item.name}</span>
    </label>
  ));
}
