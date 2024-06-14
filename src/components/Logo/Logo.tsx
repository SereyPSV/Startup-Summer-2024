import { Box, Image } from "@mantine/core";
import NextImage from "next/image";
import logo from "../../../public/img/logo.svg";
import Link from "next/link";

export function Logo({ paddingBottom = "80px" }) {
  return (
    <Box pb={paddingBottom}>
      <Link href="/movies/">
        <Image component={NextImage} src={logo} alt="Logo" w="179px" h="36px" />
      </Link>
    </Box>
  );
}
