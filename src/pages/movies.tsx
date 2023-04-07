import React, { useState } from "react";
import FilterComponent from "./components/movies/FilterComponent";
import SortingComponent from "./components/movies/SortingComponent";

export const movies = [
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
  const [moviesList, setMoviesList] = useState<any[]>(movies);
  const [globalSearchList, setGlobalSearchList] = useState("");
  const [filterByRelease, setFilterByRelease] = useState<{
    ageStart: number | null;
    ageEnd: number | null;
  }>({
    ageStart: null,
    ageEnd: null,
  });
  const [sortedKey, setSortedKey] = useState("release");
  const [sortedOrderAscending, setSortedOrderAscending] = useState(true);
  const [addNewMovieName, setAddNewMovieName] = useState("");
  const [addNewMovieData, setAddNewMovieData] = useState("");
  const [addNewMovieAuthor, setAddNewMovieAuthor] = useState("");
  const [addNewMovieType, setAddNewMovieType] = useState("");
  const [addMovieButton, setAddMovieButton] = useState(true);

  const handleNewMovie = (e) => {
    e.preventDefault();

    const sortedMovieList = [...moviesList].sort((a, b) => {
      return a.id - b.id;
    });

    const checkIfExists = moviesList.some((movie) => {
      return (
        movie.name.toLowerCase() === addNewMovieName.toLowerCase() &&
        movie.author.toLowerCase() === addNewMovieAuthor.toLowerCase()
      );
    });

    if (checkIfExists) {
      alert("This movie already exists!");
      setAddNewMovieAuthor("");
      setAddNewMovieName("");
      return;
    }

    const emptyInputs =
      addNewMovieName.trim() &&
      addNewMovieData.trim() &&
      addNewMovieAuthor.trim() &&
      addNewMovieType.trim();

    if (!emptyInputs) {
      alert("Can't add movie with empty spaces!");
      return;
    }

    const newMovieId = sortedMovieList[sortedMovieList.length - 1].id + 1;

    const newMovie = {
      id: newMovieId,
      name: addNewMovieName,
      release: addNewMovieData,
      author: addNewMovieAuthor,
      type: addNewMovieType,
    };

    setMoviesList((prev) => {
      return [newMovie, ...prev];
    });
  };

  const handleDeleteMovie = (e, item) => {
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
    <div className="movies-page">
      <div className="global-search-container">
        <h3>Global movies search:</h3>
        <input
          placeholder="Search your movie"
          value={globalSearchList}
          onChange={(e) => setGlobalSearchList(e.target.value)}
        />
      </div>
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

      {/* <div className="sorted-movies-container">
        <h3>Sort movies by name:</h3>
        <div>
          <button onClick={(e) => onClickSorting(e, "name", true)}>
            Ascending
          </button>
          <button onClick={(e) => onClickSorting(e, "name", false)}>
            Descending
          </button>
        </div>
      </div> */}
      <br></br>

      <div className="add-new-movie-button">
        {addMovieButton && (
          <button onClick={() => setAddMovieButton((prev) => !prev)}>
            ADD A NEW MOVIE
          </button>
        )}
        {!addMovieButton && (
          <button onClick={() => setAddMovieButton((prev) => !prev)}>
            BACK
          </button>
        )}
      </div>

      <div className="add-new-movie-container">
        {!addMovieButton && <h3>Add a new movie:</h3>}
        {!addMovieButton && (
          <div className="inputs-new-movie">
            <input
              type="text"
              placeholder="Write your movie name"
              value={addNewMovieName}
              onChange={(e) => setAddNewMovieName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Release data"
              value={addNewMovieData}
              onChange={(e) => setAddNewMovieData(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              value={addNewMovieAuthor}
              onChange={(e) => setAddNewMovieAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type of movie"
              value={addNewMovieType}
              onChange={(e) => setAddNewMovieType(e.target.value)}
            />
            <button onClick={handleNewMovie}>Add your movie!</button>
          </div>
        )}
      </div>

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
    </div>
  );
}

export default Movies;
