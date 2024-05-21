"use client";

import { Card, Image, Text, Flex, Box, Table, TableData } from "@mantine/core";
import Link from "next/link";
import { StarIcon } from "../../Icons/StarIcon";
import { formattingDate } from "../../../utils/formatData";
import { formattingDuration } from "../../../utils/formatDuration";
import { formattingPrise } from "../../../utils/formatPrise";
import { BlockCardTitle } from "../../BlockCardTitle/BlockCardTitle";
import { MovieType } from "../../../types";
import styles from "./MovieCardLager.module.css";

export function MovieCardLarge({ selMovie }: { selMovie: MovieType }) {
  const userRating = 9;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${selMovie.poster_path}`;
  const duration = formattingDuration(selMovie.runtime);
  const premiere = formattingDate(selMovie.release_date);
  const budget = formattingPrise(selMovie.budget);
  const gross = formattingPrise(selMovie.revenue);
  const tableData: TableData = {
    body: [
      ["Duration", duration],
      ["Premiere", premiere],
      ["Budget", budget],
      ["Gross worldwide", gross],
    ],
  };

  return (
    <Card shadow="sm" className={styles.cardLager}>
      <Box className={styles.posterWrapper}>
        <Image className={styles.poster} src={posterUrl} alt="no-poster" />
      </Box>
      <Flex className={styles.cardContent}>
        <BlockCardTitle styles={styles} movieCard={selMovie} />
        <Box className={styles.textWrap}>
          <Table
            className={styles.table}
            data={tableData}
            horizontalSpacing={0}
            verticalSpacing={6}
            withRowBorders={false}
          />

          <Text className={styles.genres}>
            <span className={styles.genresListName}>Genres</span>
            {selMovie.genres.map((genre) => (
              <span key={genre.id} className={styles.genreName}>
                {`${genre.name.replaceAll(" ", "\u00A0")}, `}
              </span>
            ))}
          </Text>
        </Box>
      </Flex>
      <Link href={`/movies/${null}`}>
        <Flex className={styles.userRating}>
          <StarIcon fill={userRating! ? "#9854F6" : "#d5d6dc"} />
          <Text className={styles.userRatingValue} size="sm" c="dimmed">
            {userRating}
          </Text>
        </Flex>
      </Link>
    </Card>
  );
}
