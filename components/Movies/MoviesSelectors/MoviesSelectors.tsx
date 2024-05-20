import { Flex, Button, Text } from "@mantine/core";
import { SelectGenre } from "../../Selectors/SelectGenre/SelectGenre";
import { SelectRatings } from "../../Selectors/SelectRatings/SelectRatings";

import styles from "./MoviesSelectors.module.css";

export function MoviesSelectors() {
  return (
    <>
      <Flex pb={24} gap={16} align={"flex-end"}>
        <SelectGenre />
        <SelectGenre />
        <Flex gap={8}>
          <SelectRatings /> <SelectRatings />
        </Flex>
        <Button variant="subtle" color="violet" size="md" p={0}>
          <Text c="grey" fw={500} fz={14} lh="143%">
            Reset filters
          </Text>
        </Button>
      </Flex>
      <Flex pb={24} gap={16} justify={"flex-end"} align={"flex-end"}>
        <SelectGenre />
      </Flex>
    </>
  );
}
