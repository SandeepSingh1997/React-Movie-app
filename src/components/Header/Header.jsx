import React, { Fragment, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import AddMovie from "../AddMovie/AddMovie";
import "./Header.css";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";

const Header = (props) => {
  let [showLogin, setShowLogin] = useState(false);
  return (
    <Fragment>
        <div className="header sticky flex-col">
          
          <div className="flex-row">
        
            <div className="dropdown">
                <button className="btn">Filter</button>
              <div className="dropdown-content flex-col">
                <Preferences/>
              </div>
            </div>
            
            <h2 className="the-movie-ranch-title">TheMovieRanch</h2>

          </div>

          <div className="flex-row">
      
            <SearchBar />

            <AddMovie />

            <button className="btn" onClick={() => setShowLogin(!showLogin)}>
              login
            </button>

            {showLogin ? <Login setShowLogin={setShowLogin}/> : null}

          </div>
        </div>
    </Fragment>
  );
};

export default Header;
