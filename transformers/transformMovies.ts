import { MovieTypeRes } from "../types";

export function transformMovies(moviesArr: any, genresArr: any) {
  if (moviesArr && genresArr) {
    return moviesArr.map((movie: MovieTypeRes) => ({
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      runtime: "",
      budget: "",
      revenue: "",
      overview: movie.overview,
      genres: movie.genre_ids?.map((id: any) => ({
        id: id,
        name: findGenreName(id, genresArr),
      })),
      popularity: movie.popularity,
      videos: "[]",
      original_language: movie.original_language,
      user_rating: 0,
    }));
  } else {
    return {
      id: "",
      original_title: "",
      poster_path: "",
      release_date: "",
      vote_average: "",
      vote_count: "",
      runtime: "",
      budget: "",
      revenue: "",
      overview: "",
      genres: [{ id: null, name: "" }],
      popularity: "",
      videos: "[]",
      original_language: "",
      user_rating: 0,
    };
  }
}
function findGenreName(genreId: any, genreArr: any) {
  const genre = genreArr.find((genre: any) => genre.id === genreId);
  return genre ? genre.name : "";
}
export function transformMovie(movie: any) {
  if (movie) {
    return {
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      runtime: movie.runtime,
      budget: movie.budget,
      revenue: movie.revenue,
      overview: movie.overview,
      genres: movie.genres,
      popularity: movie.popularity,
      videos: movie.videos,
      original_language: movie.original_language,
      production_companies: movie.production_companies,
      user_rating: movie.user_rating,
    };
  } else {
    return {
      id: "",
      original_title: "",
      poster_path: "",
      release_date: "",
      vote_average: "",
      vote_count: "",
      runtime: "",
      budget: "",
      revenue: "",
      overview: "",
      genres: [{ id: null, name: "" }],
      popularity: "",
      videos: "[]",
      original_language: "",
      production_companies: [
        { id: null, logo_path: "", name: "", origin_country: "" },
      ],
    };
  }
}
