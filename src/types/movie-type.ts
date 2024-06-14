import { Genre } from "./genre";

export interface MovieType {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  budget: number;
  revenue: number;
  overview: string;
  genres: Genre[];
  popularity: number;
  videos: "[]";
  original_language: string;
  user_rating: number;
}
