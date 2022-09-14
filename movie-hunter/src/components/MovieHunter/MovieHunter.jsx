import SearchField from '../../common/SearchField/SearchField';
import Button from '../../common/Button/Button';
import MovieList from '../MovieList/MovieList';
import './MovieHunter.css';
import { useState } from 'react';

const MovieHunter = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSearchField = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSearchButton = () => {
    console.log(movieTitle);
  };

  return (
    <main>
      <SearchField handleSearchField={handleSearchField} />
      <Button handleSearchButton={handleSearchButton} />
      <MovieList />
    </main>
  );
};

export default MovieHunter;
