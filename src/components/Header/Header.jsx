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
        <AddMovie />
      </div>
      </div>
    </Fragment>
  );
};

export default Header;
