import { MovieType } from "../types";

export function filterMoviesDebounced(
  moviesStorage: MovieType[],
  search: string
) {
  const result: MovieType[] = [];
  moviesStorage.forEach(
    (movie) =>
      movie.user_rating !== 0 &&
      movie.user_rating !== null &&
      movie.original_title.toLowerCase().includes(search) &&
      result.push(movie)
  );
  return result;
}
