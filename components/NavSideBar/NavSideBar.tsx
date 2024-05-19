"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@mantine/core";

import classes from "./NavSideBar.module.css";

export function NavSideBar() {
  const path = usePathname();
  return (
    <List className={classes.NavLink}>
      <List.Item
        className={path.includes("/movies") ? classes.Active : classes.Inactive}
      >
        <Link href="/movies">Movies</Link>
      </List.Item>
      <List.Item
        className={
          path.includes("/rated-movies") ? classes.Active : classes.Inactive
        }
      >
        <Link href="/rated-movies">Rated movies</Link>
      </List.Item>
    </List>
  );
}
