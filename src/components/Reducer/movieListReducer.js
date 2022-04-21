const movieListReducer = (state, action)=>{
    let movieList = [];
    switch(action.type){
        case 'SHOW_MOVIES': 
            movieList = action.payload ;
            return {selectedMovie : state.selectedMovie, movieItemsList : movieList};
        
        case 'ADD_MOVIE': 
            let movie = action.payload ;
            return {selectedMovie : state.selectedMovie, movieItemsList : [...state.movieItemsList, movie]};

        default: 
            return state;
    }
} 

export default movieListReducer;