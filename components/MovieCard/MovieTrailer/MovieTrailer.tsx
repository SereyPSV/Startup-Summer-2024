"use client";

import { Card, Text, Title, Image } from "@mantine/core";
import { MovieType } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { YouTubeVideo } from "./VideoPlayer/VideoPlayer";
import { selYoutubeKeyUrl } from "../../../constants/reqUrl";
import { request } from "../../../utils/request";
import styles from "./MovieTrailer.module.css";

export function MovieTrailer({ selMovie }: { selMovie: MovieType }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => request(selYoutubeKeyUrl(selMovie.id)),
    queryKey: ["films111", selMovie.id],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.results) return <div>No data</div>;

  const trailerKey = isDataResKey(data.results[0]);
  function isDataResKey(trailers: { key: string }) {
    if (!trailers) {
      return "dNYgq3Bfnsa";
    } else {
      return trailers.key;
    }
  }

  return (
    <Card shadow="sm" className={styles.cardTrailer}>
      <Title order={3} className={styles.cardTitle}>
        Trailer
      </Title>
      <div className={styles.videoContainer}>
        <YouTubeVideo videoId={trailerKey} />
      </div>
      <div className={styles.descriptionContainer}>
        <Title className={styles.cardTitle}>Description</Title>
        <Text className={styles.description}>{selMovie.overview}</Text>
      </div>
      <Title className={styles.cardTitle}>Production</Title>
      <div className={styles.productionCompanies}>
        {selMovie.production_companies.map((company) => (
          <div key={company.id} className={styles.company}>
            <div className={styles.logoCompanyWrap}>
              <Image
                className={styles.logoCompany}
                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                alt="Logo Company"
              />
            </div>
            <Text className={styles.companyName}>{company.name}</Text>
          </div>
        ))}
      </div>
    </Card>
  );
}
