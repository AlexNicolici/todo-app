import React from "react";

const releasesDates = [
  {
    id: 1,
    start: 1990,
    end: 2000,
  },
  {
    id: 2,
    start: 2000,
    end: 2003,
  },
  {
    id: 3,
    start: 2000,
    end: 2010,
  },

  {
    id: 4,
    start: 2010,
    end: 2020,
  },
  {
    id: 5,
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
    id: string | number | null;
  };
  setFilterByRelease: (value: {
    ageStart: number | null;
    ageEnd: number | null;
    id: string | number | null;
  }) => void;
}) {
  const onClickFilterAge = (id: string | null) => {
    if (!id) {
      return;
    }

    const getSelectedItem = releasesDates.find(
      (releaseDate) => releaseDate.id.toString() === id
    );
    setFilterByRelease({
      ageStart: getSelectedItem.start,
      ageEnd: getSelectedItem.end,
      id,
    });
  };

  return (
    <div className="filter-age-container">
      <h3>Filter your movies by age:</h3>
      <select
        className="select-container"
        value={filterByRelease.id}
        onChange={(e) => onClickFilterAge(e.target.value)}
      >
        {releasesDates.map((item) => {
          return (
            <option
              className={filterByRelease.id === item.id ? "selected-item" : ""}
              value={item.id}
              key={`${item.id}`}
            >
              {`${item.start}-${item.end}`}
            </option>
          );
        })}
        <option
          className={filterByRelease.ageStart === null ? "selected-item" : ""}
          value={0}
        >
          All
        </option>
      </select>
    </div>
  );
}

export default FilterComponent;
