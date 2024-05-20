import { IconChevronDown } from "@tabler/icons-react";
import { Flex, Button, Text, Select } from "@mantine/core";
import { Genre } from "../../../types";
import { releaseYearData, sortByList } from "../../../constants";
import styles from "./MoviesSelectors.module.css";

export function MoviesSelectors({
  dataGenres,
  valueGenres,
  setValueGenres,
  valueReleaseYear,
  setValueReleaseYear,
  ratingMin,
  setRatingMin,
  ratingMax,
  setRatingMax,
  sortBy,
  setSortBy,
}) {
  const genresData = dataGenres?.genres.map((genreItem: Genre) => {
    return { value: genreItem.id.toString(), label: genreItem.name };
  });

  return (
    <>
      <Flex pb={24} gap={16} align={"flex-end"}>
        <Select
          size="md"
          label={<Text className={styles.label}>Genres</Text>}
          placeholder="Select genre"
          data={genresData}
          value={valueGenres ? valueGenres.value : null}
          onChange={(_valueGenres, option) => setValueGenres(option)}
          rightSection={<IconChevronDown size={24} stroke={1.5} />}
          w={284}
        />
        <Select
          size="md"
          label={<Text className={styles.label}>Release year</Text>}
          placeholder="Select release year"
          data={releaseYearData}
          value={valueReleaseYear}
          onChange={setValueReleaseYear}
          rightSection={<IconChevronDown size={24} stroke={1.5} />}
          w={284}
        />
        <Flex gap={8}>
          <Select
            size="md"
            label={<Text className={styles.label}>Ratings</Text>}
            placeholder="From"
            data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            value={ratingMin}
            onChange={setRatingMin}
            w={138}
          />
          <Select
            size="md"
            label={<Text className={styles.labelHidden}>Ratings</Text>}
            placeholder="To"
            data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            value={ratingMax}
            onChange={setRatingMax}
            w={138}
          />
        </Flex>
        <Button variant="subtle" color="violet" size="md" p={0}>
          <Text c="grey" fw={500} fz={14} lh="143%">
            Reset filters
          </Text>
        </Button>
      </Flex>
      <Flex pb={24} gap={16} justify={"flex-end"} align={"flex-end"}>
        <Select
          size="md"
          label={<Text className={styles.label}>Sort by</Text>}
          placeholder="Most popular"
          data={sortByList}
          value={sortBy}
          onChange={setSortBy}
          rightSection={<IconChevronDown size={24} stroke={1.5} />}
          w={284}
        />
      </Flex>
    </>
  );
}
