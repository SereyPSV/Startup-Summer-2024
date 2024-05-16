"use client";

import { Flex } from "@mantine/core";
import { SideBar } from "../components/SideBar/SideBar";
import { Movies } from "../components/Movies/Movies";

export default function MainPage() {
  return (
    <Flex maw={"1440px"} m={"0 auto"}>
      <SideBar />
      <Movies />
    </Flex>
  );
}

// import { Welcome } from "../components/Welcome/Welcome";

// export default function MainPage() {
//   return (
//     <>
//       <ColorSchemeToggle />
//     </>
//   );
// }
