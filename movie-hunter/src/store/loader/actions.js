import { START_LOADER, STOP_LOADER } from './types';

export const startLoaderAction = () => ({ type: START_LOADER });
export const stopLoaderAction = () => ({ type: STOP_LOADER });
