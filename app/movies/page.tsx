"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader, Title } from "@mantine/core";
import { BlockMovies, ModalWindow, MoviesSelectors } from "../../components";
import { request } from "../../utils";
import { allMoviesUrl, genresUrl } from "../../constants";
import { SearchQuery } from "../../types";
import { useDisclosure } from "@mantine/hooks";
import { transformMovies } from "../../transformers/transformMovies";
import styles from "./Movies.module.css";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    active_page: 1,
    genres: [{ id: null, name: "" }],
    release_date: "",
    rating: { min: "", max: "" },
    sort_by: "",
  });

  //--------------
  const [opened, { open, close }] = useDisclosure(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    setModal(item);
    open();
  };
  //-------------
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

  const movies = transformMovies(dataMovies?.results, dataGenres?.genres);

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
      <ModalWindow
        opened={opened}
        close={close}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        modal={modal}
      />
    </div>
  );
}
