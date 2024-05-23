"use client";

import { useState } from "react";
import {
  readLocalStorageValue,
  useDebouncedValue,
  useDisclosure,
} from "@mantine/hooks";
import { Button, TextInput, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { BlockMovies, ModalWindow } from "../../components";
import { MovieType, SearchQuery } from "../../types";

import styles from "./Rated.module.css";

export default function RatedMovies() {
  //--------------------
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    active_page: 1,
    genres: [{ id: null, name: "" }],
    release_date: "",
    rating: { min: "", max: "" },
    sort_by: "",
  });
  //------------------
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 500);

  //--------------------
  const [opened, { open, close }] = useDisclosure(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    setModal(item);
    open();
  };

  // const movies = transformMovies(dataMovies?.results, dataGenres?.genres);
  //--------------------

  const moviesStorage: MovieType[] =
    readLocalStorageValue({ key: "UserRatings" }) || "";

  if (moviesStorage.length === 0) {
    return <div>You haven&rsquo;t rated any films yet</div>;
  }
  const movies = moviesStorage.filter(
    (movie) => movie.user_rating !== 0 && movie.user_rating !== null
  );
  const total_pages = 1;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Title className={styles.title}>Rated movies</Title>
        <div className={styles.search}>
          <TextInput
            placeholder="Search movie title"
            className={styles.searchInput}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            leftSection={<IconSearch size={18} stroke={1.5} />}
          />

          <Button
            className={styles.searchButton}
            variant="filled"
            color="violet"
            size="md"
            radius="md"
            onClick={() => setValue("")}
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
