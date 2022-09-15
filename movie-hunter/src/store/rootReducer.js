import { combineReducers } from 'redux';
import loaderReducer from './loader/reducer';
import movieReducer from './movieData/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  movieData: movieReducer,
});

export default rootReducer;
