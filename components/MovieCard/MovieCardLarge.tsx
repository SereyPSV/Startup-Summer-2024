"use client";

import {
  Card,
  Image,
  Text,
  Flex,
  Box,
  Title,
  Table,
  TableData,
} from "@mantine/core";

import Link from "next/link";

import { MovieType } from "../../types";
import { Star1 } from "../Icons/Star1";

import { trimmingNum } from "../../utils/trimmingNum";
import { formattingDate } from "../../utils/formatData";
import { formattingDuration } from "../../utils/formatDuration";
import { formattingPrise } from "../../utils/formatPrise";
import classes from "./MovieCardLager.module.css";

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
    <Card shadow="sm" className={classes.cardLager}>
      <Box className={classes.posterWrapper}>
        <Image className={classes.poster} src={posterUrl} alt="no-poster" />
      </Box>

      <Flex className={classes.cardContent}>
        <Box className={classes.textWrap}>
          <Title order={2} className={classes.cardTitle}>
            {selMovie.original_title}
          </Title>
          <Text className={classes.releaseDate}>
            {selMovie.release_date.slice(0, 4)}
          </Text>
          <Flex className={classes.voteContainer}>
            <Star1 fill={"#fab005"} />
            <Text className={classes.voteAverage}>
              {trimmingNum(selMovie.vote_average)}
            </Text>
            <Text className={classes.voteCount}>
              ({trimmingNum(selMovie.vote_count)})
            </Text>
          </Flex>
        </Box>

        <Box className={classes.textWrap}>
          <Table
            className={classes.table}
            data={tableData}
            horizontalSpacing={0}
            verticalSpacing={6}
            withRowBorders={false}
          />
          <Text className={classes.genres}>
            <span className={classes.genresListName}>Genres</span>
            {selMovie.genres.map((genre) => (
              <span key={genre.id} className={classes.genreName}>
                {`${genre.name.replaceAll(" ", "\u00A0")}, `}
              </span>
            ))}
          </Text>
        </Box>
      </Flex>

      <Link href={`/movies/${null}`}>
        <Flex className={classes.userRating}>
          <Star1 fill={userRating! ? "#9854F6" : "#d5d6dc"} />
          <Text className={classes.userRatingValue} size="sm" c="dimmed">
            {userRating}
          </Text>
        </Flex>
      </Link>
    </Card>
  );
}
