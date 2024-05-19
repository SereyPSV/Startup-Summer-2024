import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction, useState } from "react";

export function PaginationMovies({
  activePage,
  setPage,
  totalPages,
}: {
  activePage: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}) {
  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={totalPages}
      color="violet"
      // size="xl"
      // radius="md"
    />
  );
}
