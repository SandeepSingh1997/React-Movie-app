const movieListReducer = (state, action)=>{
    let movieList = [];
    switch(action.type){
        case 'SAVE_AND_SHOW_ALL_MOVIES': 
            let allMoviesList = action.payload ;
            return {MOVIES_LIST : [...allMoviesList], moviesListToShow : [...allMoviesList]};

        case 'SHOW_MOVIES':
            let moviesList = action.payload;
            return{MOVIES_LIST : [...state.MOVIES_LIST], moviesListToShow: [...moviesList]};
        
        case 'ADD_MOVIE': 
            let movie = action.payload ;
            return { MOVIES_LIST : [...state.MOVIES_LIST], moviesListToShow : [...state.moviesListToShow, movie]};

        case 'SHOW_SELECTED_MOVIE':
            let selectedMovie = action.payload;
            return {selectedMovie : selectedMovie};
        
        case 'SHOW_MOVIES_IN_MOVIES_PAGE':
            let moviesListInMainPage = action.payload;
            console.log("dispatch called", moviesListInMainPage);
            return{movieItemsList: moviesListInMainPage, selectedMovie: moviesListInMainPage[0]};

        default: 
            return state;
    }
} 

export default movieListReducer;