import React, { useState } from "react";

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

const sortingCategories = ["name", "release", "author", "type"];

function Movies() {
  const [moviesList, setMoviesList] = useState<any[]>(movies);
  const [filterByRelease, setFilterByRelease] = useState({
    ageStart: null,
    ageEnd: null,
  });
  const [sortedKey, setSortedKey] = useState("release");
  const [sortedOrderAscending, setSortedOrderAscending] = useState(true);
  const [addNewMovieName, setAddNewMovieName] = useState("");
  const [addNewMovieData, setAddNewMovieData] = useState("");
  const [addNewMovieAuthor, setAddNewMovieAuthor] = useState("");
  const [addNewMovieType, setAddNewMovieType] = useState("");
  const [globalSearchList, setGlobalSearchList] = useState("");
  const [addMovieButton, setAddMovieButton] = useState(true);

  const onClickFilterAge = (
    e: any,
    ageStart: number | null,
    ageEnd?: number | null
  ) => {
    e.preventDefault();
    setFilterByRelease({ ageStart, ageEnd });
  };

  const onClickCategorySorting = (e, key) => {
    e.preventDefault();
    setSortedKey(key);
  };

  const onClickSorting = (e, isAscending) => {
    e.preventDefault();
    setSortedOrderAscending(isAscending);
  };

  // console.log("filterByRelease", filterByRelease);
  // console.log("sortedKey", sortedKey);
  // console.log("sortedOrderAscending", sortedOrderAscending);

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

      <div className="global-search-container">
        <h3>Global movies search:</h3>
        <input
          placeholder="Search your movie"
          value={globalSearchList}
          onChange={(e) => setGlobalSearchList(e.target.value)}
        />
      </div>

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
            className={sortedOrderAscending === true ? "selected-item" : ""}
            onClick={(e) => onClickSorting(e, true)}
          >
            Ascending
          </button>
          <button
            className={sortedOrderAscending === false ? "selected-item" : ""}
            onClick={(e) => onClickSorting(e, false)}
          >
            Descending
          </button>
        </div>
      </div>

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
