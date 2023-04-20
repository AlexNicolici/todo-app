import React from "react";

function DropdownComponent({
  label,
  items = [],
  selected,
  setSelected,
}: {
  label?: string;
  items: {
    id: number;
    label: string;
  }[];
  selected: string | number;
  setSelected: (
    selected: string,
    item: {
      id: number;
      label: string;
    }
  ) => void;
}) {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const findItem = items.find(
      (item) => item.id.toString() === value.toString()
    );
    setSelected(value, findItem);
  };

  return (
    <div className="sorted-by-container">
      {!!label && <h3>{label}</h3>}
      <select
        className="select-container"
        value={selected}
        onChange={handleOnChange}
      >
        {items.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownComponent;
