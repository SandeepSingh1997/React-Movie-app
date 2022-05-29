import React, { useContext, useEffect, useState } from "react";
import "./Modal.css";
import context from "../context/context";

const Modal = (props) => {
  const { addMovie } = useContext(context);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    imageUrl: "",
    seats: "",
  });

  const handleChange = (event) => {
    const field = event.target.name;
    if (field === "movieTitle") {
      setNewMovie({ ...newMovie, title: event.target.value });
    } else if (field === "movieDesc") {
      setNewMovie({ ...newMovie, description: event.target.value });
    } else if (field === "movieSeats") {
      setNewMovie({ ...newMovie, seats: event.target.value });
    } else if (field === "imageUrl") {
      setNewMovie({ ...newMovie, imageUrl: event.target.value });
    }
  };

  return (
    <div>
      <div className="opaque-black-background"></div>
    <div className="main-container flex-container-modal">

      <div className="flex-item-heading">
        <h3>{props.title}</h3>
      </div>

      <div className="divider"
      ></div>

      <form className="flex-container-form" onChange={handleChange}>
        <label htmlFor="movieTitle">Title of the movie: </label>
        <input className="input" type="text" name="movieTitle"></input>

        <label htmlFor="movieDesc">Description of the movie: </label>
        <input className="input" type="text" name="movieDesc"></input>

        <label htmlFor="movieSeats">No. of seats : </label>
        <input type="number" name="movieSeats" className="input"></input>

        <label htmlFor="imageUrl">Image URL : </label>
        <input className="input" type="text" name="imageUrl"></input>
      </form>
      
      <div className="flex-item-footer"><div
        className="divider"
      ></div>
        <button
          className="button-cancel"
          onClick={() => {
            props.show(false);
          }}
        >
          Close
        </button>
        <button
          className="button-add-movie"
          onClick={() => {
            addMovie(newMovie);
            props.show(false);
          }}
        >
          Add Movie
        </button>
      </div>
      </div>
    </div>
  );
};

export default Modal;
