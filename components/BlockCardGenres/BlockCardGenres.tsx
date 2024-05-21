import { Text } from "@mantine/core";
import { Genre, Genres, MovieType } from "../../types";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  selectedGenres: string[];
};

export function BlockCardGenres({ styles, selectedGenres }: Props) {
  return (
    <Text className={styles.genres}>
      <span className={styles.genresListName}>Genres</span>
      {selectedGenres?.map((genre) => (
        <span key={genre} className={styles.genreName}>
          {`${genre.replaceAll(" ", "\u00A0")}, `}
        </span>
      ))}
    </Text>
  );
}
