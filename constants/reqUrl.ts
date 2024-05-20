export const MovieByIdUrl =
  "https://api.themoviedb.org/3/movie/${ctx.query.movieId}?language=en-US";

export const genresUrl =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export const allMoviesUrl = (page: number) =>
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

export const selMovieUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

export const selYoutubeKeyUrl = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
