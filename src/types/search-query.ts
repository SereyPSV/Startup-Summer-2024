import { Genre } from "./genre";

export interface SearchQuery {
  active_page: number;
  genres: Genre[];
  release_date: string | null;
  rating: { min: string; max: string };
  sort_by: string;
}
