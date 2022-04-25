import React, { Fragment, useReducer, useState } from "react";
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

  const [currPageNum, setCurrPageNum] = useState(0);

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
      filteredMovieList = filterMovieListOnMoviesPerPage(movieList, movieList.length);
    } else {
      filteredMovieList = filterMovieListOnMoviesPerPage(movieList, movieList.length).filter((movie) => {
        return movie.title.toLowerCase().includes(searchName.toLowerCase());
      });
    }
    return filteredMovieList;
  };

  const filterMovieListOnMoviesPerPage = (movieList, noOfMoviesPerPage=5, pageNum = 1)=>{
    if(movieList.length >= noOfMoviesPerPage){
      let startIdx = (pageNum-1)*(noOfMoviesPerPage);
      let endIdx = (pageNum)*(noOfMoviesPerPage);
      return movieList.slice(startIdx,endIdx);
    }else{
      return movieList;
    }
  }

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

  const onNoOfMoviesSelected = (noOfMovies)=>{
    let moviesList = filterMovieListOnMoviesPerPage([...state.MOVIES_LIST], noOfMovies);
    dispatch({ type: "SHOW_MOVIES", payload: moviesList });
  }

  const getTotalNoOfPages=()=>{
    if(state.MOVIES_LIST != null){
      return Math.floor(state.MOVIES_LIST.length / state.moviesListToShow.length);
    }else{
      return 0;
    }
  }

  const onPageSelect = (pageNum)=>{
    let noOfMoviesPerPage = state.moviesListToShow.length;
    let moviesList = filterMovieListOnMoviesPerPage([...state.MOVIES_LIST],noOfMoviesPerPage, pageNum );
    dispatch({type:"SHOW_MOVIES", payload: moviesList});
    setCurrPageNum(pageNum);
  }

  if (state.MOVIES_LIST == null) {
    fetchAllMovies(uri);
  }

  return (
    <Fragment>
      {state.MOVIES_LIST == null ? null : (
        <context.Provider value={{onSearchInputChange: onSearchInputChange, addMovie : addMovie}}>
          <Header onSortIncClicked = {onSortIncClicked} onSortDecClicked = {onSortDecClicked} 
          onNoOfMoviesSelected ={onNoOfMoviesSelected} noOfAllMovies={state.MOVIES_LIST.length}/>
        </context.Provider>
      )}

      {state.moviesListToShow == null ? null : (
        <MoviePage moviesList={state.moviesListToShow} />
      )}
      <Pagination currPageNum={currPageNum} numOfPages={getTotalNoOfPages()} onPageSelect={onPageSelect}/>
      <Footer /> 
    </Fragment>
  );
};

export default MainPage;
