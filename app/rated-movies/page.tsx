"use client";

import { Box, Flex } from "@mantine/core";
import { SideBar } from "../../components/SideBar/SideBar";

export default function RatedMovies() {
  return (
    <Flex maw={"1440px"} m={"0 auto"}>
      <SideBar />
      <Box w="1020px" m="20px auto" p="20px"></Box>
    </Flex>
  );
}
