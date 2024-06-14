import { Dispatch, SetStateAction, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Flex, Button, Text, Select } from "@mantine/core";
import { Genre, SearchQuery } from "../../../types/types";
import { releaseYearData, sortByList } from "../../../constants";
import styles from "./MoviesSelectors.module.css";

type Props = {
  dataGenres: { genres: Genre[] };
  searchQuery: SearchQuery;
  setSearchQuery: Dispatch<SetStateAction<SearchQuery>>;
};

export function MoviesSelectors({
  dataGenres,
  searchQuery,
  setSearchQuery,
}: Props) {
  const genresData = dataGenres?.genres.map((genreItem: Genre) => {
    return {
      value: genreItem.id?.toString() ?? "",
      label: genreItem.name ?? "",
    };
  });

  const handleGenreChange = (value: string | null) => {
    const genreObject = dataGenres?.genres.find(
      (genre) => genre.id?.toString() === value
    );

    setSearchQuery((prevQuery) => ({
      ...prevQuery,
      genres: genreObject ? [genreObject] : [],
      active_page: 1,
    }));
  };

  return (
    <div className={styles.selectorsContainer}>
      <Select
        className={styles.textSelectors}
        size="md"
        label={<Text className={styles.label}>Genres</Text>}
        placeholder="Select genre"
        data={genresData}
        value={searchQuery.genres
          .map((genre) => genre.id?.toString())
          .join(",")}
        onChange={(value) => handleGenreChange(value)}
        rightSection={<IconChevronDown size={24} stroke={1.5} />}
      />
      <Select
        className={styles.textSelectors}
        label={<Text className={styles.label}>Release year</Text>}
        placeholder="Select release year"
        data={releaseYearData}
        value={searchQuery.release_date}
        onChange={(item) =>
          setSearchQuery({ ...searchQuery, release_date: item })
        }
        rightSection={<IconChevronDown size={24} stroke={1.5} />}
      />
      <Flex gap={8}>
        <Select
          className={styles.ratingSelectors}
          label={<Text className={styles.label}>Ratings</Text>}
          placeholder="From"
          data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          value={searchQuery.rating.min}
          onChange={(item) =>
            setSearchQuery({
              ...searchQuery,
              rating: { ...searchQuery.rating, min: item ?? "" },
            })
          }
        />
        <Select
          className={styles.ratingSelectors}
          label={<Text className={styles.labelHidden}>Ratings</Text>}
          placeholder="To"
          data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].slice(
            Number(searchQuery.rating.min)
          )}
          value={searchQuery.rating.max}
          onChange={(item) =>
            setSearchQuery({
              ...searchQuery,
              rating: { ...searchQuery.rating, max: item ?? "" },
            })
          }
        />
      </Flex>
      <Button
        className={styles.buttonSelectors}
        variant="subtle"
        color="violet"
      >
        <Text c="grey" fw={500} fz={14} lh="143%">
          Reset filters
        </Text>
      </Button>
      <Select
        className={styles.textSelectors}
        label={<Text className={styles.label}>Sort by</Text>}
        placeholder="Most popular"
        data={sortByList}
        value={searchQuery.sort_by}
        onChange={(item) =>
          setSearchQuery({ ...searchQuery, sort_by: item ?? "" })
        }
        rightSection={<IconChevronDown size={24} stroke={1.5} />}
      />
    </div>
  );
}
