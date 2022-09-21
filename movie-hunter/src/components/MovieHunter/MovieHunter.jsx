import SearchField from '../../common/SearchField/SearchField';
import Button from '../../common/Button/Button';
import MovieList from '../MovieList/MovieList';
import Loader from '../../common/Loader/Loader';
import MovieData from '../MovieData/MovieData';
import Error from '../../common/Error/Error';
import './MovieHunter.css';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { filmQuery, relatedFilmQuery } from '../../QueryHelper/queryHelper';
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
  const [showRelatedList, setShowRelatedList] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [queryFeeder, setQueryFeeder] = useState('');
  const [relatedQueryFeeder, setRelatedQueryFeeder] = useState(0);
  const [movies, setMovies] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [getMovies, { loading, error }] = useLazyQuery(filmQuery(queryFeeder), {
    onCompleted: (data) => {
      setMovies(data.searchMovies);
    },
  });
  const [getRelatedMovies, { loading: relatedLoading, error: relatedError }] =
    useLazyQuery(relatedFilmQuery(relatedQueryFeeder), {
      onCompleted: (data) => {
        setRelatedMovies(data.discoverMovies);
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

  const handleClicOnTile = (title, genres) => {
    setRelatedQueryFeeder(genres.map((genre) => genre.id));
    dispatch(fetchMovieData(title));
    setHideDetails(true);
  };

  const handleShowRelatedBtn = () => {
    getRelatedMovies();
    setShowRelatedList((prevState) => !prevState);
  };

  return (
    <>
      {(loading || relatedLoading || isLoading) && <Loader />}
      {!loading && error && <Error errorMsg={error.message} />}
      {!loading && relatedError && <Error errorMsg={relatedError.message} />}
      {!loading && !error && !relatedError && (
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
            <MovieData
              movieData={movieData}
              handleHideData={handleHideData}
              handleShowRelatedBtn={handleShowRelatedBtn}
              showRelatedList={showRelatedList}
            />
          )}
          {showRelatedList ? (
            <MovieList
              movies={relatedMovies}
              handleClicOnTile={handleClicOnTile}
            />
          ) : (
            <MovieList movies={movies} handleClicOnTile={handleClicOnTile} />
          )}
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
