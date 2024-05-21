import Link from "next/link";
import { Card, Image, Grid, Flex, Box } from "@mantine/core";
import { Genres, MovieType } from "../../types";
import styles from "./MovieCard.module.css";
import { BlockCardTitle } from "../BlockCardTitle/BlockCardTitle";
import { BlockCardGenres } from "../BlockCardGenres/BlockCardGenres";
import { BlockUserRating } from "../BlockUserRating/BlockUserRating";

export function MovieCard({
  movieCard,
  genres,
  openModal,
}: {
  movieCard: MovieType;
  genres: Genres;
  openModal: any;
}) {
  const userRating = 9;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movieCard.poster_path}`;
  const selectedGenres = genres
    ?.filter((genre) => movieCard?.genre_ids?.includes(genre.id))
    ?.map((genre) => genre.name);

  const openModalUserRating = () => {
    openModal(movieCard);
  };

  return (
    <Grid.Col span={1} className={styles.gridCol}>
      <Card shadow="sm" className={styles.card}>
        <Flex className={styles.cardContainer}>
          <Link href={`/movies/${movieCard.id}`}>
            <Flex className={styles.movieInfo}>
              <Box className={styles.posterWrapper}>
                <Image
                  className={styles.poster}
                  src={posterUrl}
                  alt="no-poster"
                />
              </Box>
              <Flex className={styles.cardContent}>
                <BlockCardTitle styles={styles} movieCard={movieCard} />
                <BlockCardGenres
                  styles={styles}
                  selectedGenres={selectedGenres}
                />
              </Flex>
            </Flex>
          </Link>

          <BlockUserRating
            styles={styles}
            userRating={userRating}
            onClick={openModalUserRating}
          />
        </Flex>
      </Card>
    </Grid.Col>
  );
}
