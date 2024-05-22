import { Text } from "@mantine/core";
import { Genre } from "../../types";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  genres: Genre[];
};

export function BlockCardGenres({ styles, genres }: Props) {
  return (
    <Text className={styles.genres}>
      <span className={styles.genresListName}>Genres</span>
      {genres?.map((genre, index) => {
        const comma = genres.length === index + 1 ? "" : ", ";
        return (
          <span key={genre.id} className={styles.genreName}>
            {`${genre.name?.replaceAll(" ", "\u00A0")}${comma}`}
          </span>
        );
      })}
    </Text>
  );
}
