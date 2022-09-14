import { combineReducers } from 'redux';
import loaderReducer from './loader/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

export default rootReducer;
