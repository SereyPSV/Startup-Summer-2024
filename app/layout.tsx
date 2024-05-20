"use client";

import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider, ColorSchemeScript, Flex } from "@mantine/core";
import { SideBar } from "../components";
import { theme } from "../theme";
import "@mantine/core/styles.css";
import "../styles/global.css";

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
            <MantineProvider theme={theme}>
              <Flex maw={1440} mx="auto" bg="#f5f5f6">
                <SideBar />
                {children}
              </Flex>
            </MantineProvider>
          </QueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
