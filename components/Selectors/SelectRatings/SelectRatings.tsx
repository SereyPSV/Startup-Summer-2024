import { useState } from "react";
import { Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./SelectRatings.module.css";

const data = ["React", "Angular", "Vue", "Svelte"];

export function SelectRatings() {
  const [value, setValue] = useState<string | null>("");

  return (
    <Select
      size="md"
      label={<Text className={styles.label}>Genres</Text>}
      placeholder="Ratings"
      data={data}
      value={value}
      onChange={setValue}
      w={138}
    />
  );
}
