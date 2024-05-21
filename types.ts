import { Dispatch, SetStateAction } from "react";

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: Genres;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  runtime: number;
  budget: number;
  revenue: number;
};

export type MoviesRes = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type Genre = { id: number; name: string };

export type Genres = Genre[];

export type Company = { id: number; logo_path: string; name: string };

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
