"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, ComboboxItem, Select, Text, Title } from "@mantine/core";
import { BlockMovies, MoviesSelectors } from "../../components";
import { request } from "../../utils";
import { allMoviesUrl, genresUrl } from "../../constants";
import styles from "./Movies.module.css";

export default function Movies() {
  const [activePage, setPage] = useState<number>(1);
  const [valueGenres, setValueGenres] = useState<{
    value: string;
    label: string;
  }>({ value: "", label: "" });
  const [valueReleaseYear, setValueReleaseYear] = useState<string>("");
  const [ratingMin, setRatingMin] = useState<string>("");
  const [ratingMax, setRatingMax] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useQuery({
    queryFn: () =>
      request(
        allMoviesUrl(
          activePage,
          valueReleaseYear,
          sortBy,
          ratingMax,
          ratingMin,
          valueGenres.value
        )
      ),
    queryKey: [
      "movies",
      activePage,
      valueReleaseYear,
      sortBy,
      valueGenres,
      ratingMin,
      ratingMax,
    ],
  });
  const { data: dataGenres } = useQuery({
    queryFn: () => request(genresUrl),
    queryKey: ["genres"],
  });

  if (isLoadingMovies) return <div>Loading...</div>;
  if (errorMovies) return <div>Error: {errorMovies.message}</div>;
  if (!dataMovies || !dataMovies.results) return <div>No data</div>;
  console.log(
    allMoviesUrl(
      activePage,
      valueReleaseYear,
      ratingMax,
      ratingMin,
      valueGenres.value
    )
  );
  return (
    <Box className={styles.container}>
      <MoviesSelectors
        dataGenres={dataGenres}
        valueGenres={valueGenres}
        setValueGenres={setValueGenres}
        valueReleaseYear={valueReleaseYear}
        setValueReleaseYear={setValueReleaseYear}
        ratingMin={ratingMin}
        setRatingMin={setRatingMin}
        ratingMax={ratingMax}
        setRatingMax={setRatingMax}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Title className={styles.title}>Movies</Title>
      <BlockMovies
        dataMovies={dataMovies}
        genres={dataGenres?.genres}
        activePage={activePage}
        setPage={setPage}
      />
    </Box>
  );
}
