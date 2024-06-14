import { MovieType } from "../types/types";

export function filterMoviesDebounced(movies: MovieType[], search: string) {
  const result: MovieType[] = [];
  for (const movie of movies) {
    if (
      movie.user_rating !== 0 &&
      movie.user_rating !== null &&
      movie.original_title.toLowerCase().includes(search)
    ) {
      result.push(movie);
    }
  }
  return result;
}
