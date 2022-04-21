import React from "react";
import "../App.css";
const MovieDetailCard = (movie) => {
  return (
    <figure className="flex-container-movie-main">
      <img className="main-img" src={movie.imageUrl} alt={movie.title}/>
      <figcaption className="movie-details">
          <strong>Title : {movie.title}</strong>
          <p><strong>Summary : </strong> {movie.description}</p>
          <strong>Seats : {movie.seats}</strong>
          </figcaption>
    </figure>
  );
};

export default MovieDetailCard;
