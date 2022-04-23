import { useEffect, useReducer, useState } from "react";
import "../../App/App.css";
import MovieDetailCard from "../MovieDetailsCard/MovieDetailCard";
import Modal from "../Modal/Modal";
import MovieCard from "../MovieCard/MovieCard";
import movieListReducer from "../Reducer/movieListReducer";

const MoviePage = (props) => {
  
  const moviesList = props.moviesList;

  const initialState = {
    selectedMovie: moviesList[0],
  };

  useEffect(()=>{dispatch({type:'SHOW_SELECTED_MOVIE', payload : moviesList[0]})}, [moviesList])

  const [show, setShow] = useState(false);

  const [state, dispatch] = useReducer(movieListReducer, initialState);


  const onMovieSelect = (movie) => {
    dispatch({ type: "SHOW_SELECTED_MOVIE", payload: movie });
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

  return (
    <div className="App">
      <main>
        <section className="movie-main">
          <MovieDetailCard {...state.selectedMovie} /> 
        </section>

        <section>
          <ul className="flex-container" id="movie-list" type="none">
            {getMoviesList(moviesList)}
          </ul>
        </section>
      </main>
      <script src="script.js"></script>
    </div>
  );
};

export default MoviePage;
