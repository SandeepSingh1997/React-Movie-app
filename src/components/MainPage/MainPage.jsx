import React, { Fragment, useReducer } from "react";
import MoviePage from "../MoviePage/MoviePage";
import Header from "../Header/Header";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import movieListReducer from "../Reducer/movieListReducer";
import context from "../context/context";

const MainPage = () => {
  const initialState = {
    MOVIES_LIST: null,
    moviesListToShow: null,
  };

  const [state, dispatch] = useReducer(movieListReducer, initialState);

  const uri = "https://api.tvmaze.com/shows";

  const fetchAllMovies = (uri) => {
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        let movieList = data.map((element) => {
          return {
            title: element.name,
            description: element.summary,
            imageUrl: element.image.medium,
            seats: element.weight,
          };
        });
        let allMoviesList = filterMovieListByName(movieList, "");
        dispatch({ type: "SAVE_AND_SHOW_ALL_MOVIES", payload: allMoviesList });
      })
      .catch((error) => console.error("Unable to get items.", error));
  };

  const filterMovieListByName = (movieList, searchName) => {
    let filteredMovieList = [];
    if (searchName === "") {
      filteredMovieList = movieList.slice(0, 20);
    } else {
      filteredMovieList = movieList.slice(0, 20).filter((movie) => {
        return movie.title.toLowerCase().includes(searchName.toLowerCase());
      });
    }
    return filteredMovieList;
  };

  const onSearchInputChange = (searchInput) => {
    let filteredMovieList = filterMovieListByName(
      state.MOVIES_LIST,
      searchInput
    );
    dispatch({ type: "SHOW_MOVIES", payload: filteredMovieList });
  };

  const onSortIncClicked = ()=>{
    let sortedMoviesList = [...state.moviesListToShow].sort((a,b)=>{
      return (a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    })
    dispatch({type:'SHOW_MOVIES', payload: sortedMoviesList}); 
  }

  const onSortDecClicked = ()=>{
    let sortedMoviesList = [...state.moviesListToShow].sort((a,b)=>{
      return (b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
    })
    dispatch({type:'SHOW_MOVIES', payload: sortedMoviesList}); 
  }

  const addMovie = (movie)=>{
    dispatch({type:"ADD_MOVIE", payload: movie});
  }

  if (state.MOVIES_LIST == null) {
    fetchAllMovies(uri);
  }

  return (
    <Fragment>
      {state.MOVIES_LIST == null ? null : (
        <context.Provider value={{onSearchInputChange: onSearchInputChange, addMovie : addMovie}}>
          <Header onSortIncClicked = {onSortIncClicked} onSortDecClicked = {onSortDecClicked}/>
        </context.Provider>
      )}

      {state.moviesListToShow == null ? null : (
        <MoviePage moviesList={state.moviesListToShow} />
      )}
      {/*<Pagination />
      <Footer /> */}
    </Fragment>
  );
};

export default MainPage;
