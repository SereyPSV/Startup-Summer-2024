import { useState } from "react";
import {
  readLocalStorageValue,
  useLocalStorage,
  useMediaQuery,
} from "@mantine/hooks";
import { Modal, Text, Title, Rating } from "@mantine/core";
import { removeDuplicatesId } from "../../utils";
import { MovieType } from "../../types";
import styles from "./ModalWindow.module.css";

type Props = {
  modal: any;
  opened: any;
  close: any;
};
export function ModalWindow({ modal, opened, close }: Props) {
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [ratingValue, setRatingValue] = useState(
    !modal?.user_rating ? 0 : modal.user_rating
  );
  const [localStorage, setLocalStorage] = useLocalStorage<MovieType[] | []>({
    key: "UserRatings",
    defaultValue: readLocalStorageValue({ key: "UserRatings" }) || [],
  });

  function saveUserRating() {
    setLocalStorage(
      removeDuplicatesId([
        ...localStorage,
        { ...modal, user_rating: ratingValue },
      ])
    );
    close();
  }
  function removeUserRating() {
    setLocalStorage(localStorage.filter((movie) => movie.id !== modal.id));
    close();
  }

  return (
    <>
      <Modal
        className={styles.modalWindow}
        opened={opened}
        onClose={close}
        title={<Text className={styles.yourRating}>Your rating</Text>}
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
        pos={"relative"}
      >
        <div className={styles.modalContainer}>
          <Title className={styles.modalTitle}>{modal?.original_title}</Title>
          <Rating
            className={styles.modalRating}
            value={ratingValue}
            size="xl"
            count={10}
            w={348}
            h={28}
            onChange={setRatingValue}
          />
          <div className={styles.modalButtons}>
            <button
              className={styles.modalButtonsSave}
              onClick={saveUserRating}
            >
              Save
            </button>
            <button
              className={styles.modalButtonsRemove}
              onClick={removeUserRating}
            >
              Remove rating
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
