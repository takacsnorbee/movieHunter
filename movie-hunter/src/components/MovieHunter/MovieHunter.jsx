import SearchField from '../../common/SearchField/SearchField';
import Button from '../../common/Button/Button';
import MovieList from '../MovieList/MovieList';
import Loader from '../../common/Loader/Loader';
import MovieData from '../MovieData/MovieData';
import './MovieHunter.css';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { filmQuery } from '../../QueryHelper/queryHelper';
import { useSelector } from 'react-redux';
import { getLoader, getMovieData } from '../../store/selectors';

const MovieHunter = () => {
  const isLoading = useSelector(getLoader);
  const movieData = useSelector(getMovieData);
  const [movieTitle, setMovieTitle] = useState('');
  const [queryFeeder, setQueryFeeder] = useState('');
  const [movies, setMovies] = useState([]);
  const [getMovies, { loading, error }] = useLazyQuery(filmQuery(queryFeeder), {
    onCompleted: (data) => {
      setMovies(data.searchMovies);
    },
  });

  const handleSearchField = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSearchButton = () => {
    if (movieTitle.length > 2) {
      setQueryFeeder(movieTitle.toLowerCase());
      getMovies();
    }
  };

  return (
    <>
      {loading && <Loader />}
      {isLoading && <Loader />}
      {!loading && error && <div>{error.message}</div>}
      {!loading && !error && (
        <>
          <div className='movie-hunter-container'>
            <section>
              <h1>Movie Hunter</h1>
              <SearchField
                handleSearchField={handleSearchField}
                className='movie-hunter-search-input'
              />
              <Button
                handleClick={handleSearchButton}
                title='Search'
                className='movie-hunter-search-btn'
              />
            </section>
            <MovieData movieData={movieData} />
            <MovieList movies={movies} />
          </div>
        </>
      )}
    </>
  );
};

export default MovieHunter;

/*
 * I use queryFeeder to avoid rerender when input field change - useLazyQuary trigger rerender if dependency change
 * movies useState -> handle undefined and missing searchMovies property at first render
 */
