import { Text, Title } from "@mantine/core";
import { trimmingNum, trimmingString } from "../../utils";
import { StarIcon } from "../Icons/StarIcon";
import { MovieType } from "../../types";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  movie: MovieType;
};

export function BlockCardTitle({ styles, movie }: Props) {
  return (
    <div className={styles.textWrap}>
      <Title className={styles.cardTitle} order={3}>
        {trimmingString(movie.original_title)}
      </Title>
      <Text className={styles.releaseDate}>
        {movie?.release_date?.slice(0, 4)}
      </Text>
      <div className={styles.voteContainer}>
        <StarIcon fill={"#fab005"} />
        <Text className={styles.voteAverage}>
          {trimmingNum(movie.vote_average)}
        </Text>
        <Text className={styles.voteCount}>
          ({trimmingNum(movie.vote_count)})
        </Text>
      </div>
    </div>
  );
}
