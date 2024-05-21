import { Button, Flex, Text } from "@mantine/core";
import { StarIcon } from "../Icons/StarIcon";

type Props = {
  styles: {
    readonly [key: string]: string;
  };
  userRating: number;
  onClick: any;
};

export function BlockUserRating({ styles, userRating, onClick }: Props) {
  return (
    <Button variant="transparent" p={0} onClick={onClick}>
      <Flex className={styles.userRating}>
        <StarIcon fill={userRating! ? "#9854F6" : "#d5d6dc"} />
        <Text className={styles.userRatingValue} size="sm" c="dimmed">
          {userRating}
        </Text>
      </Flex>
    </Button>
  );
}
