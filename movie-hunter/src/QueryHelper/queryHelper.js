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
