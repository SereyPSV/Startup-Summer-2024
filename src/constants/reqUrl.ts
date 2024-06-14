import { SearchQuery } from "../types/types";

export const genresUrl =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export const allMoviesUrl = (query: SearchQuery) => {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_original_language=en&page=${query.active_page}&primary_release_year=${query.release_date}&vote_average.gte=${query.rating.min}&vote_average.lte=${query.rating.max}&sort_by=${query.sort_by}`;
};

export const selMovieUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

export const selYoutubeKeyUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const ratedFilmsUrl =
  "https://api.themoviedb.org/3/find/external_id?external_source=";
