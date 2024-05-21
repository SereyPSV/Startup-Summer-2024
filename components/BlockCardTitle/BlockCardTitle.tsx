import { Text, Title } from "@mantine/core";
import { trimmingNum, trimmingString } from "../../utils";
import { StarIcon } from "../Icons/StarIcon";
import { MovieType } from "../../types";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  movieCard: MovieType;
};

export function BlockCardTitle({ styles, movieCard }: Props) {
  return (
    <div className={styles.textWrap}>
      <Title className={styles.cardTitle} order={3}>
        {trimmingString(movieCard.original_title)}
      </Title>
      <Text className={styles.releaseDate}>
        {movieCard?.release_date?.slice(0, 4)}
      </Text>
      <div className={styles.voteContainer}>
        <StarIcon fill={"#fab005"} />
        <Text className={styles.voteAverage}>
          {trimmingNum(movieCard.vote_average)}
        </Text>
        <Text className={styles.voteCount}>
          ({trimmingNum(movieCard.vote_count)})
        </Text>
      </div>
    </div>
  );
}
