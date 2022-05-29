import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import './AddMovie.css'

const AddMovie = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="add-movie-btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        +
      </button>
      {show ? <Modal title="Add Movie" show={setShow} /> : null}
    </div>
  );
};

export default AddMovie;
