import React from "react";
import DropdownComponent from "./DropdownComponent";
import { releasesDates, releasesDatesWithLabel } from "../configData";
import { FilterByReleaseInterface } from "../interfaces";

function FilterComponent({
  filterByRelease,
  setFilterByRelease,
}: {
  filterByRelease: FilterByReleaseInterface;
  setFilterByRelease: (value: FilterByReleaseInterface) => void;
}) {
  const onClickFilterAge = (id: string | null) => {
    const findReleaseDate = releasesDates.find(
      (releaseDate) => releaseDate.id.toString() === id
    );

    setFilterByRelease({
      ageStart: findReleaseDate.start,
      ageEnd: findReleaseDate.end,
      id,
    });
  };

  return (
    <DropdownComponent
      items={releasesDatesWithLabel}
      selected={filterByRelease.id}
      setSelected={onClickFilterAge}
      label={"Filter your movies by age:"}
    />
  );
}

export default FilterComponent;
