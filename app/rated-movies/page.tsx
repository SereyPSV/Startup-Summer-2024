"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import {
  readLocalStorageValue,
  useDebouncedValue,
  useDisclosure,
} from "@mantine/hooks";
import { Button, TextInput, Title } from "@mantine/core";
import { BlockMovies, ModalWindow } from "../../components";
import { MovieType, SearchQuery } from "../../types";
import { searchQueryInit } from "../../constants";

import styles from "./Rated.module.css";

export default function RatedMovies() {
  const total_pages = 1;
  const [searchQuery, setSearchQuery] = useState<SearchQuery>(searchQueryInit);
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [debounced] = useDebouncedValue(searchMovieTitle, 500);

  const [opened, { open, close }] = useDisclosure(false);
  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    setModal(item);
    open();
  };

  const moviesStorage: MovieType[] =
    readLocalStorageValue({ key: "UserRatings" }) || "";

  const movies = moviesStorage.filter(
    (movie) =>
      movie.user_rating !== 0 &&
      movie.user_rating !== null &&
      movie.original_title.toLowerCase().includes(debounced.toLowerCase())
  );

  if (moviesStorage.length === 0) {
    return <div>You haven&rsquo;t rated any films yet</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title className={styles.title}>Rated movies</Title>
        <div className={styles.search}>
          <TextInput
            placeholder="Search movie title"
            className={styles.searchInput}
            value={searchMovieTitle}
            onChange={(event) => setSearchMovieTitle(event.currentTarget.value)}
            leftSection={<IconSearch size={18} stroke={1.5} />}
          />
          <Button
            className={styles.searchButton}
            variant="filled"
            color="violet"
            size="md"
            radius="md"
            onClick={() => setSearchMovieTitle("")}
          >
            Clear
          </Button>
        </div>
      </div>
      <BlockMovies
        movies={movies}
        total_pages={total_pages}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openModal={openModal}
      />
      <ModalWindow opened={opened} close={close} modal={modal} />
    </div>
  );
}
