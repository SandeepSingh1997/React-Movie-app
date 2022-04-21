import { createContext, useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import MovieDetailCard from "../components/MovieDetailsCard/MovieDetailCard";
import Modal from "../components/Modal/Modal";
import MovieCard from "../components/MovieCard/MovieCard";
import movieListReducer from "../components/Reducer/movieListReducer";
import movieContext from "../components/context/movieContext";


function App() {

  const initialState = {
    movieItemsList: null,
    selectedMovie: null,
  };

  const uri = "https://api.tvmaze.com/shows";

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
        }
        dispatch({type:'SHOW_MOVIES', payload: filteredMovieList});
      })
      .catch((error) => console.error("Unable to get items.", error));
  };
  
  const [state, dispatch] = useReducer(movieListReducer, initialState);

  const [show, setShow] = useState(false);

  const onMovieSelect = (movie) => {
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

  const onMovieAddUpdate = (movie)=>{
    dispatch({type:'ADD_MOVIE', payload: movie});
  }

  const searchBarChange = (e) => {
    fetchMoviesWithName(uri, e.target
      .value);
  };

  if (state.movieItemsList == null) {;
    fetchMoviesWithName(uri, "");
  }

  const sortIncreasing = () => {
    let tempMovieList = [...state.movieItemsList];
    let sortedMovieList = tempMovieList.sort((a, b) => {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
    dispatch({type:'SHOW_MOVIES', payload:sortedMovieList});
  }

  const sortDecreasing = () => {
    let tempMovieList = [...state.movieItemsList];
    let sortedMovieList = tempMovieList.sort((a, b) => {
      return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    });
    dispatch({type:'SHOW_MOVIES', payload:sortedMovieList});
  }

  return (
    <div className="App">
      <header className="grid-container-header">
        <input
          type="text"
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

        <div>
          <button onClick={() => setShow(true)}>Show Modal</button>
          <movieContext.Provider value={onMovieAddUpdate}>
          <Modal
            title="Add Movie"
            onClose={() => setShow(false)}
            show={show}
          ></Modal>
          </movieContext.Provider>
        </div>
      </header>
      <main>
        <section className="movie-main">
          {state.selectedMovie == null ? null : (
            <MovieDetailCard {...state.selectedMovie} />
          )}
        </section>

        <section>
          <ul className="flex-container" id="movie-list" type="none">
            {state.movieItemsList == null ? null : getMoviesList(state.movieItemsList)}
          </ul>
        </section>
      </main>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
