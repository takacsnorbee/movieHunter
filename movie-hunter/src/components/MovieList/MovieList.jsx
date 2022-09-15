import MovieTile from '../MovieTile/MovieTile';
import './MovieList.css';

const MovieList = ({ movies, handleClicOnTile }) => {
  return (
    <section className='movie-list-container'>
      {movies.map((movie) => (
        <MovieTile
          key={movie.id}
          movie={movie}
          handleClicOnTile={handleClicOnTile}
        />
      ))}
    </section>
  );
};

export default MovieList;
