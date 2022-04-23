import { useEffect, useReducer, useState } from "react";
import MovieDetailCard from "../MovieDetailsCard/MovieDetailCard";
import MovieCard from "../MovieCard/MovieCard";
import movieListReducer from "../Reducer/movieListReducer";
import "./MoviePage.css";

const MoviePage = (props) => {
  const moviesList = props.moviesList;

  const initialState = {
    selectedMovie: moviesList[0],
  };

  useEffect(() => {
    dispatch({ type: "SHOW_SELECTED_MOVIE", payload: moviesList[0] });
  }, [moviesList]);

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
  }

  return (
    <div>
      <main>
        <section>
          <MovieDetailCard {...state.selectedMovie} />
        </section>
        <section>
          <ul className="flex-container-movies" id="movie-list" type="none">
            {getMoviesList(moviesList)}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MoviePage;
