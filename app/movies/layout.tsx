"use client";

import { SideBar } from "../../components/SideBar/SideBar";
import styles from "./Movies.module.css";

export default function MoviesLayout({ children }: { children: any }) {
  return (
    <body>
      <div className={styles.layoutMoviesContainer}>
        <SideBar />
        {children}
      </div>
    </body>
  );
}
