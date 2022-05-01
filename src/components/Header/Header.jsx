import React, { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddMovie from "../AddMovie/AddMovie";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="sticky-header">
        <div className="flex-container-header">
          <SearchBar />
          <h2 className="the-movie-ranch-title">The Movie Ranch</h2>
          <div className="sort-buttons">
            <button className="sort-az-button" onClick={props.onSortIncClicked}>
              A-Z
            </button>
            <button className="sort-za-button" onClick={props.onSortDecClicked}>
              Z-A
            </button>
          </div>
          <label htmlFor="noOfMovies" className="select-movie-label">
            Movies on Page :
          </label>
          <select
            className="no-of-movies-selector"
            name="noOfMovies"
            placeholder="Movies on Page"
            onChange={(event)=>{props.onNoOfMoviesSelected(event.target.value)}}
          > <option value={props.noOfAllMovies}>All </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
          <AddMovie />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
