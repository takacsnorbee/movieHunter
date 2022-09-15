import MovieTile from '../MovieTile/MovieTile';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <section className='movie-list-container'>
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MovieList;
