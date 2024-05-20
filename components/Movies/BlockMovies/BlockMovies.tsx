import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Box, Grid, Pagination } from "@mantine/core";
import { MovieCard } from "../../MovieCard/MovieCard";
import { Genres, MoviesRes, MovieType } from "../../../types";

import styles from "./BlockMovies.module.css";

type Props = {
  dataMovies: MoviesRes;
  genres: Genres;
  activePage: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export function BlockMovies({
  dataMovies,
  genres,
  activePage,
  setPage,
}: Props) {
  return (
    <>
      <Grid columns={2} className={styles.moviesContainer}>
        {dataMovies.results.map((movieCard: MovieType) => (
          <MovieCard key={movieCard.id} movieCard={movieCard} genres={genres} />
        ))}
      </Grid>
      <Box className={styles.pagination}>
        <Link href={"/movies"}>
          <Pagination
            value={activePage}
            onChange={setPage}
            total={dataMovies.total_results}
            color="violet"
          />
        </Link>
      </Box>
    </>
  );
}
