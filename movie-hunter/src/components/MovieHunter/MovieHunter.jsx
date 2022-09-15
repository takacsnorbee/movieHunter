import SearchField from '../../common/SearchField/SearchField';
import Button from '../../common/Button/Button';
import MovieList from '../MovieList/MovieList';
import Loader from '../../common/Loader/Loader';
import MovieData from '../MovieData/MovieData';
import Error from '../../common/Error/Error';
import './MovieHunter.css';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { filmQuery } from '../../QueryHelper/queryHelper';
import { useSelector } from 'react-redux';
import { getLoader, getMovieData } from '../../store/selectors';
import { clearMovieDataAction } from '../../store/movieData/actions';
import { useDispatch } from 'react-redux';
import { fetchMovieData } from '../../store/movieData/thunk';
import { useEffect } from 'react';

const MovieHunter = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoader);
  const movieData = useSelector(getMovieData);
  const [hideDetails, setHideDetails] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [queryFeeder, setQueryFeeder] = useState('');
  const [movies, setMovies] = useState([]);
  const [getMovies, { loading, error }] = useLazyQuery(filmQuery(queryFeeder), {
    onCompleted: (data) => {
      setMovies(data.searchMovies);
    },
  });

  useEffect(() => {
    handleHideData();
  }, [movies]);

  const handleSearchField = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSearchButton = (event) => {
    if (
      (event.type === 'click' || event.key === 'Enter') &&
      movieTitle.length > 2
    ) {
      setQueryFeeder(movieTitle.toLowerCase());
      getMovies();
    }
  };

  const handleHideData = () => {
    setHideDetails(false);
    dispatch(clearMovieDataAction());
  };

  const handleClicOnTile = (title) => {
    dispatch(fetchMovieData(title));
    setHideDetails(true);
  };

  return (
    <>
      {loading && <Loader />}
      {isLoading && <Loader />}
      {!loading && error && <Error errorMsg={error.message} />}
      {!loading && !error && (
        <div className='movie-hunter-container'>
          <section>
            <h1>Movie Hunter</h1>
            <SearchField
              handleSearchField={handleSearchField}
              handleEnterKey={handleSearchButton}
              className='movie-hunter-search-input'
            />
            <Button
              handleClick={handleSearchButton}
              title='Search'
              className='movie-hunter-search-btn'
            />
          </section>
          {hideDetails && (
            <MovieData movieData={movieData} handleHideData={handleHideData} />
          )}
          <MovieList movies={movies} handleClicOnTile={handleClicOnTile} />
        </div>
      )}
    </>
  );
};

export default MovieHunter;

/*
 * I use queryFeeder to avoid rerender when input field change - useLazyQuary trigger rerender if dependency change
 * movies useState -> handle undefined and missing searchMovies property at first render
 */
