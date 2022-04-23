import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
      <figure className="movie-card" onClick={() => props.onMovieSelect(props.movie)}>
        <img
          className="movie-card-img"
          src={props.movie.imageUrl}
          alt={props.movie.title}
        />
        <figcaption className="movie-title">{props.movie.title}</figcaption>
      </figure>
  );
};

export default MovieCard;
