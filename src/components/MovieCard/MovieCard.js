import React from "react";
import '../../App/App.css';

const MovieCard = (props)=>{
return (<div>
    <figure  onClick={()=>props.onMovieSelect(props.movie)}>
        <img className="movie-card-img" src={props.movie.imageUrl} alt={props.movie.title}/>
        <figcaption>{props.movie.title}</figcaption>
        </figure>
        </div>);
}

export default MovieCard;