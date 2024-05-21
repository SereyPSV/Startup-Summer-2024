import NextImage from "next/image";
import { Box, Flex, Image, Text } from "@mantine/core";
import noSuchFilms from "../../public/img/no-such-films.png";
import styles from "./NoSuchFilms.module.css";

export function NoSuchFilms() {
  return (
    <Flex className={styles.noMoviesContainer}>
      <Box className={styles.noMoviesImgContainer}>
        <Image
          className={styles.noMoviesImg}
          component={NextImage}
          src={noSuchFilms}
          alt="No such films have been found"
        />
      </Box>
      <Text className={styles.noMoviesText}>
        We&nbsp;don&rsquo;t have such movies, look for another one
      </Text>
    </Flex>
  );
}
