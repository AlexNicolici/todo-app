import React from "react";

const releasesDates = [
  {
    start: 1990,
    end: 2000,
  },
  {
    start: 2000,
    end: 2003,
  },
  {
    start: 2000,
    end: 2010,
  },

  {
    start: 2010,
    end: 2020,
  },
  {
    start: 2020,
    end: 2030,
  },
];

function FilterComponent({
  filterByRelease,
  setFilterByRelease,
}: {
  filterByRelease: {
    ageStart: number | null;
    ageEnd: number | null;
  };
  setFilterByRelease: (value: {
    ageStart: number | null;
    ageEnd: number | null;
  }) => void;
}) {
  const onClickFilterAge = (
    e: any,
    ageStart: number | null,
    ageEnd?: number | null
  ) => {
    e.preventDefault();
    setFilterByRelease({ ageStart, ageEnd });
  };

  return (
    <div className="filter-age-container">
      <h3>Filter your movies by age:</h3>
      <div className="buttons-container">
        {releasesDates.map((item) => {
          return (
            <button
              className={
                filterByRelease.ageStart === item.start &&
                filterByRelease.ageEnd === item.end
                  ? "selected-item"
                  : ""
              }
              onClick={(e) => onClickFilterAge(e, item.start, item.end)}
              key={`${item.start}-${item.end}`}
            >
              <p>{`${item.start}-${item.end}`}</p>
            </button>
          );
        })}
        <button
          className={filterByRelease.ageStart === null ? "selected-item" : ""}
          onClick={(e) => onClickFilterAge(e, null)}
        >
          <p>All</p>
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
