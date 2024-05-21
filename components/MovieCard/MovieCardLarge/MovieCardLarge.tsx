"use client";

import { Card, Image, Text, Table, TableData } from "@mantine/core";
import { formattingDate } from "../../../utils/formatData";
import { formattingDuration } from "../../../utils/formatDuration";
import { formattingPrise } from "../../../utils/formatPrise";
import { BlockCardTitle } from "../../BlockCardTitle/BlockCardTitle";
import { MovieType } from "../../../types";
import styles from "./MovieCardLager.module.css";
import { BlockUserRating } from "../../BlockUserRating/BlockUserRating";

export function MovieCardLarge({ selMovie }: { selMovie: MovieType }) {
  const userRating = 0;
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

  const openModalUserRating = () => {
    // openModal(movieCard);
  };

  return (
    <Card shadow="sm" className={styles.cardLager}>
      <div className={styles.cardLager}>
        <div className={styles.posterWrapper}>
          <Image className={styles.poster} src={posterUrl} alt="no-poster" />
        </div>
        <div className={styles.cardContent}>
          <BlockCardTitle styles={styles} movieCard={selMovie} />
          <div className={styles.textWrap}>
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
          </div>
        </div>
        <BlockUserRating
          styles={styles}
          userRating={userRating}
          onClick={openModalUserRating}
        />
      </div>
    </Card>
  );
}
