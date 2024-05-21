import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { Modal, Button, Box, Text, Title, Rating } from "@mantine/core";

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
  const [value, setValue] = useLocalStorage({
    key: "",
    defaultValue: "",
  });

  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Text>Your rating</Text>}
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <Box w="500px" h="300px" bg={"green"}>
          <Title>{modal?.original_title}</Title>
          <Rating
            value={ratingValue}
            onChange={setRatingValue}
            size="lg"
            count={10}
          />
          <Button
            onClick={() => {
              // setValue({ key: `${modal?.id}`, defaultValue: `${ratingValue}` });
            }}
          >
            Save
          </Button>
          <Button onClick={() => {}}>Remove rating</Button>
        </Box>
      </Modal>
    </>
  );
}
