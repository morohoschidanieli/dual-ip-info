import type { FC } from "react";
import { useNavigate } from "react-router";
import { HStack, Image, Link } from "@chakra-ui/react";
import LogoSRC from "@assets/logo_with_text_below.svg";
import { Routes } from "@constants";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleRedirectToHomePage = () => {
    navigate(Routes.root);
  };

  return (
    <header style={{ width: "100%" }}>
      <HStack justifyContent="center">
        <Link onClick={handleRedirectToHomePage}>
          <Image width="auto" src={LogoSRC} alt="logo" />
        </Link>
      </HStack>
    </header>
  );
};
