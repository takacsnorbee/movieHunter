import './MovieData.css';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { clearMovieDataAction } from '../../store/movieData/actions';

const MovieData = ({ movieData }) => {
  const dispatch = useDispatch();
  const handleHideData = () => {
    console.log('hide');
    dispatch(clearMovieDataAction());
  };

  return (
    <aside>
      <p>{movieData.title}</p>
      <p>{movieData.actors}</p>
      <p>{movieData.details}</p>
      <p>{movieData.genre}</p>
      <p>{movieData.imdbRatings}</p>
      <p>{movieData.released}</p>
      <a
        href={`https://www.imdb.com/title/${movieData.imdbID}/`}
        target='_blank'
        rel='noreferrer'
      >
        IMDB
      </a>
      <a
        href={`https://en.wikipedia.org/?curid=${movieData.wikiID}`}
        target='_blank'
        rel='noreferrer'
      >
        WIKIPEDIA
      </a>
      <Button
        className='close-panel-btn'
        handleClick={handleHideData}
        title='Close'
      />
    </aside>
  );
};

export default MovieData;
