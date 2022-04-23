import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import movieContext from "../context/movieContext";

const Modal = props => {

  const onMovieAddUpdate = useContext(movieContext);

  const [newMovie,setNewMovie] = useState({
      title:'',
      description:'',
      imageUrl:'',
      seats: ''
  })  

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const handleChange = (event) => {
      const field = event.target.name;
      if(field === 'movieTitle'){
        setNewMovie({...newMovie,title: event.target.value});
      }
      else if(field === 'movieDesc'){
          setNewMovie({...newMovie,description: event.target.value});
      }
      else if(field === 'movieSeats'){
          setNewMovie({...newMovie,seats: event.target.value})
      }
      else if(field === 'imageUrl'){
        setNewMovie({...newMovie,imageUrl: event.target.value})
      }
  }

  const submitMovie = (e) => {
      onMovieAddUpdate(newMovie);
;  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
          <form className="form-body" onChange={handleChange}>
               <label htmlFor="movieTitle">Title of the movie: </label>
               <input className="form-input" type="text" name="movieTitle"></input>
            
               <label htmlFor="movieDesc">Description of the movie: </label>
               <input className="form-input" type="text" name="movieDesc"></input>

               <label htmlFor="movieSeats">No. of seats : </label>
               <input className="form-input" type="number" name="movieSeats"></input>

               <label htmlFor="imageUrl">Image URL : </label>
               <input className="form-input" type="text" name="imageUrl"></input>
           </form>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
            <button onClick={submitMovie} className="button">
              Add Movie
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
