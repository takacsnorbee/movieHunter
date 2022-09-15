import './MovieTile.css';

const MovieTile = ({ movie, handleClicOnTile }) => {
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
