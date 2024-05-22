"use client";

import React from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import styles from "./Movies.module.css";

export default function MoviesLayout({ children }: { children: any }) {
  return (
    <div className={styles.layoutMoviesContainer}>
      <SideBar />
      {children}
    </div>
  );
}
