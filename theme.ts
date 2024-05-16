"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  colors: {
    "custom-grey": [
      "",
      "#f5f5f6", // --grey-100  var(--mantine-color-custom-grey-1)
      "#eaebed", // --grey-200  var(--mantine-color-custom-grey-2)
      "#d5d6dc", // --grey-300  var(--mantine-color-custom-grey-3)
      "",
      "#acadb9", // --grey-500  var(--mantine-color-custom-grey-5)
      "#7b7c88", // --grey-600  var(--mantine-color-custom-grey-6)
      "",
      "",
      "",
    ],
    "custom-purple": [
      "",
      "#f2ebf9", // --purple-100  var(--mantine-color-custom-purple-1)
      "#e5d5fa", // --purple-200  var(--mantine-color-custom-purple-2)
      "#d1b4f8", // --purple-300  var(--mantine-color-custom-purple-3)
      "#bd93f7", // --purple-400  var(--mantine-color-custom-purple-4)
      "#9854f6", // --purple-500  var(--mantine-color-custom-purple-5)
      "#541f9d", // --purple-600  var(--mantine-color-custom-purple-6)
      "",
      "",
      "",
    ],
  },
  /* Put your mantine theme override here */
});
