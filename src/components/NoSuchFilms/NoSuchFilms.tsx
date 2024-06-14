import NextImage from "next/image";
import { Image, Text } from "@mantine/core";
import noSuchFilms from "../../../public/img/no-such-films.png";
import styles from "./NoSuchFilms.module.css";

export function NoSuchFilms() {
  return (
    <div className={styles.noMoviesContainer}>
      <div className={styles.noMoviesImgContainer}>
        <Image
          className={styles.noMoviesImg}
          component={NextImage}
          src={noSuchFilms}
          alt="No such films have been found"
        />
      </div>
      <Text className={styles.noMoviesText}>
        We&nbsp;don&rsquo;t have such movies, look for another one
      </Text>
    </div>
  );
}
