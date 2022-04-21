import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetailCard from "./components/MovieDetailCard";

function App() {
  const uri = "https://api.tvmaze.com/shows";

  let [movieItemsList, setMovieItemsList] = useState(null);
  let [selectedMovie, setSelectedMovie] = useState(null);
  let [searchInput, setSearchInput] = useState("");

  const fetchMoviesWithName = (uri, searchName) => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        let movieList = data.map((element) => {
          return {
            title: element.name,
            description: element.summary,
            imageUrl: element.image.medium,
            seats: element.weight,
          };
        });
        let filteredMovieList = [];
        if (searchName === "") {
          filteredMovieList = movieList.slice(0, 20);
        } else {
          filteredMovieList = movieList.slice(0, 20).filter((movie) => {
            return movie.title.toLowerCase().includes(searchName.toLowerCase());
          });

          setMovieItemsList([...filteredMovieList]);
        }
        setMovieItemsList([...filteredMovieList]);
        setSelectedMovie({ ...filteredMovieList[0] });
      })
      .catch((error) => console.error("Unable to get items.", error));
  };

  const onMovieSelect = (movie) => {
    setSelectedMovie({ ...movie });
  };

  const getMoviesList = (movieItemsList) => {
    return movieItemsList.map((movie, index) => {
      return (
        <li key={index}>
          <MovieCard onMovieSelect={onMovieSelect} movie={movie} />
        </li>
      );
    });
  };

  const searchBarChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetchMoviesWithName(uri, searchInput);
  }, [searchInput]);

  if (movieItemsList == null) {
    fetchMoviesWithName(uri, "");
  }

  const sortIncreasing = () => {
    let sortedList = movieItemsList.sort((a, b) => {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    setMovieItemsList([...sortedList]);
  };

  const sortDecreasing = () => {
    let sortedList = movieItemsList.sort((a, b) => {
      return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    });
    setMovieItemsList([...sortedList]);
  };

  return (
    <div className="App">
      <header className="grid-container-header">
        <input
          type="text"
          value={searchInput}
          className="searchBar"
          placeholder="Search Movie"
          onChange={searchBarChange}
        />
        <div className="grid-container-buttons">
          <button
            className="sort-btn grid-item-inc-btn"
            onClick={sortIncreasing}
          >
            A-Z
          </button>
          <button
            className="sort-btn grid-item-dec-btn"
            onClick={sortDecreasing}
          >
            Z-A
          </button>
        </div>
      </header>
      <main>
        <section className="movie-main">
          {selectedMovie == null ? null : (
            <MovieDetailCard {...selectedMovie} />
          )}
        </section>

        <section>
          <ul className="flex-container" id="movie-list" type="none">
            {movieItemsList == null ? null : getMoviesList(movieItemsList)}
          </ul>
        </section>
      </main>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
