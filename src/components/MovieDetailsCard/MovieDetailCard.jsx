import React from "react";
import "./MovieDetailsCard.css"

const MovieDetailCard = (movie) => {
  return (
    <figure className="flex-container-movie">
      <img className="movie-img" src={movie.imageUrl} alt={movie.title}/>
      
      <figcaption className="details-container">
        <div className="flex-container-movie-details">
          <strong className="title">{movie.title}</strong>
          <p><strong></strong> {movie.description}</p>
          <strong>Seats : {movie.seats}</strong>
          </div>
      </figcaption>
    </figure>
  );
};

export default MovieDetailCard;
