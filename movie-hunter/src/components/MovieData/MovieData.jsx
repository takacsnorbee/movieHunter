import './MovieData.css';
import Button from '../../common/Button/Button';

const MovieData = ({ movieData, handleHideData }) => {
  return (
    <aside>
      <p>{movieData.title}</p>
      <p>{movieData.actors}</p>
      <p>{movieData.details}</p>
      <p>{movieData.genre}</p>
      <p>{movieData.imdbRatings}</p>
      <p>{movieData.released}</p>
      {movieData.imdbID && (
        <a
          href={`https://www.imdb.com/title/${movieData.imdbID}/`}
          target='_blank'
          rel='noreferrer'
        >
          IMDB
        </a>
      )}
      {movieData.wikiID && (
        <a
          href={`https://en.wikipedia.org/?curid=${movieData.wikiID}`}
          target='_blank'
          rel='noreferrer'
        >
          WIKIPEDIA
        </a>
      )}
      <Button
        className='close-panel-btn'
        handleClick={handleHideData}
        title='Close'
      />
    </aside>
  );
};

export default MovieData;
