import './MovieData.css';
import Card from '@mui/material/Card';
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';

const MovieData = ({
  movieData,
  handleHideData,
  handleShowRelatedBtn,
  showRelatedList,
}) => {
  return (
    <aside>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className='close-icon-wrapper'>
            <CardActionArea
              className='close-icon-action-wrapper'
              onClick={handleHideData}
            >
              <CloseIcon />
            </CardActionArea>
          </Typography>
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
            onClick={handleShowRelatedBtn}
          >
            {showRelatedList ? 'RESULT' : 'RELATED'}
          </Button>
        </CardActions>
      </Card>
    </aside>
  );
};

export default MovieData;
