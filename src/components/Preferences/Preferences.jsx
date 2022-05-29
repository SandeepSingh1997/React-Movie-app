import React, { useContext } from "react";
import "./Preferences.css";
import context from "../context/context";
import AddMovie from "../AddMovie/AddMovie";

const Preferences = (props) => {
  const {onSortIncClicked} = useContext(context);
  const {onSortDecClicked} = useContext(context);
  const {onNoOfMoviesSelected} = useContext(context);
  const {noOfAllMovies} = useContext(context);
  return (
    <div className="preferences-flex-container">
      <div className="select-div">
        <label htmlFor="noOfMovies" className="select-movie-label">
          Movies per Page :
        </label>
        <select
          className="no-of-movies-selector"
          name="noOfMovies"
          placeholder="Movies on Page"
          onChange={(event) => {
            onNoOfMoviesSelected(event.target.value);
          }}
        >
          {" "}
          <option value={noOfAllMovies}>All </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>
      </div>

      <div className="sort-buttons">
        <button className="sort-az-button" onClick={onSortIncClicked}>
          A-Z
        </button>
        <button className="sort-za-button" onClick={onSortDecClicked}>
          Z-A
        </button>
      </div>
    </div>
  );
};
export default Preferences;
