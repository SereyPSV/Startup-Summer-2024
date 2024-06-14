"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@mantine/core";

import styles from "./NavSideBar.module.css";

export function NavSideBar() {
  const path = usePathname();
  return (
    <List className={styles.navLink}>
      <List.Item
        className={path.includes("/movies") ? styles.Active : styles.Inactive}
      >
        <Link href="/movies">Movies</Link>
      </List.Item>
      <List.Item
        className={
          path.includes("/rated-movies") ? styles.Active : styles.Inactive
        }
      >
        <Link href="/rated-movies">Rated movies</Link>
      </List.Item>
    </List>
  );
}
