import { Box } from "@mantine/core";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { Logo } from "../Logo/Logo";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

import styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <Box className={styles.SideBarContainer}>
      <Logo />
      <NavSideBar />
      <ScrollToTop />
    </Box>
  );
}
