"use client";

import { useQuery } from "@tanstack/react-query";
import { Anchor, Breadcrumbs, Loader } from "@mantine/core";
import { MovieCardLarge, MovieTrailer } from "../../../components";
import { request } from "../../../utils";
import { selMovieUrl } from "../../../constants";
import styles from "./MovieId.module.css";
import { transformMovie } from "../../../transformers/transformMovies";

export default function Movie({ params }: { params: { movieId: number } }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => request(selMovieUrl(params.movieId)),
    queryKey: ["films", params],
  });

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader color="violet" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  const items = [
    { title: "Movies", href: "/movies" },
    {
      title: `${data.original_title}`,
      href: `/movies/${data.id}`,
    },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <div className={styles.movieContainer}>
      <Breadcrumbs className={styles.breadcrumbs}>{items}</Breadcrumbs>
      <MovieCardLarge movie={data} />
      <MovieTrailer movie={data} />
    </div>
  );
}
