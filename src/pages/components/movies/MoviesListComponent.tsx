import { MovieInterface } from "@/pages/movies";
import React from "react";

function MoviesListComponent({
  filterByRelease,
  moviesList,
  globalSearchList,
  sortedOrderAscending,
  sortedKey,
  setMoviesList,
}: {
  filterByRelease: {
    ageStart: number | null;
    ageEnd: number | null;
  };
  moviesList: MovieInterface[];
  globalSearchList: string;
  sortedOrderAscending: boolean;
  sortedKey: string;
  setMoviesList: (value: MovieInterface[]) => void;
}) {
  const handleDeleteMovie = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: any
  ) => {
    e.preventDefault();

    const deleteMovie = sortedList.filter((movie) => {
      if (movie.id !== item.id) {
        return true;
      }
    });
    setMoviesList(deleteMovie);
  };

  const filteredMoviesByAge = moviesList.filter((movie) => {
    if (!filterByRelease.ageStart) {
      return true;
    }
    if (
      movie.release >= filterByRelease.ageStart &&
      movie.release <= filterByRelease.ageEnd
    ) {
      return true;
    }
  });

  const searchedMoviesList = filteredMoviesByAge.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(globalSearchList.toLowerCase()) ||
      movie.author.toLowerCase().includes(globalSearchList.toLowerCase())
    );
  });

  const sortedList = [...searchedMoviesList].sort((a, b) => {
    if (sortedOrderAscending) {
      if (a[sortedKey] < b[sortedKey]) {
        return -1;
      }
      if (a[sortedKey] > b[sortedKey]) {
        return 1;
      }
      return 0;
    } else {
      if (a[sortedKey] < b[sortedKey]) {
        return 1;
      }
      if (a[sortedKey] > b[sortedKey]) {
        return -1;
      }
      return 0;
    }
  });

  return (
    <div className="movies-list">
      <ul>
        {sortedList.map((item, idx) => {
          return (
            <li key={`${idx}-${item}`}>
              <p>Name: {item.name}</p>
              <p>Release: {item.release}</p>
              <p>Author: {item.author}</p>
              <p>Type: {item.type}</p>
              <button
                style={{ marginBottom: 5 }}
                onClick={(e) => handleDeleteMovie(e, item)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesListComponent;
