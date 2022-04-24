import React, { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddMovie from "../AddMovie/AddMovie";
import './Header.css'

const Header = (props) => {
  return (
    <Fragment>
      <div className="sticky-header">
      <div className="flex-container-header">
        <SearchBar />
        <h2 className="the-movie-ranch-title">The Movie Ranch</h2>
        <div >
          <button
          className="sort-button"
            onClick={props.onSortIncClicked}
          >
            A-Z
          </button>
          <button
          className="sort-button"
            onClick={props.onSortDecClicked}
          >
            Z-A
          </button>
        </div>
        <label htmlFor="noOfMovies" className="select-movie-label">Movies on Page :</label>
        <select className="no-of-movies-selector" name="noOfMovies" placeholder="Movies on Page">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <AddMovie />
      </div>
      </div>
    </Fragment>
  );
};

export default Header;
