import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { Modal, Text, Title, Rating } from "@mantine/core";
import styles from "./ModalWindow.module.css";

type Props = {
  modal: any;
  opened: any;
  close: any;
  ratingValue: any;
  setRatingValue: any;
};
export function ModalWindow({
  modal,
  opened,
  close,
  ratingValue,
  setRatingValue,
}: Props) {
  // const [value, setValue, removeValue] = useLocalStorage({
  //   key: `${modal?.id}`,
  //   defaultValue: `${modal?.user_rating}`,
  // });

  const isMobile = useMediaQuery("(max-width: 50em)");

  function saveUserRating() {
    // setValue(`${ratingValue}`);
    close();
  }
  function removeUserRating() {
    // removeValue();
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
