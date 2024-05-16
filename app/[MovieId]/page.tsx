"use client";

import { usePathname } from "next/navigation";
import { Flex } from "@mantine/core";
import { SideBar } from "../../components/SideBar/SideBar";

export default function Movie() {
  const path = usePathname();
  return (
    <Flex maw={"1440px"} m={"0 auto"}>
      <SideBar />
      <div>{path}</div>
    </Flex>
  );
}
