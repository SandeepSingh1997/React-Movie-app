import React, { Fragment, useState, useContext } from "react";
import searchBarContext from "../context/searchBarContext";

const SearchBar = () => {
  const onSearchInputChange = useContext(searchBarContext);

  const [searchMovieName, setSearchMovieName] = useState('');
  
  const searchBarChange = (event)=>{
    let inputText = event.target.value;
    setSearchMovieName(inputText);
    onSearchInputChange(inputText);
  }

  return (
    <Fragment>
      <input
        type="text"
        className="searchBar"
        placeholder="Search Movie"
        value = {searchMovieName}
        onChange={searchBarChange}
      />
    </Fragment>
  );
};
export default SearchBar;
