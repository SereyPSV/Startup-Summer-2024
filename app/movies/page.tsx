"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader, Title } from "@mantine/core";
import { BlockMovies, ModalWindow, MoviesSelectors } from "../../components";
import { request } from "../../utils";
import { allMoviesUrl, genresUrl, searchQueryInit } from "../../constants";
import { MovieType, SearchQuery } from "../../types";
import {
  readLocalStorageValue,
  useDisclosure,
  useLocalStorage,
} from "@mantine/hooks";
import { transformMovies } from "../../transformers/transformMovies";
import styles from "./Movies.module.css";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>(searchQueryInit);
  const [localStorage, setLocalStorage] = useLocalStorage<MovieType[] | null>({
    key: "UserRatings",
    defaultValue: readLocalStorageValue({ key: "UserRatings" }) || [],
  });

  const [opened, { open, close }] = useDisclosure(false);

  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    setModal(item);
    open();
  };

  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useQuery({
    queryFn: () => request(allMoviesUrl(searchQuery)),
    queryKey: ["movies", searchQuery],
  });
  const { data: dataGenres } = useQuery({
    queryFn: () => request(genresUrl),
    queryKey: ["genres"],
  });

  if (isLoadingMovies)
    return (
      <div className={styles.loader}>
        <Loader color="violet" />
      </div>
    );
  if (errorMovies) return <div>Error: {errorMovies.message}</div>;
  if (!dataMovies || !dataMovies.results) return <div>No data</div>;

  const moviesRated: MovieType[] =
    readLocalStorageValue({
      key: "UserRatings",
    }) || null;

  const moviesLoad: MovieType[] = transformMovies(
    dataMovies?.results,
    dataGenres?.genres
  );

  const ratingsMap: { [key: number]: number } = moviesRated.reduce<{
    [key: number]: number;
  }>((map, movie) => {
    map[movie?.id] = movie?.user_rating;
    return map;
  }, {});

  if (Array.isArray(moviesLoad)) {
    const movies: MovieType[] = moviesLoad?.map((movie) =>
      ratingsMap[movie.id] !== undefined
        ? { ...movie, user_rating: ratingsMap[movie.id] || 0 }
        : { ...movie, user_rating: 0 }
    );
    return (
      <div className={styles.container}>
        <Title className={styles.title}>Movies</Title>
        <MoviesSelectors
          dataGenres={dataGenres}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <BlockMovies
          movies={movies}
          total_pages={dataMovies?.total_results}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          openModal={openModal}
        />
        <ModalWindow opened={opened} close={close} modal={modal} />
      </div>
    );
  }
}
