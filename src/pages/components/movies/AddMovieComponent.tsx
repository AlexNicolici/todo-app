import React, { useState } from "react";

function AddMovieComponent({ moviesList, setMoviesList }) {
  const [addMovieButton, setAddMovieButton] = useState<boolean>(true);
  const [addNewMovieName, setAddNewMovieName] = useState<string>("");
  const [addNewMovieData, setAddNewMovieData] = useState<number | string>("");
  const [addNewMovieAuthor, setAddNewMovieAuthor] = useState<string>("");
  const [addNewMovieType, setAddNewMovieType] = useState<string>("");

  const handleNewMovie = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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
      addNewMovieData &&
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

  return (
    <div>
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
    </div>
  );
}

export default AddMovieComponent;
