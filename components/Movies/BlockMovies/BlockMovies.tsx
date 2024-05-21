import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Box, Grid, Pagination } from "@mantine/core";
import { MovieCard } from "../../MovieCard/MovieCard";
import { Genres, MoviesRes, MovieType } from "../../../types";

import styles from "./BlockMovies.module.css";
import { NoSuchFilms } from "../../NoSuchFilms/NoSuchFilms";

type Props = {
  dataMovies: MoviesRes;
  genres: Genres;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  openModal: any;
};

export function BlockMovies({
  dataMovies,
  genres,
  activePage,
  setActivePage,
  openModal,
}: Props) {
  const isMovies = !dataMovies.results.length;
  return (
    <>
      <Grid columns={2} className={styles.moviesContainer}>
        {isMovies ? (
          <NoSuchFilms />
        ) : (
          dataMovies.results.map((movieCard: MovieType) => (
            <MovieCard
              key={movieCard.id}
              movieCard={movieCard}
              genres={genres}
              openModal={openModal}
            />
          ))
        )}
      </Grid>
      {dataMovies.total_pages > 1 && (
        <Box className={styles.pagination}>
          <Link href={"/movies"}>
            <Pagination
              value={activePage}
              onChange={setActivePage}
              total={dataMovies.total_results}
              color="violet"
            />
          </Link>
        </Box>
      )}
    </>
  );
}
