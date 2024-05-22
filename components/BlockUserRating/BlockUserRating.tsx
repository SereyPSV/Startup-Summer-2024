import { Button, Text } from "@mantine/core";
import { StarIcon } from "../Icons/StarIcon";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  user_rating: number;
  openModal: any;
};

export function BlockUserRating({ styles, user_rating = 0, openModal }: Props) {
  return (
    <Button variant="transparent" p={0} onClick={openModal}>
      <div className={styles.userRating}>
        <StarIcon fill={user_rating === 0 ? "#d5d6dc" : "#9854F6"} />
        <Text className={styles.userRatingValue}>
          {user_rating === 0 ? "" : user_rating}
        </Text>
      </div>
    </Button>
  );
}
