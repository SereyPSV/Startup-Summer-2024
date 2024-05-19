"use client";

import "@mantine/core/styles.css";
import React, { Suspense } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// TODO - удалить metadata
// export const metadata = {
//   title: "Mantine Next.js template",
//   description: "I am using Mantine with Next.js!",
// };

const client = new QueryClient();

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Suspense fallback="Loading...">
          <QueryClientProvider client={client}>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </QueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
