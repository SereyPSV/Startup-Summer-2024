import { GetServerSideProps } from "next";
import { optionsReq } from "../constants/optionsReq";

export async function request(url: string) {
  return await fetch(url, optionsReq)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
}
