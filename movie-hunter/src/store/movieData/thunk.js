import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import { fetchMovieDataAction } from './actions';

export const fetchMovieData = (title) => async (dispatch) => {
  dispatch(startLoaderAction());
  const resultWiki = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${title.replace(
      ' ',
      '%20'
    )}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const resultIMDB = await fetch(
    `https://www.omdbapi.com/?t=${title.replace(' ', '+')}&apikey=2514afb1`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  console.log(resultIMDB);
  if (resultIMDB.Title) {
    const checkWikiPageID = resultWiki.query.search.filter(
      (movie) => movie.title === resultIMDB.Title
    );
    const movieData = {
      title: resultIMDB.Title,
      genre: resultIMDB.Genre,
      actors: resultIMDB.Actors,
      imdbID: resultIMDB.imdbID,
      wikiID: checkWikiPageID.length > 0 ? checkWikiPageID[0].pageid : '',
      imdbRatings: resultIMDB.imdbRating,
      released: resultIMDB.Released,
      details: resultIMDB.Plot,
    };
    dispatch(fetchMovieDataAction(movieData));
  } else {
    dispatch(fetchMovieDataAction({ title: 'No Data Found' }));
  }
  dispatch(stopLoaderAction());
};
