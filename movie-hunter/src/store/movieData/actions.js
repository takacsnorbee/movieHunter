import { FETCH_MOVIE_DATA, CLEAR_MOVE_DATA } from './types';

export const fetchMovieDataAction = (payload) => ({
  type: FETCH_MOVIE_DATA,
  payload,
});

export const clearMovieDataAction = (payload) => ({
  type: CLEAR_MOVE_DATA,
  payload,
});
