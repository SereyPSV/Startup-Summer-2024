import { Dispatch, SetStateAction } from "react";

export type MovieTypeRes = {
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
};

export type MovieType = {
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
};

export type CombinedMovieType = MovieTypeRes & {
  genres?: Genre[];
  user_rating?: number;
};

export type MoviesRes = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export interface Genre {
  id: number | null;
  name: string | null;
}

export type Company = { id: number; logo_path: string; name: string };

export type SearchQuery = {
  active_page: number;
  genres: Genre[];
  release_date: string | null;
  rating: { min: string; max: string };
  sort_by: string;
};

//---------------------
export interface ValueStateObject {
  value: string;
  label: string;
}

interface ValueStateObjectProps {
  value: ValueStateObject;
  setValue: Dispatch<SetStateAction<ValueStateObject>>;
}

interface ValueStateStringProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

//--------------
