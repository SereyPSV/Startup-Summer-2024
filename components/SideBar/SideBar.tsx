import { Box } from "@mantine/core";
import { NavSideBar } from "../NavSideBar/NavSideBar";
import { Logo } from "../Logo/Logo";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

import classes from "./SideBar.module.css";

export function SideBar() {
  return (
    <Box className={classes.SideBarContainer}>
      <Logo />
      <NavSideBar />
      <ScrollToTop />
    </Box>
  );
}
