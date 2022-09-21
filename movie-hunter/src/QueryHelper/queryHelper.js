import { gql } from '@apollo/client';

export const filmQuery = (title) => {
  const FILMS_QUERY = gql`
    {
      searchMovies(query: "${title}") {
        id
        name
        score
        genres {
            id
            name
        }
        overview
        releaseDate
      }
    }
  `;
  return FILMS_QUERY;
};

export const relatedFilmQuery = (genreIDs) => {
  const FILMS_QUERY = gql`
  {
      discoverMovies(filter: { withGenres: { include: [${genreIDs}] } }) {
        id
        name
        score
        genres {
            id
            name
        }
        overview
        releaseDate
      }
    }
  `;
  return FILMS_QUERY;
};
