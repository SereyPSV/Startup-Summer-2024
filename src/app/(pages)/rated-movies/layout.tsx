"use client";

import { SideBar } from "../../../components/SideBar/SideBar";
import styles from "./Rated.module.css";

export default function Layout({ children }: { children: any }) {
  return (
    <div className={styles.layoutMoviesContainer}>
      <SideBar />
      {children}
    </div>
  );
}
