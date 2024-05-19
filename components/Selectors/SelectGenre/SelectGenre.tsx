import { useState } from "react";
import { Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./SelectGenre.module.css";

const data = ["React", "Angular", "Vue", "Svelte"];

export function SelectGenre() {
  const [value, setValue] = useState<string | null>("");

  return (
    <Select
      size="md"
      label={<Text className={styles.label}>Genres</Text>}
      placeholder="Select genre"
      data={data}
      value={value}
      onChange={setValue}
      rightSection={<IconChevronDown size={24} stroke={1.5} />}
      w={284}
    />
  );
}
