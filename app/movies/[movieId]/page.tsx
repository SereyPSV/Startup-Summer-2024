"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Anchor, Breadcrumbs, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalWindow, MovieCardLarge, MovieTrailer } from "../../../components";
import { request } from "../../../utils";
import { selMovieUrl } from "../../../constants";
import styles from "./MovieId.module.css";

export default function Movie({ params }: { params: { movieId: number } }) {
  //--------------
  const [opened, { open, close }] = useDisclosure(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [modal, setModal] = useState(null);
  const openModal = (item: any) => {
    setModal(item);
    open();
  };
  //-------------
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
      <MovieCardLarge movie={data} openModal={openModal} />
      <MovieTrailer movie={data} />
      <ModalWindow
        opened={opened}
        close={close}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        modal={modal}
      />
    </div>
  );
}
