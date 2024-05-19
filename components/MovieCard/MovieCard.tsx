import { Card, Image, Text, Grid, Flex, Box, Title } from "@mantine/core";

import { Star1 } from "../Icons/Star1";

import Link from "next/link";
import { Genres, MovieType } from "../../types";
import { trimmingNum } from "../../utils/trimmingNum";

import classes from "./MovieCard.module.css";
import { trimmingString } from "../../utils/trimmingString";

export function MovieCard({
  movieCard,
  genres,
}: {
  movieCard: MovieType;
  genres: Genres;
}) {
  const userRating = 9;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`;
  const selectedGenres = genres
    .filter((genre) => movieCard.genre_ids.includes(genre.id))
    .map((genre) => genre.name);

  return (
    <Grid.Col span={1} className={classes.gridCol}>
      <Card shadow="sm" className={classes.card}>
        <Flex className={classes.cardContainer}>
          <Link href={`/movies/${movieCard.id}`}>
            <Flex className={classes.movieInfo}>
              <Box className={classes.posterWrapper}>
                <Image
                  className={classes.poster}
                  src={posterUrl}
                  alt="no-poster"
                />
              </Box>
              <Flex className={classes.cardContent}>
                <Box>
                  <Title className={classes.cardTitle} order={3}>
                    {trimmingString(movieCard.original_title)}
                  </Title>
                  <Text className={classes.releaseDate}>
                    {movieCard.release_date.slice(0, 4)}
                  </Text>
                  <Flex className={classes.voteContainer}>
                    <Star1 fill={"#fab005"} />
                    <Text className={classes.voteAverage}>
                      {trimmingNum(movieCard.vote_average)}
                    </Text>
                    <Text className={classes.voteCount}>
                      ({trimmingNum(movieCard.vote_count)})
                    </Text>
                  </Flex>
                </Box>
                <Text className={classes.genres}>
                  <span className={classes.genresListName}>Genres</span>
                  {selectedGenres.map((genre) => (
                    <span key={genre} className={classes.genreName}>
                      {`${genre.replaceAll(" ", "\u00A0")}, `}
                    </span>
                  ))}
                </Text>
              </Flex>
            </Flex>
          </Link>
          <Link href={`/movies/${movieCard.id}`}>
            <Flex className={classes.userRating}>
              <Star1 fill={userRating! ? "#9854F6" : "#d5d6dc"} />
              <Text className={classes.userRatingValue} size="sm" c="dimmed">
                {userRating}
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Card>
    </Grid.Col>
  );
}
