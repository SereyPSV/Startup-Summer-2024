import Link from "next/link";
import { Card, Image, Grid } from "@mantine/core";
import { MovieType } from "../../types";
import styles from "./MovieCard.module.css";
import { BlockCardTitle } from "../BlockCardTitle/BlockCardTitle";
import { BlockCardGenres } from "../BlockCardGenres/BlockCardGenres";
import { BlockUserRating } from "../BlockUserRating/BlockUserRating";

type Props = {
  movie: MovieType;
  openModal: any;
};

export function MovieCard({ movie, openModal }: Props) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={styles.gridCol}>
      <Card shadow="sm" className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.posterWrapper}>
            <Image className={styles.poster} src={posterUrl} alt="no-poster" />
          </div>
          <div className={styles.content}>
            <div className={styles.movieInfo}>
              <Link href={`/movies/${movie.id}`}>
                <BlockCardTitle styles={styles} movie={movie} />
              </Link>
              <BlockUserRating
                styles={styles}
                user_rating={movie.user_rating}
                openModal={openModal}
              />
            </div>

            <BlockCardGenres styles={styles} genres={movie.genres} />
          </div>
        </div>
      </Card>
    </div>
  );
}
