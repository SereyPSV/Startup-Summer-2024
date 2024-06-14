import { Genre } from "./genre";
import { MovieTypeRes } from "./movie-type-res";

export type CombinedMovieType = MovieTypeRes & {
  genres?: Genre[];
  user_rating?: number;
};
