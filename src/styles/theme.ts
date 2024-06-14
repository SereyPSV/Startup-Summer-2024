"use client";

import { Inter } from "next/font/google";
import { createTheme, rem } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  colors: {
    grey: [
      "",
      "#f5f5f6", // --grey-100  var(--mantine-color-grey-1)
      "#eaebed", // --grey-200  var(--mantine-color-grey-2)
      "#d5d6dc", // --grey-300  var(--mantine-color-grey-3)
      "#acadb9", // --grey-500  var(--mantine-color-grey-5)
      "#7b7c88", // --grey-600  var(--mantine-color-grey-6)
      "#232134", // --grey-700  var(--mantine-color-grey-7)
      "",
      "",
      "",
    ],
    purple: [
      "",
      "#f2ebf9", // --purple-100  var(--mantine-color-purple-1)
      "#e5d5fa", // --purple-200  var(--mantine-color-purple-2)
      "#d1b4f8", // --purple-300  var(--mantine-color-purple-3)
      "#bd93f7", // --purple-400  var(--mantine-color-purple-4)
      "#9854f6", // --purple-500  var(--mantine-color-purple-5)
      "#541f9d", // --purple-600  var(--mantine-color-purple-6)
      "",
      "",
      "",
    ],
    yellow: ["#FAB005", "", "", "", "", "", "", "", "", ""],
  },
  fontSizes: {
    s: rem(12),
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    xmd: rem(24),
    lg: rem(32),
  },
  spacing: {
    s: rem(8),
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    xmd: rem(20),
    lg: rem(24),
    xlg: rem(40),
  },
  radius: {
    s: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(40),
  },
  headings: {
    sizes: {
      h2: {
        fontSize: rem(32),
        lineHeight: "var(--mantine-line-height-md)",
      },
    },
  },
});

export default theme;
