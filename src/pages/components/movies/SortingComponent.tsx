import React from "react";

const sortingCategories = ["name", "release", "author", "type"];

function SortingComponent({
  sortedKey,
  sortedOrderAscending,
  setSortedKey,
  setSortedOrderAscending,
}: {
  sortedKey: string;
  sortedOrderAscending: boolean;
  setSortedKey: (value: string) => void;
  setSortedOrderAscending: (value: boolean) => void;
}) {
  const onClickCategorySorting = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    setSortedKey(key);
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
      <div className="sorted-by-container">
        <h3>Sort movies by:</h3>
        <div>
          {sortingCategories.map((item) => {
            return (
              <button
                key={`sorting-category-${item}`}
                onClick={(e) => onClickCategorySorting(e, item)}
                className={sortedKey === item ? "selected-item" : ""}
              >
                {item.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

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
