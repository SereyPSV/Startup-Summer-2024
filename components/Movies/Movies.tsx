import { Suspense, useState } from "react";
import { Title, Box, Grid, Flex, Button, Text } from "@mantine/core";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieType } from "../../types";
import { request } from "../../utils/request";
import { allMoviesUrl, genresUrl } from "../../constants/reqUrl";
import { useQuery } from "@tanstack/react-query";

import styles from "./Movies.module.css";
import { PaginationMovies } from "../PaginationMovies/PaginationMovies";
import { SelectGenre } from "../Selectors/SelectGenre/SelectGenre";
import { SelectRatings } from "../Selectors/SelectRatings/SelectRatings";
import Link from "next/link";

export function Movies() {
  const [activePage, setPage] = useState(1);

  const { data: dataMovies, error: errorMovies } = useQuery({
    queryFn: () => request(allMoviesUrl(activePage)),
    queryKey: ["movies", activePage],
    suspense: true,
  });
  const { data: dataGenres, error: errorGenres } = useQuery({
    queryFn: () => request(genresUrl),
    queryKey: ["genres"],
    suspense: true,
  });
  return (
    <Box className={styles.container}>
      <Box maw="1020px" w="100%" m="20px auto" p="20px">
        <Title className={styles.title}>Movies</Title>
        <Flex pb={24} gap={16} align={"flex-end"}>
          <SelectGenre />
          <SelectGenre />
          <Flex gap={8}>
            <SelectRatings /> <SelectRatings />
          </Flex>
          <Button variant="subtle" color="violet" size="md" p={0}>
            <Text c="grey" fw={500} fz={14} lh="143%">
              Reset filters
            </Text>
          </Button>
        </Flex>
        <Flex pb={24} gap={16} justify={"flex-end"} align={"flex-end"}>
          <SelectGenre />
        </Flex>
        <Grid columns={2} className={styles.moviesContainer}>
          {dataMovies.results.map((movieCard: MovieType) => (
            <MovieCard
              key={movieCard.id}
              movieCard={movieCard}
              genres={dataGenres.genres}
            />
          ))}
        </Grid>
        <Box className={styles.pagination}>
          <Link href={"/movies"}>
            <PaginationMovies
              activePage={activePage}
              setPage={setPage}
              totalPages={dataMovies.total_results}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
