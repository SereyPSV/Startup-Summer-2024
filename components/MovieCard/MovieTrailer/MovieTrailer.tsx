"use client";

import { Card, Text, Box, Title, Image, Flex } from "@mantine/core";
import { MovieType } from "../../../types";
import { optionsReq } from "../../../constants/optionsReq";
import { useQuery } from "@tanstack/react-query";
import { YouTubeVideo } from "./VideoPlayer/VideoPlayer";
import classes from "./MovieTrailer.module.css";

export function MovieTrailer({ selMovie }: { selMovie: MovieType }) {
  const { data, error } = useQuery({
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${selMovie.id}/videos?language=en-US`,
        optionsReq
      )
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.error(err)),
    queryKey: ["films111", selMovie.id],
    suspense: true,
  });

  const trailerKey = isDataResKey(data.results[0]);
  function isDataResKey(trailers: { key: string }) {
    if (!trailers) {
      return "dNYgq3Bfnsa";
    } else {
      return trailers.key;
    }
  }

  return (
    <Card shadow="sm" className={classes.cardTrailer}>
      <Title order={3} className={classes.cardTitle}>
        Trailer
      </Title>
      <Box className={classes.videoContainer}>
        <YouTubeVideo videoId={trailerKey} />
      </Box>
      <Box className={classes.descriptionContainer}>
        <Title className={classes.cardTitle}>Description</Title>
        <Text className={classes.description}>{selMovie.overview}</Text>
      </Box>
      <Title className={classes.cardTitle}>Production</Title>
      <Box className={classes.productionCompanies}>
        {selMovie.production_companies.map((company) => (
          <Flex key={company.id} className={classes.company}>
            <Box className={classes.logoCompanyWrap}>
              <Image
                className={classes.logoCompany}
                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                alt="Logo Company"
              />
            </Box>
            <Text className={classes.companyName}>{company.name}</Text>
          </Flex>
        ))}
      </Box>
    </Card>
  );
}
