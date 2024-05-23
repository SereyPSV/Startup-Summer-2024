"use client";

import Link from "next/link";
import { Card, Image, Loader } from "@mantine/core";
import { BlockCardTitle } from "../../BlockCardTitle/BlockCardTitle";
import { BlockCardGenres } from "../../BlockCardGenres/BlockCardGenres";
import { BlockUserRating } from "../../BlockUserRating/BlockUserRating";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../../utils";
import { selMovieUrl } from "../../../constants";
import styles from "./MovieCardById.module.css";

type Props = {
  movieId: number;
  openModal: any;
};

export function MovieCardById({ movieId, openModal }: Props) {
  //-------------
  const { data, isLoading, error } = useQuery({
    queryFn: () => request(selMovieUrl(movieId)),
    queryKey: ["films", movieId],
  });

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader color="violet" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  //-----------------
  const posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  return (
    <div className={styles.gridCol}>
      <Card shadow="sm" className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.posterWrapper}>
            <Image className={styles.poster} src={posterUrl} alt="no-poster" />
          </div>
          <div className={styles.content}>
            <div className={styles.movieInfo}>
              <Link href={`/movies/${data.id}`}>
                <BlockCardTitle styles={styles} movie={data} />
              </Link>
              <BlockUserRating
                styles={styles}
                user_rating={5}
                openModal={openModal}
              />
            </div>
            <BlockCardGenres styles={styles} genres={data.genres} />
          </div>
        </div>
      </Card>
    </div>
  );
}
