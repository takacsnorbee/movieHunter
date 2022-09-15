import { FETCH_MOVIE_DATA, CLEAR_MOVE_DATA } from './types';

const initialMovieData = {
  title: '',
  genre: '',
  actors: '',
  imdbID: '',
  wikiID: '',
  imdbRatings: '',
  released: '',
  details: '',
};

const movieReducer = (state = initialMovieData, actions) => {
  switch (actions.type) {
    case FETCH_MOVIE_DATA:
      console.log(actions.payload);
      return { ...actions.payload };
    case CLEAR_MOVE_DATA:
      return { ...initialMovieData };
    default:
      return state;
  }
};

export default movieReducer;
