import React, { useState } from "react";
import FilterComponent from "./components/movies/FilterComponent";
import SortingComponent from "./components/movies/SortingComponent";
import AddMovieComponent from "./components/movies/AddMovieComponent";
import GlobalSearchComponent from "./components/movies/GlobalSearchComponent";
import MoviesListComponent from "./components/movies/MoviesListComponent";
import { movies } from "./components/configData";
import {
  FilterByReleaseInterface,
  MovieInterface,
  SortedKeyInterface,
} from "./components/interfaces";

function Movies() {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>(movies);
  const [globalSearchList, setGlobalSearchList] = useState<string>("");
  const [filterByRelease, setFilterByRelease] =
    useState<FilterByReleaseInterface>({
      id: null,
      ageStart: null,
      ageEnd: null,
    });
  const [sortedKey, setSortedKey] = useState<SortedKeyInterface>({
    id: 1,
    label: "Name",
  });
  const [sortedOrderAscending, setSortedOrderAscending] =
    useState<boolean>(true);

  return (
    <div className="movies-page">
      <GlobalSearchComponent
        globalSearchList={globalSearchList}
        setGlobalSearchList={setGlobalSearchList}
      />

      <FilterComponent
        filterByRelease={filterByRelease}
        setFilterByRelease={setFilterByRelease}
      />

      <SortingComponent
        sortedKey={sortedKey}
        setSortedKey={setSortedKey}
        sortedOrderAscending={sortedOrderAscending}
        setSortedOrderAscending={setSortedOrderAscending}
      />

      <AddMovieComponent
        moviesList={moviesList}
        setMoviesList={setMoviesList}
      />

      <MoviesListComponent
        filterByRelease={filterByRelease}
        globalSearchList={globalSearchList}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
        sortedKey={sortedKey.label}
        sortedOrderAscending={sortedOrderAscending}
      />
    </div>
  );
}

export default Movies;
