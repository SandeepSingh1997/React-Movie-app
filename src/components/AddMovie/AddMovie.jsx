import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";

const AddMovie = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
      <button  onClick={()=>{setShow(!show)}}>
        Add movie
      </button>
        {show ? <Modal title="Add Movie" show={setShow}/>: null }
    </div>
  );
};

export default AddMovie;
