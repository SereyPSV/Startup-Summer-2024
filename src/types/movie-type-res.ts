import { Company } from "./company";

export interface MovieTypeRes {
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
  genre_ids: number[];
  popularity: number;
  videos: "[]";
  original_language: string;
  production_companies?: Company[];
  user_rating?: number | undefined;
}
