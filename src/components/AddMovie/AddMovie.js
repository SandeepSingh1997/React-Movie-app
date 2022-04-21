import React,{useState} from "react";
import { Button, Modal } from "bootstrap";

const AddMovie = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}> 
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {/* <form>
               <label for="movieTitle">Title : </label>
               <input type="text" name="movieTitle"></input>

               <label for="movieDesc">Description : </label>
               <input type="text" name="movieDesc"></input>

               <label for="movieSeats">No. of seats : </label>
               <input type="number" name="movieSeats"></input>
           </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default AddMovie;
