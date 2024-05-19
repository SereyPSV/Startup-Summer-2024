"use client";

import { Flex } from "@mantine/core";
import { SideBar } from "../../components/SideBar/SideBar";
import { Movies } from "../../components/Movies/Movies";
import styles from "./Movies.module.css";

export default function MainPage() {
  return (
    <Flex className={styles.container}>
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
