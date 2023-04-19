import React, { useState } from "react";
import FilterComponent from "./components/movies/FilterComponent";
import SortingComponent from "./components/movies/SortingComponent";
import AddMovieComponent from "./components/movies/AddMovieComponent";
import GlobalSearchComponent from "./components/movies/GlobalSearchComponent";
import MoviesListComponent from "./components/movies/MoviesListComponent";

export interface MovieInterface {
  id: number;
  name: string;
  release: number;
  author: string;
  type: string;
}

export const movies: MovieInterface[] = [
  {
    id: 1,
    name: "John Wick: Chapter 4",
    release: 2023,
    author: "Derek Kolstad",
    type: "action",
  },
  {
    id: 2,
    name: "The Mother",
    release: 2023,
    author: "Niki Caro",
    type: "action-drama",
  },
  {
    id: 3,
    name: "Titanic",
    release: 1997,
    author: "James Cameron",
    type: "romance",
  },
  {
    id: 4,
    name: "Ghost",
    release: 1990,
    author: "Bruce Joel Rubin",
    type: "love",
  },
  {
    id: 5,
    name: "Sing Street",
    release: 2016,
    author: "John Carney ",
    type: "comedy-drama",
  },
  {
    id: 6,
    name: "Selma",
    release: 2014,
    author: "Ava DuVernay",
    type: "drama-history",
  },
  {
    id: 7,
    name: "Paddington",
    release: 2014,
    author: "Paul King",
    type: "adventure",
  },
  {
    id: 8,
    name: "Memento",
    release: 2000,
    author: "Christopher Nolan",
    type: "mistery-thriller",
  },
  {
    id: 9,
    name: "Half Nelson",
    release: 2006,
    author: "Ryan Fleck ",
    type: "drama",
  },
];

function Movies() {
  const [moviesList, setMoviesList] = useState<
    {
      id: number;
      name: string;
      release: number;
      author: string;
      type: string;
    }[]
  >(movies);
  const [globalSearchList, setGlobalSearchList] = useState<string>("");
  const [filterByRelease, setFilterByRelease] = useState<{
    id: number | string;
    ageStart: number | null;
    ageEnd: number | null;
  }>({
    id: null,
    ageStart: null,
    ageEnd: null,
  });
  const [sortedKey, setSortedKey] = useState<string>("release");
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
        sortedKey={sortedKey}
        sortedOrderAscending={sortedOrderAscending}
      />
    </div>
  );
}

export default Movies;
