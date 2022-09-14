import { START_LOADER, STOP_LOADER } from './types';

const loaderInitialState = false;

const loaderReducer = (state = loaderInitialState, actions) => {
  switch (actions.type) {
    case START_LOADER:
      return true;
    case STOP_LOADER:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
