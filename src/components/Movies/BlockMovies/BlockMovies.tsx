import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Pagination } from "@mantine/core";
import { MovieType, SearchQuery } from "../../../types/types";
import { MovieCard } from "../../MovieCard/MovieCard";
import { NoSuchFilms } from "../../NoSuchFilms/NoSuchFilms";

import styles from "./BlockMovies.module.css";

type Props = {
  movies: MovieType[];
  total_pages: number;
  searchQuery: SearchQuery;
  setSearchQuery: Dispatch<SetStateAction<SearchQuery>>;
  openModal: any;
};

export function BlockMovies({
  movies,
  total_pages,
  searchQuery,
  setSearchQuery,
  openModal,
}: Props) {
  const isMovies = !movies.length;
  return (
    <>
      <div className={styles.moviesContainer}>
        {isMovies ? (
          <NoSuchFilms />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              openModal={() => openModal(movie)}
            />
          ))
        )}
      </div>
      {total_pages > 1 && (
        <div className={styles.pagination}>
          <Link href={"/movies"}>
            <Pagination
              value={searchQuery.active_page}
              onChange={(page) =>
                setSearchQuery({ ...searchQuery, active_page: page })
              }
              total={total_pages}
              color="violet"
            />
          </Link>
        </div>
      )}
    </>
  );
}
