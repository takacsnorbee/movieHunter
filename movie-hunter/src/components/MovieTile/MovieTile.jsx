import './MovieTile.css';
import { fetchMovieData } from '../../store/movieData/thunk';
import { useDispatch } from 'react-redux';

const MovieTile = ({ movie }) => {
  const dispatch = useDispatch();

  const handleClicOnTile = (title) => {
    console.log('tile clicked : ', title);
    dispatch(fetchMovieData(title));
  };

  return (
    <div
      className='movie-tile-wrapper'
      onClick={() => handleClicOnTile(movie.name)}
    >
      {movie.name} - {movie.score} - {movie.genres.name}
    </div>
  );
};

export default MovieTile;
