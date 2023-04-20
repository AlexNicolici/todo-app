import React from "react";
import DropdownComponent from "./DropdownComponent";
import { sortingCategories } from "../configData";
import { DropdownInterface, SortedKeyInterface } from "../interfaces";

function SortingComponent({
  sortedKey,
  sortedOrderAscending,
  setSortedKey,
  setSortedOrderAscending,
}: {
  sortedKey: SortedKeyInterface;
  sortedOrderAscending: boolean;
  setSortedKey: (value: SortedKeyInterface) => void;
  setSortedOrderAscending: (value: boolean) => void;
}) {
  const onClickCategorySorting = (_, item: DropdownInterface) => {
    setSortedKey(item);
  };

  const onClickSorting = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isAscending: boolean
  ) => {
    e.preventDefault();
    setSortedOrderAscending(isAscending);
  };

  return (
    <div>
      <DropdownComponent
        items={sortingCategories}
        selected={sortedKey.id}
        setSelected={onClickCategorySorting}
        label={"Sort movies by:"}
      />

      <div className="sorted-movies-container">
        <h3>Sort movies order:</h3>
        <div>
          <button
            className={sortedOrderAscending ? "selected-item" : ""}
            onClick={(e) => onClickSorting(e, true)}
          >
            Ascending
          </button>
          <button
            className={!sortedOrderAscending ? "selected-item" : ""}
            onClick={(e) => onClickSorting(e, false)}
          >
            Descending
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortingComponent;
