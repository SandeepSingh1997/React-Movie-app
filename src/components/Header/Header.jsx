import React, { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddMovie from "../AddMovie/AddMovie";

const Header = (props) => {
  return (
    <Fragment>
      <SearchBar />
      <div className="grid-container-buttons">
        <button
          className="sort-btn grid-item-inc-btn"
          onClick={props.onSortIncClicked}
        >
          A-Z
        </button>
        <button
          className="sort-btn grid-item-dec-btn"
          onClick={props.onSortDecClicked}
        >
          Z-A
        </button>
      </div>
      <AddMovie />
    </Fragment>
  );
};

export default Header;
