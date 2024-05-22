"use client";

import { Card, Text, Image } from "@mantine/core";
import { MovieType, MovieTypeRes } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { YouTubeVideo } from "./VideoPlayer/VideoPlayer";
import { selYoutubeKeyUrl } from "../../../constants/reqUrl";
import { request } from "../../../utils/request";
import styles from "./MovieTrailer.module.css";

export function MovieTrailer({ movie }: { movie: MovieTypeRes }) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => request(selYoutubeKeyUrl(movie.id)),
    queryKey: ["films111", movie.id],
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
      <Text className={styles.cardTitle}>Trailer</Text>
      <div className={styles.videoContainer}>
        <YouTubeVideo videoId={trailerKey} />
      </div>
      <div className={styles.descriptionContainer}>
        <Text className={styles.cardTitle}>Description</Text>
        <Text className={styles.description}>{movie.overview}</Text>
      </div>
      <Text className={styles.cardTitle}>Production</Text>
      <div className={styles.productionCompanies}>
        {movie.production_companies?.map((company) => (
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
