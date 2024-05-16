import {
  Card,
  Image,
  Text,
  Grid,
  Flex,
  Box,
  Rating,
  Title,
  NavLink,
} from "@mantine/core";

import { Star1 } from "../Icons/Star1";

import Link from "next/link";
import { MovieType } from "../../types";

export function MovieCard({ movieCard }: { movieCard: MovieType }) {
  return (
    <Grid.Col span={1}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex w={"434px"} justify="space-between">
          <Link href={`/${movieCard.id}`}>
            <Flex w={"375px"}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`}
                w={"119px"}
                h={"170px"}
                fit="contain"
                alt="Norway"
              />

              <Box w={"auto"} px={"10px"} fw="600" fz="20px" color="purple500">
                <Title
                  order={1}
                  // color="blue"
                  // ff={inter.style.fontFamily}
                  fz="20px"
                  fw="600"
                  lh="150%"
                >
                  {movieCard.original_title}
                </Title>
                <Text size="sm" c="dimmed">
                  {movieCard.release_date}
                </Text>
                <Text size="sm" c="dimmed">
                  {movieCard.vote_average}({movieCard.vote_count})
                </Text>
                <Text size="sm" c="dimmed">
                  {`Genres ${movieCard.genre_ids.join(", ")}`}
                </Text>
              </Box>
            </Flex>
          </Link>
          <Flex justify="flex-end" right={"0"}>
            {/* <Rating
              defaultValue={2}
              color="violet"
              size="lg"
              count={1}
              right="0"
            /> */}
            <Text size="sm" c="dimmed">
              8
            </Text>
            <Star1 />
          </Flex>
        </Flex>
      </Card>
    </Grid.Col>
  );
}
