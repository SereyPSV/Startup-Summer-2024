"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Title } from "@mantine/core";
import { BlockMovies, MoviesSelectors } from "../../components";
import { request } from "../../utils";
import { allMoviesUrl, genresUrl } from "../../constants";
import styles from "./Movies.module.css";

export default function Movies() {
  const [activePage, setPage] = useState<number>(1);

  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useQuery({
    queryFn: () => request(allMoviesUrl(activePage)),
    queryKey: ["movies", activePage],
  });
  const { data: dataGenres } = useQuery({
    queryFn: () => request(genresUrl),
    queryKey: ["genres"],
  });

  if (isLoadingMovies) return <div>Loading...</div>;
  if (errorMovies) return <div>Error: {errorMovies.message}</div>;
  if (!dataMovies || !dataMovies.results) return <div>No data</div>;

  return (
    <Box className={styles.container}>
      <MoviesSelectors />
      <Title className={styles.title}>Movies</Title>
      <BlockMovies
        dataMovies={dataMovies}
        genres={dataGenres.genres}
        activePage={activePage}
        setPage={setPage}
      />
    </Box>
  );
}
