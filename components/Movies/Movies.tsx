"use client";

import { useEffect, useState } from "react";
import { Title, Box, Grid } from "@mantine/core";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieType } from "../../types";
import styles from "./movies.module.css";

export function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTgxZDVhMzdhYzNiYTJiYWYyODVkYjc3NTQ5ZTFjNCIsInN1YiI6IjY2M2E2ZDgzZjAzNDZjNWNjNzhlODQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qF3BfcsQtIrpouVZ22iDDIZ6zDz317CynXEODwHd1KE",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setAllMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box maw="1160px" m="auto">
      <Box maw="1020px" w="100%" m="20px auto" p="20px">
        <Title fz="32px" fw="700" lh="150%" lts="2">
          Movies
        </Title>
        <Box h={"72px"} pb={"24px"} bg={"green"}></Box>
        <Box h={"72px"} pb={"24px"} bg={"red"}></Box>
        <Grid columns={2}>
          {allMovies.map((movieCard: MovieType) => (
            <MovieCard key={movieCard.id} movieCard={movieCard} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
