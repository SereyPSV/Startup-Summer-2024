import { SearchQuery } from "../types";

export const MovieByIdUrl =
  "https://api.themoviedb.org/3/movie/${ctx.query.movieId}?language=en-US";

export const genresUrl =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export const allMoviesUrl = (query: SearchQuery) => {
  console.log("query", query);
  // const genres = query.genres.map((genre) => genre.label);
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_original_language=en&page=${query.active_page}&primary_release_year=${query.release_date}&vote_average.gte=${query.rating.min}&vote_average.lte=${query.rating.max}&sort_by=${query.sort_by}`;
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_original_language=en-&page=${query.active_page}&primary_release_year=${query.release_date}&sort_by=popularity.desc&vote_average.gte=${query.rating.min}&vote_average.lte=${query.rating.max}`;
};

export const selMovieUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

export const selYoutubeKeyUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
