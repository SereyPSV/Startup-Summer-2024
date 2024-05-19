"use client";

import { Anchor, Box, Breadcrumbs, Button, Flex, Text } from "@mantine/core";
import { SideBar } from "../../../components/SideBar/SideBar";
import { MovieCardLarge } from "../../../components/MovieCard/MovieCardLarge";
import { MovieTrailer } from "../../../components/MovieCard/MovieTrailer/MovieTrailer";
import { useQuery } from "@tanstack/react-query";
import { optionsReq } from "../../../constants/optionsReq";

import styles from "./MovieId.module.css";

export default function Movie({ params }: { params: { movieId: number } }) {
  const { data, error } = useQuery({
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
        optionsReq
      )
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.error(err)),
    queryKey: ["films", params],
    suspense: true,
  });

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
    <Flex className={styles.container}>
      <SideBar />
      <Box className={styles.movieContainer}>
        <Breadcrumbs className={styles.breadcrumbs}>{items}</Breadcrumbs>
        <MovieCardLarge selMovie={data} />
        <MovieTrailer selMovie={data} />
      </Box>
      {/* <Button color="bright-pink" variant="filled">
        Bright pink button
      </Button> */}
    </Flex>
  );
}
