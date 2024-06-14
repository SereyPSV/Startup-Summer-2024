import { NavSideBar } from "../NavSideBar/NavSideBar";
import { Logo } from "../Logo/Logo";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

import styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <div className={styles.SideBarContainer}>
      <Logo />
      <NavSideBar />
      <ScrollToTop />
    </div>
  );
}
