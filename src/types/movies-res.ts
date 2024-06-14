import { MovieType } from "./movie-type";

export interface MoviesRes {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
