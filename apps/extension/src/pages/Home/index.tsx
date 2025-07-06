import type { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Heading, HStack, IconButton } from "@chakra-ui/react";
import { RiSettings5Fill } from "react-icons/ri";
import { Routes } from "@constants";
import { Header } from "@components";
import { changeTheme } from "@reducers/settingsReducer";
import { FaCircleInfo } from "react-icons/fa6";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateToSettings = () => {
    navigate(Routes.settings, { replace: true });
  };

  const handleNavigateToInfo = () => {
    navigate(Routes.info, { replace: true });
  };

  return (
    <>
      <Header>
        <Heading>Romania, Cluj-Napoca</Heading>
        <HStack>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Info"
            onClick={handleNavigateToInfo}
          >
            <FaCircleInfo />
          </IconButton>
          <IconButton
            size="md"
            variant="plain"
            aria-label="Settings"
            onClick={handleNavigateToSettings}
          >
            <RiSettings5Fill />
          </IconButton>
        </HStack>
      </Header>
      <br />
      <Button onClick={() => dispatch(changeTheme({ theme: "dark" }))}>
        Change to dark
      </Button>
      <Button onClick={() => dispatch(changeTheme({ theme: "light" }))}>
        Change to light
      </Button>
    </>
  );
};
