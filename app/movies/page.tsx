"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Title } from "@mantine/core";
import { BlockMovies, ModalWindow, MoviesSelectors } from "../../components";
import { request } from "../../utils";
import { allMoviesUrl, genresUrl } from "../../constants";
import { ValueStateObject } from "../../types";
import { useDisclosure } from "@mantine/hooks";
import styles from "./Movies.module.css";

export default function Movies() {
  const [activePage, setActivePage] = useState<number>(1);
  const [valGenres, setValGenres] = useState<ValueStateObject>({
    value: "",
    label: "",
  });
  const [valYear, setValYear] = useState<string>("");
  const [ratingMin, setRatingMin] = useState<string>("");
  const [ratingMax, setRatingMax] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  //--------------
  const [opened, { open, close }] = useDisclosure(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    console.log("============", item);
    setModal(item);
    open();
  };
  //-------------

  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useQuery({
    queryFn: () =>
      request(
        allMoviesUrl(
          activePage,
          valYear,
          sortBy,
          ratingMax,
          ratingMin,
          valGenres.value
        )
      ),
    queryKey: [
      "movies",
      activePage,
      valYear,
      sortBy,
      valGenres,
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

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Movies</Title>
      <MoviesSelectors
        dataGenres={dataGenres}
        valGenres={valGenres}
        setValGenres={setValGenres}
        valYear={valYear}
        setValYear={setValYear}
        ratingMin={ratingMin}
        setRatingMin={setRatingMin}
        ratingMax={ratingMax}
        setRatingMax={setRatingMax}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <BlockMovies
        dataMovies={dataMovies}
        genres={dataGenres?.genres}
        activePage={activePage}
        setActivePage={setActivePage}
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
