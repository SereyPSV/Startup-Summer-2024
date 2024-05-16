"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@mantine/core";

import classes from "./NavSideBar.module.css";

export function NavSideBar() {
  const path = usePathname();

  return (
    <List className={classes.NavLink}>
      <List.Item className={path === "/" ? classes.Active : classes.Inactive}>
        <Link href="/">Movies</Link>
      </List.Item>
      <List.Item
        className={path === "/RatedMovies" ? classes.Active : classes.Inactive}
      >
        <Link href="/RatedMovies">Rated movies</Link>
      </List.Item>
    </List>
  );
}
