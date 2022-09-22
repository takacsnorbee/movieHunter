import loaderReducer from '../loader/reducer';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import movieReducer from '../movieData/reducer';
import { fetchMovieDataAction } from '../movieData/actions';

describe('Reducers tests', () => {
  test('StartLoader', () => {
    expect(loaderReducer(undefined, startLoaderAction())).toEqual(true);
  });
  test('StopLoader', () => {
    expect(loaderReducer(undefined, stopLoaderAction())).toEqual(false);
  });
  test('StopLoader', () => {
    expect(
      movieReducer(
        undefined,
        fetchMovieDataAction({
          title: 'test1',
          genre: 'crime',
        })
      )
    ).toEqual({
      title: 'test1',
      genre: 'crime',
    });
  });
});
