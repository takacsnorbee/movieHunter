import './MovieData.css';
// import Button from '../../common/Button/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

const MovieData = ({ movieData, handleHideData }) => {
  return (
    <aside>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            className='card-date-wrapper'
            color='text.secondary'
            gutterBottom
          >
            <span>{movieData.genre}</span>
            <span>{movieData.released}</span>
          </Typography>
          <Typography variant='h5' component='div'>
            {movieData.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {movieData.actors}
          </Typography>
          <Typography sx={{ fontSize: 14 }} variant='body2'>
            <StarIcon className='star-icon' /> {movieData.imdbRatings}
          </Typography>
        </CardContent>
        <CardActions className='card-link-btns-wrapper'>
          {movieData.imdbID && (
            <Button
              className='card-link-btns'
              target='_blank'
              variant='contained'
              href={`https://www.imdb.com/title/${movieData.imdbID}/`}
            >
              IMDB
            </Button>
          )}
          {movieData.wikiID && (
            <Button
              className='card-link-btns'
              target='_blank'
              variant='contained'
              href={`https://en.wikipedia.org/?curid=${movieData.wikiID}`}
            >
              WIKIPEDIA
            </Button>
          )}
          <Button
            className='card-link-btns'
            variant='contained'
            onClick={handleHideData}
          >
            CLOSE
          </Button>
        </CardActions>
      </Card>
      {/* <p>{movieData.title}</p>
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
      /> */}
    </aside>
  );
};

export default MovieData;
